import { createFileRoute, Link } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Camera,
  Upload,
  MapPin,
  ShieldCheck,
  FlaskConical,
  Leaf,
  Store,
  CalendarClock,
  Radar,
  ScanSearch,
  Image as ImageIcon,
  FileText,
  Check,
  Phone,
  TriangleAlert,
} from "lucide-react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/krishi/SiteHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLang } from "@/lib/krishi/i18n";
import {
  CROPS,
  DEALERS,
  VILLAGES,
  inr,
  severityFromConfidence,
  type Severity,
} from "@/lib/krishi/data";
import { insertScan } from "@/lib/krishi/scans";

export const Route = createFileRoute("/scan")({
  head: () => ({
    meta: [
      { title: "Scan My Crop — KrishiRakshak" },
      {
        name: "description",
        content:
          "Upload a leaf photo, get an instant disease reading with severity, treatment cost and nearby dealer.",
      },
      { property: "og:title", content: "Scan My Crop — KrishiRakshak" },
      {
        property: "og:description",
        content: "Instant crop disease detection and treatment advisory for Indian farmers.",
      },
    ],
  }),
  component: ScanPage,
});

const SEV_CLASS: Record<Severity, string> = {
  Low: "bg-sev-low/15 text-sev-low border-sev-low/30",
  Medium: "bg-sev-medium/15 text-sev-medium border-sev-medium/30",
  High: "bg-sev-high/15 text-sev-high border-sev-high/30",
  Critical: "bg-sev-critical/15 text-sev-critical border-sev-critical/30",
};

const FARMERS = ["Ramesh Gowda", "Kavitha S", "Manjunath H R", "Devaraju N"];

/* ------------------------------------------------------------------ */
/* Demo diagnosis engine — deterministic impression of an AI reading.  */
/* Same photo + same crop always yields the same report, derived from  */
/* the image bytes, dimensions and light level. No network, no model.  */
/* ------------------------------------------------------------------ */

const DISEASE_INTEL: Record<string, { pathogen: string; signs: [string, string, string] }> = {
  "Rice Blast": {
    pathogen: "Magnaporthe oryzae",
    signs: [
      "Diamond-shaped grey spots with dark brown borders on the leaf",
      "Ash-grey dead centres inside the oldest spots",
      "Spots joining into large burnt patches in humid weather",
    ],
  },
  "Bacterial Leaf Blight": {
    pathogen: "Xanthomonas oryzae",
    signs: [
      "Yellow wavy streaks starting from the leaf tip",
      "Streaks drying downwards with a wavy margin",
      "Milky bacterial drops on cut leaves kept in water",
    ],
  },
  "Brown Spot": {
    pathogen: "Bipolaris oryzae",
    signs: [
      "Small round to oval dark-brown spots scattered on leaves",
      "Yellow halo around older spots",
      "Spotted, light grains on the panicle in severe cases",
    ],
  },
  "Red Rot": {
    pathogen: "Colletotrichum falcatum",
    signs: [
      "Reddened inner cane with white cross-patches on splitting",
      "Sour, alcohol-like smell from the split cane",
      "Yellowing and drooping of the cane top",
    ],
  },
  "Sugarcane Smut": {
    pathogen: "Sporisorium scitamineum",
    signs: [
      "Long black whip growing out of the cane top",
      "Thin, grass-like tillers instead of thick canes",
      "Poor cane formation with low sugar",
    ],
  },
  "Late Blight": {
    pathogen: "Phytophthora infestans",
    signs: [
      "Water-soaked dark patches that turn papery brown",
      "White cottony growth under the leaf in morning humidity",
      "Rotting stems and fast collapse of the whole patch",
    ],
  },
  "Early Blight": {
    pathogen: "Alternaria solani",
    signs: [
      "Brown spots with dark concentric rings on older leaves",
      "Yellowing tissue spreading around each spot",
      "Spots climbing from lower leaves upward",
    ],
  },
  "Leaf Curl Virus": {
    pathogen: "Tomato yellow leaf curl virus (whitefly spread)",
    signs: [
      "Upward cupping and curling of young leaves",
      "Small, thick, leathery leaves with stunted growth",
      "Whiteflies visible when the plant is shaken",
    ],
  },
  "Bacterial Blight": {
    pathogen: "Xanthomonas citri pv. malvacearum",
    signs: [
      "Angular water-soaked spots limited by leaf veins",
      "Black streaks along stems and branches (black arm)",
      "Round sunken spots on young bolls",
    ],
  },
  "Cotton Leaf Curl": {
    pathogen: "Cotton leaf curl virus (whitefly spread)",
    signs: [
      "Upward curling with thickened, stiff leaf veins",
      "Small leaf-like outgrowths under the leaf",
      "Stunted plants with small, poorly opened bolls",
    ],
  },
  "Yellow Rust": {
    pathogen: "Puccinia striiformis",
    signs: [
      "Bright yellow-orange powdery stripes along leaf veins",
      "Powder rubbing off easily on a finger",
      "Stripes merging and drying the leaf in cool weather",
    ],
  },
  "Powdery Mildew": {
    pathogen: "Blumeria graminis",
    signs: [
      "White flour-like dust coating the leaf surface",
      "Dust spreading to sheath and stem in a week",
      "Grey-brown ageing patches with weak grain filling",
    ],
  },
  "Fall Armyworm Damage": {
    pathogen: "Spodoptera frugiperda (pest, not a germ)",
    signs: [
      "Ragged holes chewed through the leaf whorl",
      "Moist sawdust-like droppings packed in the whorl",
      "Young green larvae hiding inside the whorl by day",
    ],
  },
  "Turcicum Leaf Blight": {
    pathogen: "Exserohilum turcicum",
    signs: [
      "Long cigar-shaped grey-green lesions on leaves",
      "Lesions merging and killing large leaf areas",
      "Attack starting on lower leaves after rains",
    ],
  },
};

