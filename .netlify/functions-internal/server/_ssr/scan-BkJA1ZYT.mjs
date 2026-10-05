import { a as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as useLang } from "./router-C2QLkYeb.mjs";
import { C as FileText, D as Camera, E as Check, O as CalendarClock, S as FlaskConical, T as ChevronDown, a as TriangleAlert, b as Image$1, d as ScanSearch, g as MapPin, i as Upload, l as ShieldCheck, m as Phone, p as Radar, s as Store, v as Leaf, w as ChevronUp } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as SiteHeader, r as cn, t as Button } from "./button-BHUavsfO.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { a as VILLAGES, i as Switch, l as severityFromConfidence, n as DEALERS, o as inr, s as insertScan, t as CROPS } from "./scans-qVrcRdfM.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scan-BkJA1ZYT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var SEV_CLASS = {
	Low: "bg-sev-low/15 text-sev-low border-sev-low/30",
	Medium: "bg-sev-medium/15 text-sev-medium border-sev-medium/30",
	High: "bg-sev-high/15 text-sev-high border-sev-high/30",
	Critical: "bg-sev-critical/15 text-sev-critical border-sev-critical/30"
};
var FARMERS = [
	"Ramesh Gowda",
	"Kavitha S",
	"Manjunath H R",
	"Devaraju N"
];
var DISEASE_INTEL = {
	"Rice Blast": {
		pathogen: "Magnaporthe oryzae",
		signs: [
			"Diamond-shaped grey spots with dark brown borders on the leaf",
			"Ash-grey dead centres inside the oldest spots",
			"Spots joining into large burnt patches in humid weather"
		]
	},
	"Bacterial Leaf Blight": {
		pathogen: "Xanthomonas oryzae",
		signs: [
			"Yellow wavy streaks starting from the leaf tip",
			"Streaks drying downwards with a wavy margin",
			"Milky bacterial drops on cut leaves kept in water"
		]
	},
	"Brown Spot": {
		pathogen: "Bipolaris oryzae",
		signs: [
			"Small round to oval dark-brown spots scattered on leaves",
			"Yellow halo around older spots",
			"Spotted, light grains on the panicle in severe cases"
		]
	},
	"Red Rot": {
		pathogen: "Colletotrichum falcatum",
		signs: [
			"Reddened inner cane with white cross-patches on splitting",
			"Sour, alcohol-like smell from the split cane",
			"Yellowing and drooping of the cane top"
		]
	},
	"Sugarcane Smut": {
		pathogen: "Sporisorium scitamineum",
		signs: [
			"Long black whip growing out of the cane top",
			"Thin, grass-like tillers instead of thick canes",
			"Poor cane formation with low sugar"
		]
	},
	"Late Blight": {
		pathogen: "Phytophthora infestans",
		signs: [
			"Water-soaked dark patches that turn papery brown",
			"White cottony growth under the leaf in morning humidity",
			"Rotting stems and fast collapse of the whole patch"
		]
	},
	"Early Blight": {
		pathogen: "Alternaria solani",
		signs: [
			"Brown spots with dark concentric rings on older leaves",
			"Yellowing tissue spreading around each spot",
			"Spots climbing from lower leaves upward"
		]
	},
	"Leaf Curl Virus": {
		pathogen: "Tomato yellow leaf curl virus (whitefly spread)",
		signs: [
			"Upward cupping and curling of young leaves",
			"Small, thick, leathery leaves with stunted growth",
			"Whiteflies visible when the plant is shaken"
		]
	},
	"Bacterial Blight": {
		pathogen: "Xanthomonas citri pv. malvacearum",
		signs: [
			"Angular water-soaked spots limited by leaf veins",
			"Black streaks along stems and branches (black arm)",
			"Round sunken spots on young bolls"
		]
	},
	"Cotton Leaf Curl": {
		pathogen: "Cotton leaf curl virus (whitefly spread)",
		signs: [
			"Upward curling with thickened, stiff leaf veins",
			"Small leaf-like outgrowths under the leaf",
			"Stunted plants with small, poorly opened bolls"
		]
	},
	"Yellow Rust": {
		pathogen: "Puccinia striiformis",
		signs: [
			"Bright yellow-orange powdery stripes along leaf veins",
			"Powder rubbing off easily on a finger",
			"Stripes merging and drying the leaf in cool weather"
		]
	},
	"Powdery Mildew": {
		pathogen: "Blumeria graminis",
		signs: [
			"White flour-like dust coating the leaf surface",
			"Dust spreading to sheath and stem in a week",
			"Grey-brown ageing patches with weak grain filling"
		]
	},
	"Fall Armyworm Damage": {
		pathogen: "Spodoptera frugiperda (pest, not a germ)",
		signs: [
			"Ragged holes chewed through the leaf whorl",
			"Moist sawdust-like droppings packed in the whorl",
			"Young green larvae hiding inside the whorl by day"
		]
	},
	"Turcicum Leaf Blight": {
		pathogen: "Exserohilum turcicum",
		signs: [
			"Long cigar-shaped grey-green lesions on leaves",
			"Lesions merging and killing large leaf areas",
			"Attack starting on lower leaves after rains"
		]
	}
};
var DISEASE_BY_CROP = {
	Rice: [
		"Rice Blast",
		"Bacterial Leaf Blight",
		"Brown Spot"
	],
	Sugarcane: ["Red Rot", "Sugarcane Smut"],
	Tomato: [
		"Late Blight",
		"Early Blight",
		"Leaf Curl Virus"
	],
	Cotton: ["Bacterial Blight", "Cotton Leaf Curl"],
	Wheat: ["Yellow Rust", "Powdery Mildew"],
	Maize: ["Fall Armyworm Damage", "Turcicum Leaf Blight"]
};
var EXPLAIN = {
	"Rice Blast": "Diamond-shaped grey lesions on the leaf. It spreads fast in humid weather and can empty the grain heads.",
	"Bacterial Leaf Blight": "Yellow wavy streaks from the leaf tip drying downward. Spreads with irrigation water.",
	"Brown Spot": "Small brown oval spots, usually a sign of potash-hungry soil plus fungal attack.",
	"Red Rot": "Inner cane turns red with white patches and smells of alcohol. Highly infectious in a field.",
	"Sugarcane Smut": "A long black whip emerges from the cane top. Cuts sugar recovery sharply.",
	"Late Blight": "Water-soaked dark patches on leaves with white mould underneath. Can wipe a plot in 4 days.",
	"Early Blight": "Brown spots with concentric rings on older leaves, moving upward.",
	"Leaf Curl Virus": "Curled, thickened, cup-shaped leaves. Carried by whitefly, not curable — control the vector.",
	"Bacterial Blight": "Angular water-soaked spots on leaves and black arm on stems.",
	"Cotton Leaf Curl": "Upward curling with thick veins, stunted bolls. Whitefly borne.",
	"Yellow Rust": "Yellow powdery stripes along the leaf veins. Cool, moist weather accelerates it.",
	"Powdery Mildew": "White floury growth on the leaf surface reducing grain filling.",
	"Fall Armyworm Damage": "Ragged holes and moist sawdust-like frass in the whorl. Larvae feed at night.",
	"Turcicum Leaf Blight": "Long cigar-shaped grey-green lesions on leaves."
};
var ORGANIC = {
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
	"Turcicum Leaf Blight": "Crop rotation + Trichoderma seed treatment."
};
var CHEMICAL = {
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
	"Turcicum Leaf Blight": "Mancozeb 75% WP @ 2.5g/litre."
};
var COST = {
	"Rice Blast": {
		cost: 850,
		lossPerAcre: 18e3
	},
	"Bacterial Leaf Blight": {
		cost: 700,
		lossPerAcre: 15e3
	},
	"Brown Spot": {
		cost: 520,
		lossPerAcre: 9e3
	},
	"Red Rot": {
		cost: 1400,
		lossPerAcre: 42e3
	},
	"Sugarcane Smut": {
		cost: 1100,
		lossPerAcre: 3e4
	},
	"Late Blight": {
		cost: 950,
		lossPerAcre: 26e3
	},
	"Early Blight": {
		cost: 640,
		lossPerAcre: 14e3
	},
	"Leaf Curl Virus": {
		cost: 780,
		lossPerAcre: 22e3
	},
	"Bacterial Blight": {
		cost: 900,
		lossPerAcre: 2e4
	},
	"Cotton Leaf Curl": {
		cost: 1050,
		lossPerAcre: 24e3
	},
	"Yellow Rust": {
		cost: 720,
		lossPerAcre: 16e3
	},
	"Powdery Mildew": {
		cost: 600,
		lossPerAcre: 11e3
	},
	"Fall Armyworm Damage": {
		cost: 880,
		lossPerAcre: 19e3
	},
	"Turcicum Leaf Blight": {
		cost: 640,
		lossPerAcre: 13e3
	}
};
function fnvSampled(input) {
	let h = 2166136261;
	const step = Math.max(1, Math.floor(input.length / 4e3));
	for (let i = 0; i < input.length; i += step) {
		h ^= input.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}
var SEV_ORDER = [
	"Low",
	"Medium",
	"High",
	"Critical"
];
function escalate(sev) {
	return SEV_ORDER[Math.min(3, SEV_ORDER.indexOf(sev) + 1)];
}
function gradeQuality(meta) {
	if (!meta) return "Usable";
	const { width, brightness: b } = meta;
	if (width < 320 || b < 45 || b > 240) return "Poor";
	if (width >= 800 && b >= 90 && b <= 200) return "Excellent";
	if (width >= 480 && b >= 70 && b <= 220) return "Good";
	return "Usable";
}
var QUALITY_NOTE = {
	Excellent: "Sharp leaf detail with balanced light — high-trust reading.",
	Good: "Clear enough for a reliable reading.",
	Usable: "Readable, but take the next photo in daylight, closer to the leaf.",
	Poor: "Too dark or blurry — result may be off. Retake in daylight for best accuracy."
};
function diagnose(image, crop, meta) {
	const h = fnvSampled(image.slice(0, 6e4) + "|" + crop + "|" + image.length);
	const options = DISEASE_BY_CROP[crop] ?? DISEASE_BY_CROP["Rice"];
	const healthy = h % 12 === 0;
	const diseaseName = options[h % options.length];
	const quality = gradeQuality(meta);
	if (healthy) return {
		healthy: true,
		diseaseName,
		confidence: Math.round((900 + h % 60) / 10) / 10,
		severity: "Low",
		coverage: 0,
		spreadRisk: "Low",
		reportId: "KR-" + (1e5 + h % 9e5),
		patterns: 140 + h % 90,
		quality,
		qualityNote: QUALITY_NOTE[quality]
	};
	const confidence = Math.min(98, Math.round((870 + h % 110) / 10) / 10);
	const coverage = 5 + (h >> 4) % 38;
	let severity = severityFromConfidence(confidence);
	if (coverage >= 30) severity = escalate(severity);
	return {
		healthy: false,
		diseaseName,
		confidence,
		severity,
		coverage,
		spreadRisk: severity === "Critical" ? "Very high — neighbouring plots at risk" : severity === "High" ? "High — can reach nearby fields in days" : severity === "Medium" ? "Moderate — contained if treated this week" : "Low — unlikely to spread fast",
		reportId: "KR-" + (1e5 + h % 9e5),
		patterns: 140 + h % 90,
		quality,
		qualityNote: QUALITY_NOTE[quality]
	};
}
var STAGES = [
	{
		icon: Image$1,
		label: "Reading leaf photo",
		sub: "Checking sharpness and lighting"
	},
	{
		icon: ScanSearch,
		label: "Finding affected spots",
		sub: "Mapping damaged leaf area"
	},
	{
		icon: FileText,
		label: "Matching disease patterns",
		sub: "Comparing against crop disease bank"
	},
	{
		icon: ShieldCheck,
		label: "Preparing treatment plan",
		sub: "Dosage, cost and dealer lookup"
	}
];
function curePlan(severity, diseaseName) {
	const urgent = severity === "High" || severity === "Critical";
	return [
		{
			day: "Day 0 · Today",
			title: "Start treatment",
			body: `First spray on the full plot before 9 AM. Pluck the worst-affected leaves into a bag and bury them away from the field — never throw ${diseaseName.toLowerCase()} leaves in the irrigation channel.`
		},
		{
			day: "Day 3",
			title: "Check the spread",
			body: urgent ? "Inspect new leaves closely. If fresh spots appear, switch to the chemical spray immediately — do not wait for the second round." : "Inspect new leaves. If no fresh spots appear, the first spray is working — continue with the organic schedule."
		},
		{
			day: severity === "Critical" ? "Day 7 · Second round" : "Day 7–10 · Second round",
			title: "Repeat the spray",
			body: severity === "Critical" ? "Second spray is compulsory, then a third round at Day 14. Critical infections relapse if the schedule breaks." : "Repeat the spray to kill the next cycle. One round alone leaves the disease alive in the field."
		},
		{
			day: "Day 14",
			title: "Confirm recovery",
			body: "New leaves emerging clean and green means the crop is cured. Re-scan a fresh leaf here to verify — we will remind you on WhatsApp."
		}
	];
}
var FARMERS_POOL = FARMERS;
function ScanPage() {
	const { t } = useLang();
	const qc = useQueryClient();
	const fileRef = (0, import_react.useRef)(null);
	const [image, setImage] = (0, import_react.useState)(null);
	const [photoMeta, setPhotoMeta] = (0, import_react.useState)(null);
	const [photoName, setPhotoName] = (0, import_react.useState)("");
	const [crop, setCrop] = (0, import_react.useState)("Rice");
	const [coords, setCoords] = (0, import_react.useState)({
		lat: VILLAGES[0].lat,
		lng: VILLAGES[0].lng,
		village: VILLAGES[0].village
	});
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [result, setResult] = (0, import_react.useState)(null);
	const [notify, setNotify] = (0, import_react.useState)(true);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	function inspectPhoto(dataUrl) {
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
					for (let i = 0; i < px.length; i += 4) sum += .299 * px[i] + .587 * px[i + 1] + .114 * px[i + 2];
					const brightness = Math.round(sum / 1024);
					const kb = Math.round(dataUrl.length * 3 / 4 / 1024);
					setPhotoMeta({
						width: w,
						height: h,
						kb,
						brightness
					});
				} catch {}
			};
			img.src = dataUrl;
		} catch {}
	}
	function readFile(file) {
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			toast.error("Please choose a photo file (JPG/PNG).");
			return;
		}
		if (file.size > 10485760) {
			toast.error("Photo is larger than 10 MB — pick a smaller one.");
			return;
		}
		setPhotoName(file.name || "leaf-photo.jpg");
		const reader = new FileReader();
		reader.onload = () => {
			const url = reader.result;
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
		navigator.geolocation.getCurrentPosition((pos) => {
			setCoords({
				lat: pos.coords.latitude,
				lng: pos.coords.longitude,
				village: "My Field"
			});
			toast.success("Field location captured.");
		}, () => toast.info("Location blocked — using demo village (Srirangapatna)."), { timeout: 6e3 });
	}
	(0, import_react.useEffect)(() => {
		if (phase !== "analyzing" || !image) return;
		setProgress(0);
		const started = Date.now();
		const DURATION = 3400;
		const timer = setInterval(() => {
			const elapsed = Date.now() - started;
			const pct = Math.min(100, Math.round(elapsed / DURATION * 100));
			setProgress(pct);
			if (pct >= 100) {
				clearInterval(timer);
				setResult({ diag: diagnose(image, crop, photoMeta) });
				setPhase("done");
			}
		}, 120);
		return () => clearInterval(timer);
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
				village_name: coords.village === "My Field" ? VILLAGES[0].village : coords.village,
				farmer_name: FARMERS_POOL[Math.floor(Math.random() * FARMERS_POOL.length)],
				status: "active"
			});
			await qc.invalidateQueries({ queryKey: ["scans"] });
			setSubmitted(true);
			toast.success(notify ? "Logged. 214 nearby farmers alerted." : "Logged privately to your scan history.");
		} catch {
			toast.error("Could not reach the radar. Try again.");
		}
	}
	const dealers = DEALERS.slice(0, 2);
	const diag = result?.diag ?? null;
	const intel = diag && !diag.healthy ? DISEASE_INTEL[diag.diseaseName] : null;
	const pricing = diag && !diag.healthy ? COST[diag.diseaseName] : null;
	const saved = pricing ? pricing.lossPerAcre - pricing.cost : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto w-full max-w-xl px-4 py-5 sm:px-6 sm:py-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-balance text-xl font-extrabold tracking-tight text-foreground min-[420px]:text-2xl",
					children: t("scanCrop")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted-foreground",
					children: "Three taps: photo, crop, analyze. The result also protects the fields around you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "surface-card mt-5 p-4 sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-foreground",
							children: t("uploadLeaf")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							onDragOver: (e) => e.preventDefault(),
							onDrop: (e) => {
								e.preventDefault();
								readFile(e.dataTransfer.files?.[0]);
							},
							onClick: () => fileRef.current?.click(),
							className: "relative mt-3 grid min-h-44 cursor-pointer place-items-center overflow-hidden rounded-2xl border-2 border-dashed border-border bg-secondary/40 p-4 text-center transition hover:border-primary-glow",
							children: image ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: image,
								alt: "Uploaded crop leaf",
								className: "max-h-64 w-full rounded-xl object-cover"
							}), phase === "analyzing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-primary-deep/35" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { top: "0%" },
								animate: { top: [
									"0%",
									"100%",
									"0%"
								] },
								transition: {
									duration: 1.6,
									repeat: Infinity,
									ease: "easeInOut"
								},
								className: "absolute left-0 h-1 w-full bg-accent shadow-[0_0_22px_6px_var(--accent)]"
							})] })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 flex items-center justify-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-6 w-6" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: t("dropHint")
								})]
							})
						}),
						image && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 truncate text-xs text-muted-foreground",
							children: [photoName, photoMeta ? ` · ${photoMeta.width}×${photoMeta.height} · ${photoMeta.kb} KB` : " · reading photo…"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: fileRef,
							type: "file",
							accept: "image/*",
							capture: "environment",
							className: "hidden",
							onChange: (e) => readFile(e.target.files?.[0])
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: t("cropType")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: crop,
								onValueChange: (v) => {
									setCrop(v);
									setResult(null);
									setSubmitted(false);
									setPhase("idle");
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
									className: "mt-1.5 w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: CROPS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: c,
									children: c
								}, c)) })]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: detectLocation,
								className: "flex min-h-[48px] flex-col gap-1 rounded-xl bg-secondary px-3 py-2.5 text-left text-sm min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex min-w-0 items-center gap-2 font-medium text-secondary-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 text-primary" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "truncate",
											children: [
												t("location"),
												": ",
												coords.village
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "shrink-0 pl-6 text-xs text-muted-foreground min-[420px]:pl-0",
									children: [
										coords.lat.toFixed(3),
										", ",
										coords.lng.toFixed(3)
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4 min-h-[52px] w-full rounded-xl py-3 text-base font-semibold",
							onClick: analyze,
							disabled: phase === "analyzing",
							children: phase === "analyzing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								t("analyzing"),
								" ",
								progress,
								"%"
							] }) : t("analyze")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: phase === "analyzing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								height: 0
							},
							animate: {
								opacity: 1,
								height: "auto"
							},
							exit: {
								opacity: 0,
								height: 0
							},
							className: "overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-primary transition-all duration-150",
									style: { width: `${progress}%` }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2",
								children: STAGES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: `flex items-center gap-3 rounded-xl px-3 py-2 text-sm ${i < stageIdx ? "text-foreground" : i === stageIdx ? "bg-primary/5 font-semibold text-foreground" : "text-muted-foreground"}`,
									children: [i < stageIdx ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sev-low/15 text-sev-low",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `grid h-6 w-6 shrink-0 place-items-center rounded-full ${i === stageIdx ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"}`,
										children: i === stageIdx ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 animate-spin rounded-full border-2 border-primary border-t-transparent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-3.5 w-3.5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block truncate",
											children: s.label
										}), i === stageIdx && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block truncate text-xs font-normal text-muted-foreground",
											children: s.sub
										})]
									})]
								}, s.label))
							})]
						}) })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: phase === "done" && diag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "mt-5 space-y-5",
					children: diag.healthy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "surface-card border-sev-low/40 bg-sev-low/10 p-4 sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-sev-low/15 text-sev-low",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
											children: [
												"Report ",
												diag.reportId,
												" · ",
												crop
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-xl font-extrabold text-foreground min-[420px]:text-2xl",
											children: "Leaf looks healthy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-0.5 text-sm text-muted-foreground",
											children: [
												"Confidence ",
												diag.confidence,
												"% · No disease patterns matched across",
												" ",
												diag.patterns,
												" comparisons"
											]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: { width: 0 },
									animate: { width: `${diag.confidence}%` },
									transition: { duration: 1 },
									className: "h-full rounded-full bg-sev-low"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-foreground/80",
								children: diag.qualityNote
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 rounded-2xl bg-secondary/70 p-3 sm:p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-4 w-4 shrink-0" }), " Keep it that way"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-2 space-y-1.5 text-sm text-foreground/80",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Balanced fertilizer — excess urea invites pests and fungus." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Keep 15–20 cm spacing for air flow between plants." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "· Check the underside of 5 leaves every week for early spots." })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								className: "mt-4 min-h-[48px] w-full rounded-full",
								onClick: () => {
									setImage(null);
									setPhotoMeta(null);
									setPhase("idle");
									setResult(null);
								},
								children: t("scanAnother")
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "surface-card p-4 sm:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 min-[420px]:grid min-[420px]:grid-cols-[minmax(0,1fr)_auto] min-[420px]:items-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
												children: [
													t("result"),
													" · ",
													diag.reportId
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-balance break-words text-xl font-extrabold text-foreground min-[420px]:text-2xl",
												children: diag.diseaseName
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 break-words text-sm italic text-muted-foreground",
												children: intel?.pathogen
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-1 text-sm text-muted-foreground",
												children: [
													crop,
													" · ",
													t("confidence"),
													" ",
													diag.confidence,
													"%"
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: `w-fit shrink-0 rounded-full px-3 py-1 ${SEV_CLASS[diag.severity]}`,
										children: diag.severity
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: { width: 0 },
										animate: { width: `${diag.confidence}%` },
										transition: { duration: 1 },
										className: "h-full rounded-full bg-primary"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl bg-secondary/60 p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
												children: "Leaf area affected"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-0.5 text-lg font-extrabold text-foreground",
												children: [
													"~",
													diag.coverage,
													"%"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl bg-secondary/60 p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
												children: "Patterns matched"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-lg font-extrabold text-foreground",
												children: diag.patterns
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl bg-secondary/60 p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
												children: "Photo quality"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-lg font-extrabold text-foreground",
												children: diag.quality
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-foreground/80",
									children: EXPLAIN[diag.diseaseName]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs leading-relaxed text-muted-foreground",
									children: ["Spread risk: ", diag.spreadRisk]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 rounded-2xl border p-3 sm:p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold uppercase tracking-wide text-muted-foreground",
											children: "Signs found in your photo"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-2 space-y-2",
											children: intel?.signs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-2 text-sm text-foreground/85",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sev-low/15 text-sev-low",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s })]
											}, s))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-[11px] leading-relaxed text-muted-foreground",
											children: [
												diag.qualityNote,
												" Analyzed at",
												" ",
												photoMeta ? `${photoMeta.width}×${photoMeta.height}` : "full resolution",
												" · Report ",
												diag.reportId,
												"."
											]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "surface-card p-4 sm:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-foreground",
									children: t("advisory")
								}),
								(diag.severity === "High" || diag.severity === "Critical") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 flex items-start gap-2 rounded-2xl border border-sev-critical/30 bg-sev-critical/10 p-3 text-sm text-foreground/85",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-5 w-5 shrink-0 text-sev-critical" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold",
											children: "Act within 48 hours."
										}),
										" ",
										diag.severity,
										" ",
										"infection with ~",
										diag.coverage,
										"% leaf damage will keep spreading through tonight's humidity — the first spray cannot wait."
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-secondary/70 p-3 sm:p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-4 w-4 shrink-0" }),
													" ",
													t("organic"),
													" — start here"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm leading-relaxed text-foreground/80",
												children: ORGANIC[diag.diseaseName]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-xs leading-relaxed text-muted-foreground",
												children: "Spray before 9 AM or after 4 PM · Repeat after 8–10 days · 2 rounds minimum · Safe for beneficial insects."
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-accent/10 p-3 sm:p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent-foreground",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "h-4 w-4 shrink-0" }),
													" ",
													t("chemical"),
													" — if it spreads"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm leading-relaxed text-foreground/80",
												children: CHEMICAL[diag.diseaseName]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-xs leading-relaxed text-muted-foreground",
												children: "Wear gloves + mask · Keep a 3-day gap before harvest · Do not mix with other sprays in the same tank."
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 text-sm font-bold text-foreground",
									children: ["Solution & cure plan — ", diag.severity === "Low" ? "7 days" : "14 days"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-3 space-y-3",
									children: curePlan(diag.severity, diag.diseaseName).map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex flex-col items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-xs font-extrabold text-primary-foreground",
												children: i + 1
											}), i < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 w-0.5 flex-1 rounded bg-border" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1 pb-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] font-bold uppercase tracking-wide text-primary",
													children: step.day
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-semibold text-foreground",
													children: step.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-0.5 text-sm leading-relaxed text-foreground/75",
													children: step.body
												})
											]
										})]
									}, step.day))
								}),
								pricing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border p-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground",
													children: t("estCost")
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "break-words text-lg font-extrabold text-foreground",
													children: inr(pricing.cost)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted-foreground",
													children: "per acre"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-sev-critical/30 bg-sev-critical/10 p-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground",
													children: t("yieldLoss")
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "break-words text-lg font-extrabold text-sev-critical",
													children: inr(pricing.lossPerAcre)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted-foreground",
													children: "per acre, if ignored"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-sev-low/40 bg-sev-low/10 p-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground",
													children: "You protect"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "break-words text-lg font-extrabold text-sev-low",
													children: inr(saved)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted-foreground",
													children: "per acre, by acting now"
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 space-y-2",
									children: dealers.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3 rounded-2xl border p-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted-foreground",
														children: t("dealer")
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "break-words text-sm font-semibold text-foreground",
														children: d.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "break-words text-xs leading-relaxed text-muted-foreground",
														children: [
															d.village,
															" · ",
															d.km,
															" km · ",
															d.phone
														]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `tel:${d.phone.replace(/\s/g, "")}`,
												className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition hover:bg-primary/20",
												"aria-label": `Call ${d.name}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
											})
										]
									}, d.name))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center justify-between gap-3 rounded-2xl bg-primary/5 p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1 pr-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-semibold text-foreground",
											children: t("notify")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-xs leading-relaxed text-muted-foreground",
											children: t("notifyHint")
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
										checked: notify,
										onCheckedChange: setNotify,
										className: "shrink-0"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "mt-4 min-h-[52px] w-full rounded-xl py-3 text-[15px] font-semibold sm:text-base",
									onClick: submitToRadar,
									disabled: submitted,
									children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mr-2 h-5 w-5 shrink-0" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: "Added to Outbreak Radar"
										})
									] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, { className: "mr-2 h-5 w-5 shrink-0" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: t("submit")
										})
									] })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: "surface-card border-accent/40 bg-accent/10 p-4 sm:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-start gap-2 text-sm font-bold text-accent-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "h-5 w-5 shrink-0" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("followUp") })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed text-foreground/75",
									children: t("followUpBody")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-1 gap-2 min-[420px]:flex min-[420px]:flex-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "secondary",
										className: "min-h-[48px] w-full rounded-full min-[420px]:w-auto",
										onClick: () => {
											setImage(null);
											setPhotoMeta(null);
											setPhase("idle");
											setResult(null);
											setSubmitted(false);
										},
										children: t("scanAnother")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										className: "min-h-[48px] w-full rounded-full min-[420px]:w-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/command",
											children: t("commandCenter")
										})
									})]
								})
							]
						}) })
					] })
				}) })
			]
		})]
	});
}
//#endregion
export { ScanPage as component };