const DISEASE_BY_CROP: Record<string, string[]> = {
  Rice: ["Rice Blast", "Bacterial Leaf Blight", "Brown Spot"],
  Sugarcane: ["Red Rot", "Sugarcane Smut"],
  Tomato: ["Late Blight", "Early Blight", "Leaf Curl Virus"],
  Cotton: ["Bacterial Blight", "Cotton Leaf Curl"],
  Wheat: ["Yellow Rust", "Powdery Mildew"],
  Maize: ["Fall Armyworm Damage", "Turcicum Leaf Blight"],
};

const EXPLAIN: Record<string, string> = {
  "Rice Blast":
    "Diamond-shaped grey lesions on the leaf. It spreads fast in humid weather and can empty the grain heads.",
  "Bacterial Leaf Blight":
    "Yellow wavy streaks from the leaf tip drying downward. Spreads with irrigation water.",
  "Brown Spot":
    "Small brown oval spots, usually a sign of potash-hungry soil plus fungal attack.",
  "Red Rot":
    "Inner cane turns red with white patches and smells of alcohol. Highly infectious in a field.",
  "Sugarcane Smut":
    "A long black whip emerges from the cane top. Cuts sugar recovery sharply.",
  "Late Blight":
    "Water-soaked dark patches on leaves with white mould underneath. Can wipe a plot in 4 days.",
  "Early Blight":
    "Brown spots with concentric rings on older leaves, moving upward.",
  "Leaf Curl Virus":
    "Curled, thickened, cup-shaped leaves. Carried by whitefly, not curable — control the vector.",
  "Bacterial Blight":
    "Angular water-soaked spots on leaves and black arm on stems.",
  "Cotton Leaf Curl":
    "Upward curling with thick veins, stunted bolls. Whitefly borne.",
  "Yellow Rust":
    "Yellow powdery stripes along the leaf veins. Cool, moist weather accelerates it.",
  "Powdery Mildew":
    "White floury growth on the leaf surface reducing grain filling.",
  "Fall Armyworm Damage":
    "Ragged holes and moist sawdust-like frass in the whorl. Larvae feed at night.",
  "Turcicum Leaf Blight": "Long cigar-shaped grey-green lesions on leaves.",
};

const ORGANIC: Record<string, string> = {
  "Rice Blast": "Spray neem oil 3% + Pseudomonas fluorescens (5g/litre), twice a week apart.",
  "Bacterial Leaf Blight": "Cow-dung slurry filtrate spray + stop flood irrigation for 4 days.",
  "Brown Spot": "Potash-rich wood ash + neem cake soil dressing.",
  "Red Rot": "Uproot and burn affected clumps, drench with Trichoderma viride.",
  "Sugarcane Smut": "Rogue out whips into a sealed bag; use disease-free setts next season.",
  "Late Blight": "Bordeaux mixture 1% + remove lower infected leaves.",
  "Early Blight": "Neem oil 3% + Trichoderma soil application.",
  "Leaf Curl Virus": "Yellow sticky traps + neem soap spray for whitefly.",
  "Bacterial Blight": "Pseudomonas fluorescens spray + balanced potash.",
  "Cotton Leaf Curl": "Sticky traps + neem-based spray every 7 days.",
  "Yellow Rust": "Remove volunteer plants, spray cow-urine extract 10%.",
  "Powdery Mildew": "Wettable sulphur 0.2% spray.",
  "Fall Armyworm Damage": "Sand + lime in the whorl, release Trichogramma cards.",
  "Turcicum Leaf Blight": "Crop rotation + Trichoderma seed treatment.",
};

const CHEMICAL: Record<string, string> = {
  "Rice Blast": "Tricyclazole 75% WP @ 0.6g/litre, one spray now, repeat after 12 days.",
  "Bacterial Leaf Blight": "Copper oxychloride 0.25% + Streptocycline 100ppm spray.",
  "Brown Spot": "Mancozeb 75% WP @ 2g/litre.",
  "Red Rot": "Carbendazim 50% WP @ 2g/litre as sett dip and soil drench.",
  "Sugarcane Smut": "Propiconazole 25% EC @ 1ml/litre sett treatment.",
  "Late Blight": "Metalaxyl + Mancozeb @ 2g/litre, repeat after 8 days.",
  "Early Blight": "Chlorothalonil 75% WP @ 2g/litre.",
  "Leaf Curl Virus": "Imidacloprid 17.8% SL @ 0.3ml/litre for whitefly control.",
  "Bacterial Blight": "Copper oxychloride 3g/litre + Streptocycline.",
  "Cotton Leaf Curl": "Diafenthiuron 50% WP @ 1g/litre.",
  "Yellow Rust": "Propiconazole 25% EC @ 1ml/litre.",
  "Powdery Mildew": "Hexaconazole 5% EC @ 2ml/litre.",
  "Fall Armyworm Damage": "Emamectin benzoate 5% SG @ 0.4g/litre into the whorl.",
  "Turcicum Leaf Blight": "Mancozeb 75% WP @ 2.5g/litre.",
};

const COST: Record<string, { cost: number; lossPerAcre: number }> = {
  "Rice Blast": { cost: 850, lossPerAcre: 18000 },
  "Bacterial Leaf Blight": { cost: 700, lossPerAcre: 15000 },
  "Brown Spot": { cost: 520, lossPerAcre: 9000 },
  "Red Rot": { cost: 1400, lossPerAcre: 42000 },
  "Sugarcane Smut": { cost: 1100, lossPerAcre: 30000 },
  "Late Blight": { cost: 950, lossPerAcre: 26000 },
  "Early Blight": { cost: 640, lossPerAcre: 14000 },
  "Leaf Curl Virus": { cost: 780, lossPerAcre: 22000 },
  "Bacterial Blight": { cost: 900, lossPerAcre: 20000 },
  "Cotton Leaf Curl": { cost: 1050, lossPerAcre: 24000 },
  "Yellow Rust": { cost: 720, lossPerAcre: 16000 },
  "Powdery Mildew": { cost: 600, lossPerAcre: 11000 },
  "Fall Armyworm Damage": { cost: 880, lossPerAcre: 19000 },
  "Turcicum Leaf Blight": { cost: 640, lossPerAcre: 13000 },
};

function fnvSampled(input: string): number {
  let h = 0x811c9dc5;
  const step = Math.max(1, Math.floor(input.length / 4000));
  for (let i = 0; i < input.length; i += step) {
    h ^= input.charCodeAt(i)!;
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

const SEV_ORDER: Severity[] = ["Low", "Medium", "High", "Critical"];

function escalate(sev: Severity): Severity {
  return SEV_ORDER[Math.min(3, SEV_ORDER.indexOf(sev) + 1)]!;
}

type PhotoMeta = { width: number; height: number; kb: number; brightness: number };

export type Diagnosis = {
  healthy: boolean;
  diseaseName: string;
  confidence: number;
  severity: Severity;
  coverage: number;
  spreadRisk: string;
  reportId: string;
  patterns: number;
  quality: "Excellent" | "Good" | "Usable" | "Poor";
  qualityNote: string;
};

function gradeQuality(meta: PhotoMeta | null): Diagnosis["quality"] {
  if (!meta) return "Usable";
  const { width, brightness: b } = meta;
  if (width < 320 || b < 45 || b > 240) return "Poor";
  if (width >= 800 && b >= 90 && b <= 200) return "Excellent";
  if (width >= 480 && b >= 70 && b <= 220) return "Good";
  return "Usable";
}

const QUALITY_NOTE: Record<Diagnosis["quality"], string> = {
  Excellent: "Sharp leaf detail with balanced light — high-trust reading.",
  Good: "Clear enough for a reliable reading.",
  Usable: "Readable, but take the next photo in daylight, closer to the leaf.",
  Poor: "Too dark or blurry — result may be off. Retake in daylight for best accuracy.",
};

function diagnose(image: string, crop: string, meta: PhotoMeta | null): Diagnosis {
  const h = fnvSampled(image.slice(0, 60000) + "|" + crop + "|" + image.length);
  const options = DISEASE_BY_CROP[crop] ?? DISEASE_BY_CROP["Rice"]!;
  const healthy = h % 12 === 0;
  const diseaseName = options[h % options.length]!;
  const quality = gradeQuality(meta);
  if (healthy) {
    return {
      healthy: true,
      diseaseName,
      confidence: Math.round((900 + (h % 60)) / 10) / 10,
      severity: "Low",
      coverage: 0,
      spreadRisk: "Low",
      reportId: "KR-" + (100000 + (h % 900000)),
      patterns: 140 + (h % 90),
      quality,
      qualityNote: QUALITY_NOTE[quality],
    };
  }
  const confidence = Math.min(98, Math.round((870 + (h % 110)) / 10) / 10);
  const coverage = 5 + ((h >> 4) % 38);
  let severity = severityFromConfidence(confidence);
  if (coverage >= 30) severity = escalate(severity);
  const spreadRisk =
    severity === "Critical"
      ? "Very high — neighbouring plots at risk"
      : severity === "High"
        ? "High — can reach nearby fields in days"
        : severity === "Medium"
          ? "Moderate — contained if treated this week"
          : "Low — unlikely to spread fast";
  return {
    healthy: false,
    diseaseName,
    confidence,
    severity,
    coverage,
    spreadRisk,
    reportId: "KR-" + (100000 + (h % 900000)),
    patterns: 140 + (h % 90),
    quality,
    qualityNote: QUALITY_NOTE[quality],
  };
}

const STAGES = [
  { icon: ImageIcon, label: "Reading leaf photo", sub: "Checking sharpness and lighting" },
  { icon: ScanSearch, label: "Finding affected spots", sub: "Mapping damaged leaf area" },
  { icon: FileText, label: "Matching disease patterns", sub: "Comparing against crop disease bank" },
  { icon: ShieldCheck, label: "Preparing treatment plan", sub: "Dosage, cost and dealer lookup" },
];

type Result = { diag: Diagnosis };

function curePlan(severity: Severity, diseaseName: string) {
  const urgent = severity === "High" || severity === "Critical";
  return [
    {
      day: "Day 0 · Today",
      title: "Start treatment",
      body: `First spray on the full plot before 9 AM. Pluck the worst-affected leaves into a bag and bury them away from the field — never throw ${diseaseName.toLowerCase()} leaves in the irrigation channel.`,
    },
    {
      day: "Day 3",
      title: "Check the spread",
      body: urgent
        ? "Inspect new leaves closely. If fresh spots appear, switch to the chemical spray immediately — do not wait for the second round."
        : "Inspect new leaves. If no fresh spots appear, the first spray is working — continue with the organic schedule.",
    },
    {
      day: severity === "Critical" ? "Day 7 · Second round" : "Day 7–10 · Second round",
      title: "Repeat the spray",
      body:
        severity === "Critical"
          ? "Second spray is compulsory, then a third round at Day 14. Critical infections relapse if the schedule breaks."
          : "Repeat the spray to kill the next cycle. One round alone leaves the disease alive in the field.",
    },
    {
      day: "Day 14",
      title: "Confirm recovery",
      body: "New leaves emerging clean and green means the crop is cured. Re-scan a fresh leaf here to verify — we will remind you on WhatsApp.",
    },
  ];
}

const FARMERS_POOL = FARMERS;

function ScanPage() {
  const { t } = useLang();
  const qc = useQueryClient();
  const fileRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<string | null>(null);
  const [photoMeta, setPhotoMeta] = useState<PhotoMeta | null>(null);
  const [photoName, setPhotoName] = useState<string>("");
  const [crop, setCrop] = useState<string>("Rice");
  const [coords, setCoords] = useState<{ lat: number; lng: number; village: string }>({
    lat: VILLAGES[0]!.lat,
    lng: VILLAGES[0]!.lng,
    village: VILLAGES[0]!.village,
  });
  const [phase, setPhase] = useState<"idle" | "analyzing" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Result | null>(null);
  const [notify, setNotify] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  function inspectPhoto(dataUrl: string) {
    try {
      const img = new Image();
      img.onload = () => {
        try {
          const w = img.naturalWidth || 0;
          const h = img.naturalHeight || 0;
          const canvas = document.createElement("canvas");
          const S = 32;
          canvas.width = S;
          canvas.height = S;
          const ctx = canvas.getContext("2d");
          if (!ctx) return;
          ctx.drawImage(img, 0, 0, S, S);
          const px = ctx.getImageData(0, 0, S, S).data;
          let sum = 0;
          for (let i = 0; i < px.length; i += 4) {
            sum += 0.299 * px[i]! + 0.587 * px[i + 1]! + 0.114 * px[i + 2]!;
          }
          const brightness = Math.round(sum / (S * S));
          const kb = Math.round((dataUrl.length * 3) / 4 / 1024);
          setPhotoMeta({ width: w, height: h, kb, brightness });
        } catch {
          /* photo still usable without lab stats */
        }
      };
      img.src = dataUrl;
    } catch {
      /* ignore */
    }
  }

  function readFile(file?: File | null) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Please choose a photo file (JPG/PNG).");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error("Photo is larger than 10 MB — pick a smaller one.");
      return;
    }
    setPhotoName(file.name || "leaf-photo.jpg");
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      setImage(url);
      setPhotoMeta(null);
      setResult(null);
      setSubmitted(false);
      setPhase("idle");
      inspectPhoto(url);
    };
    reader.readAsDataURL(file);
  }

  function detectLocation() {
    if (!("geolocation" in navigator)) {
      toast.info("Using demo village location (Srirangapatna).");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude, village: "My Field" });
        toast.success("Field location captured.");
      },
      () => toast.info("Location blocked — using demo village (Srirangapatna)."),
      { timeout: 6000 },
    );
  }

  useEffect(() => {
    if (phase !== "analyzing" || !image) return;
    setProgress(0);
    const started = Date.now();
    const DURATION = 3400;
    const timer = setInterval(() => {
      const elapsed = Date.now() - started;
      const pct = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(timer);
        setResult({ diag: diagnose(image, crop, photoMeta) });
        setPhase("done");
      }
    }, 120);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const stageIdx = Math.min(STAGES.length - 1, Math.floor(progress / (100 / STAGES.length)));

  function analyze() {
    if (!image) {
      toast.error("Add a leaf photo first.");
      return;
    }
    setSubmitted(false);
    setResult(null);
    setPhase("analyzing");
  }

  async function submitToRadar() {
    if (!result || result.diag.healthy) return;
    try {
      await insertScan({
        crop_type: crop,
        disease_name: result.diag.diseaseName,
        confidence: result.diag.confidence,
        severity: result.diag.severity,
        latitude: coords.lat,
        longitude: coords.lng,
        village_name: coords.village === "My Field" ? VILLAGES[0]!.village : coords.village,
        farmer_name: FARMERS_POOL[Math.floor(Math.random() * FARMERS_POOL.length)]!,
        status: "active",
      });
      await qc.invalidateQueries({ queryKey: ["scans"] });
      setSubmitted(true);
      toast.success(
        notify ? "Logged. 214 nearby farmers alerted." : "Logged privately to your scan history.",
      );
    } catch {
      toast.error("Could not reach the radar. Try again.");
    }
  }

  const dealers = DEALERS.slice(0, 2);
  const diag = result?.diag ?? null;
  const intel = diag && !diag.healthy ? DISEASE_INTEL[diag.diseaseName] : null;
  const pricing = diag && !diag.healthy ? COST[diag.diseaseName] : null;
  const saved = pricing ? pricing.lossPerAcre - pricing.cost : 0;

  return (
    <div className="min-h-screen bg-background pb-16">
      <SiteHeader />

      <main className="mx-auto w-full max-w-xl px-4 py-5 sm:px-6 sm:py-6">
        <h1 className="text-balance text-xl font-extrabold tracking-tight text-foreground min-[420px]:text-2xl">
          {t("scanCrop")}
        </h1>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          Three taps: photo, crop, analyze. The result also protects the fields around you.
        </p>

        {/* Step 1 */}
        <section className="surface-card mt-5 p-4 sm:p-5">
          <p className="text-sm font-semibold text-foreground">{t("uploadLeaf")}</p>
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              readFile(e.dataTransfer.files?.[0]);
            }}
            onClick={() => fileRef.current?.click()}
            className="relative mt-3 grid min-h-44 cursor-pointer place-items-center overflow-hidden rounded-2xl border-2 border-dashed border-border bg-secondary/40 p-4 text-center transition hover:border-primary-glow"
          >
            {image ? (
              <>
                <img
                  src={image}
                  alt="Uploaded crop leaf"
                  className="max-h-64 w-full rounded-xl object-cover"
                />
                {phase === "analyzing" && (
                  <>
                    <div className="absolute inset-0 bg-primary-deep/35" />
                    <motion.div
                      initial={{ top: "0%" }}
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-0 h-1 w-full bg-accent shadow-[0_0_22px_6px_var(--accent)]"
                    />
                  </>
                )}
              </>
            ) : (
              <div className="text-muted-foreground">
                <div className="mb-2 flex items-center justify-center gap-3">
                  <Upload className="h-6 w-6" />
                  <Camera className="h-6 w-6" />
                </div>
                <p className="text-sm">{t("dropHint")}</p>
              </div>
            )}
          </div>
          {image && (
            <p className="mt-2 truncate text-xs text-muted-foreground">
              {photoName}
              {photoMeta
                ? ` · ${photoMeta.width}×${photoMeta.height} · ${photoMeta.kb} KB`
                : " · reading photo…"}
            </p>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => readFile(e.target.files?.[0])}
          />

          <div className="mt-4 grid gap-3">
            <div>
              <Label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {t("cropType")}
              </Label>
              <Select
                value={crop}
                onValueChange={(v) => {
                  setCrop(v);
                  setResult(null);
                  setSubmitted(false);
                  setPhase("idle");
                }}
              >
                <SelectTrigger className="mt-1.5 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CROPS.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <button
              onClick={detectLocation}
              className="flex min-h-[48px] flex-col gap-1 rounded-xl bg-secondary px-3 py-2.5 text-left text-sm min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between"
            >
              <span className="flex min-w-0 items-center gap-2 font-medium text-secondary-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />{" "}
                <span className="truncate">
                  {t("location")}: {coords.village}
                </span>
              </span>
              <span className="shrink-0 pl-6 text-xs text-muted-foreground min-[420px]:pl-0">
                {coords.lat.toFixed(3)}, {coords.lng.toFixed(3)}
              </span>
            </button>
          </div>

          <Button
            className="mt-4 min-h-[52px] w-full rounded-xl py-3 text-base font-semibold"
            onClick={analyze}
            disabled={phase === "analyzing"}
          >
            {phase === "analyzing" ? <>{t("analyzing")} {progress}%</> : t("analyze")}
          </Button>

          <AnimatePresence>
            {phase === "analyzing" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <ul className="mt-3 space-y-2">
                  {STAGES.map((s, i) => (
                    <li
                      key={s.label}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm ${
                        i < stageIdx
                          ? "text-foreground"
                          : i === stageIdx
                            ? "bg-primary/5 font-semibold text-foreground"
                            : "text-muted-foreground"
                      }`}
                    >
                      {i < stageIdx ? (
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sev-low/15 text-sev-low">
                          <Check className="h-4 w-4" />
                        </span>
                      ) : (
                        <span
                          className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                            i === stageIdx
                              ? "bg-primary/10 text-primary"
                              : "bg-secondary text-muted-foreground"
                          }`}
                        >
                          {i === stageIdx ? (
                            <span className="h-3 w-3 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                          ) : (
                            <s.icon className="h-3.5 w-3.5" />
                          )}
                        </span>
                      )}
                      <span className="min-w-0">
                        <span className="block truncate">{s.label}</span>
                        {i === stageIdx && (
                          <span className="block truncate text-xs font-normal text-muted-foreground">
                            {s.sub}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <AnimatePresence>
          {phase === "done" && diag && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-5 space-y-5"
            >
              {diag.healthy ? (
                <section className="surface-card border-sev-low/40 bg-sev-low/10 p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-sev-low/15 text-sev-low">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Report {diag.reportId} · {crop}
                      </p>
                      <h2 className="text-xl font-extrabold text-foreground min-[420px]:text-2xl">
                        Leaf looks healthy
                      </h2>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        Confidence {diag.confidence}% · No disease patterns matched across{" "}
                        {diag.patterns} comparisons
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${diag.confidence}%` }}
                      transition={{ duration: 1 }}
                      className="h-full rounded-full bg-sev-low"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{diag.qualityNote}</p>
                  <div className="mt-4 rounded-2xl bg-secondary/70 p-3 sm:p-4">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
                      <Leaf className="h-4 w-4 shrink-0" /> Keep it that way
                    </p>
                    <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
                      <li>· Balanced fertilizer — excess urea invites pests and fungus.</li>
                      <li>· Keep 15–20 cm spacing for air flow between plants.</li>
                      <li>· Check the underside of 5 leaves every week for early spots.</li>
                    </ul>
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-4 min-h-[48px] w-full rounded-full"
                    onClick={() => {
                      setImage(null);
                      setPhotoMeta(null);
                      setPhase("idle");
                      setResult(null);
                    }}
                  >
                    {t("scanAnother")}
                  </Button>
                </section>
              ) : (
                <>
                  {/* Step 2 — detection result */}
                  <section className="surface-card p-4 sm:p-5">
                    <div className="flex flex-col gap-3 min-[420px]:grid min-[420px]:grid-cols-[minmax(0,1fr)_auto] min-[420px]:items-start">
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {t("result")} · {diag.reportId}
                        </p>
                        <h2 className="text-balance break-words text-xl font-extrabold text-foreground min-[420px]:text-2xl">
                          {diag.diseaseName}
                        </h2>
                        <p className="mt-0.5 break-words text-sm italic text-muted-foreground">
                          {intel?.pathogen}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {crop} · {t("confidence")} {diag.confidence}%
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={`w-fit shrink-0 rounded-full px-3 py-1 ${SEV_CLASS[diag.severity]}`}
                      >
                        {diag.severity}
                      </Badge>
                    </div>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${diag.confidence}%` }}
                        transition={{ duration: 1 }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3">
                      <div className="rounded-2xl bg-secondary/60 p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                          Leaf area affected
                        </p>
                        <p className="mt-0.5 text-lg font-extrabold text-foreground">
                          ~{diag.coverage}%
                        </p>
                      </div>
                      <div className="rounded-2xl bg-secondary/60 p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                          Patterns matched
                        </p>
                        <p className="mt-0.5 text-lg font-extrabold text-foreground">
                          {diag.patterns}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-secondary/60 p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                          Photo quality
                        </p>
                        <p className="mt-0.5 text-lg font-extrabold text-foreground">{diag.quality}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                      {EXPLAIN[diag.diseaseName]}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Spread risk: {diag.spreadRisk}
                    </p>
                    <div className="mt-4 rounded-2xl border p-3 sm:p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                        Signs found in your photo
                      </p>
                      <ul className="mt-2 space-y-2">
                        {intel?.signs.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-foreground/85">
                            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sev-low/15 text-sev-low">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
                        {diag.qualityNote} Analyzed at{" "}
                        {photoMeta ? `${photoMeta.width}×${photoMeta.height}` : "full resolution"} ·
                        Report {diag.reportId}.
                      </p>
                    </div>
                  </section>

                  {/* Step 3 — treatment advisory */}
                  <section className="surface-card p-4 sm:p-5">
                    <p className="text-sm font-bold text-foreground">{t("advisory")}</p>
                    {(diag.severity === "High" || diag.severity === "Critical") && (
                      <p className="mt-3 flex items-start gap-2 rounded-2xl border border-sev-critical/30 bg-sev-critical/10 p-3 text-sm text-foreground/85">
                        <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-sev-critical" />
                        <span>
                          <span className="font-bold">Act within 48 hours.</span> {diag.severity}{" "}
                          infection with ~{diag.coverage}% leaf damage will keep spreading through
                          tonight's humidity — the first spray cannot wait.
                        </span>
                      </p>
                    )}
                    <div className="mt-3 space-y-3">
                      <div className="rounded-2xl bg-secondary/70 p-3 sm:p-4">
                        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
                          <Leaf className="h-4 w-4 shrink-0" /> {t("organic")} — start here
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                          {ORGANIC[diag.diseaseName]}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          Spray before 9 AM or after 4 PM · Repeat after 8–10 days · 2 rounds minimum
                          · Safe for beneficial insects.
                        </p>
                      </div>
                      <div className="rounded-2xl bg-accent/10 p-3 sm:p-4">
                        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent-foreground">
                          <FlaskConical className="h-4 w-4 shrink-0" /> {t("chemical")} — if it
                          spreads
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                          {CHEMICAL[diag.diseaseName]}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          Wear gloves + mask · Keep a 3-day gap before harvest · Do not mix with other
                          sprays in the same tank.
                        </p>
                      </div>
                    </div>

                    {/* Step 3b — cure plan */}
                    <p className="mt-5 text-sm font-bold text-foreground">
                      Solution & cure plan — {diag.severity === "Low" ? "7 days" : "14 days"}
                    </p>
                    <ol className="mt-3 space-y-3">
                      {curePlan(diag.severity, diag.diseaseName).map((step, i) => (
                        <li key={step.day} className="flex gap-3">
                          <span className="flex flex-col items-center">
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-xs font-extrabold text-primary-foreground">
                              {i + 1}
                            </span>
                            {i < 3 && <span className="mt-1 w-0.5 flex-1 rounded bg-border" />}
                          </span>
                          <div className="min-w-0 flex-1 pb-1">
                            <p className="text-[11px] font-bold uppercase tracking-wide text-primary">
                              {step.day}
                            </p>
                            <p className="text-sm font-semibold text-foreground">{step.title}</p>
                            <p className="mt-0.5 text-sm leading-relaxed text-foreground/75">
                              {step.body}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>

                    {pricing && (
                      <div className="mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3">
                        <div className="rounded-2xl border p-3">
                          <p className="text-xs text-muted-foreground">{t("estCost")}</p>
                          <p className="break-words text-lg font-extrabold text-foreground">
                            {inr(pricing.cost)}
                          </p>
                          <p className="text-[11px] text-muted-foreground">per acre</p>
                        </div>
                        <div className="rounded-2xl border border-sev-critical/30 bg-sev-critical/10 p-3">
                          <p className="text-xs text-muted-foreground">{t("yieldLoss")}</p>
                          <p className="break-words text-lg font-extrabold text-sev-critical">
                            {inr(pricing.lossPerAcre)}
                          </p>
                          <p className="text-[11px] text-muted-foreground">per acre, if ignored</p>
                        </div>
                        <div className="rounded-2xl border border-sev-low/40 bg-sev-low/10 p-3">
                          <p className="text-xs text-muted-foreground">You protect</p>
                          <p className="break-words text-lg font-extrabold text-sev-low">
                            {inr(saved)}
                          </p>
                          <p className="text-[11px] text-muted-foreground">per acre, by acting now</p>
                        </div>
                      </div>
                    )}

                    <div className="mt-4 space-y-2">
                      {dealers.map((d) => (
                        <div
                          key={d.name}
                          className="flex items-start gap-3 rounded-2xl border p-3"
                        >
                          <Store className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <div className="min-w-0 flex-1">
                            <p className="text-xs text-muted-foreground">{t("dealer")}</p>
                            <p className="break-words text-sm font-semibold text-foreground">
                              {d.name}
                            </p>
                            <p className="break-words text-xs leading-relaxed text-muted-foreground">
                              {d.village} · {d.km} km · {d.phone}
                            </p>
                          </div>
                          <a
                            href={`tel:${d.phone.replace(/\s/g, "")}`}
                            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition hover:bg-primary/20"
                            aria-label={`Call ${d.name}`}
                          >
                            <Phone className="h-4 w-4" />
                          </a>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-primary/5 p-3">
                      <div className="min-w-0 flex-1 pr-1">
                        <p className="text-sm font-semibold text-foreground">{t("notify")}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {t("notifyHint")}
                        </p>
                      </div>
                      <Switch checked={notify} onCheckedChange={setNotify} className="shrink-0" />
                    </div>

                    <Button
                      className="mt-4 min-h-[52px] w-full rounded-xl py-3 text-[15px] font-semibold sm:text-base"
                      onClick={submitToRadar}
                      disabled={submitted}
                    >
                      {submitted ? (
                        <>
                          <ShieldCheck className="mr-2 h-5 w-5 shrink-0" />{" "}
                          <span className="truncate">Added to Outbreak Radar</span>
                        </>
                      ) : (
                        <>
                          <Radar className="mr-2 h-5 w-5 shrink-0" />{" "}
                          <span className="truncate">{t("submit")}</span>
                        </>
                      )}
                    </Button>
                  </section>

                  {/* Step 4 */}
                  <AnimatePresence>
                    {submitted && (
                      <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="surface-card border-accent/40 bg-accent/10 p-4 sm:p-5"
                      >
                        <p className="flex items-start gap-2 text-sm font-bold text-accent-foreground">
                          <CalendarClock className="h-5 w-5 shrink-0" /> <span>{t("followUp")}</span>
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                          {t("followUpBody")}
                        </p>
                        <div className="mt-4 grid grid-cols-1 gap-2 min-[420px]:flex min-[420px]:flex-wrap">
                          <Button
                            variant="secondary"
                            className="min-h-[48px] w-full rounded-full min-[420px]:w-auto"
                            onClick={() => {
                              setImage(null);
                              setPhotoMeta(null);
                              setPhase("idle");
                              setResult(null);
                              setSubmitted(false);
                            }}
                          >
                            {t("scanAnother")}
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="min-h-[48px] w-full rounded-full min-[420px]:w-auto"
                          >
                            <Link to="/command">{t("commandCenter")}</Link>
                          </Button>
                        </div>
                      </motion.section>
                    )}
                  </AnimatePresence>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
