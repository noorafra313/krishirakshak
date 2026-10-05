import { a as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as cn } from "./button-1g9aKi-k.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scans-PfYMEl4V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
var VILLAGES = [
	{
		village: "Srirangapatna",
		lat: 12.4181,
		lng: 76.6947
	},
	{
		village: "Pandavapura",
		lat: 12.501,
		lng: 76.665
	},
	{
		village: "Mandya Town",
		lat: 12.5242,
		lng: 76.8958
	},
	{
		village: "Maddur",
		lat: 12.5847,
		lng: 77.0433
	},
	{
		village: "Malavalli",
		lat: 12.3847,
		lng: 77.0611
	},
	{
		village: "Nagamangala",
		lat: 12.818,
		lng: 76.755
	}
];
var CROPS = [
	"Rice",
	"Wheat",
	"Cotton",
	"Tomato",
	"Sugarcane",
	"Maize"
];
var DISEASE_BOOK = {
	Rice: [
		{
			name: "Rice Blast",
			explain: "Diamond-shaped grey lesions on the leaf. It spreads fast in humid weather and can empty the grain heads.",
			organic: "Spray neem oil 3% + Pseudomonas fluorescens (5g/litre), twice a week apart.",
			chemical: "Tricyclazole 75% WP @ 0.6g/litre, one spray now, repeat after 12 days.",
			cost: 850,
			lossPerAcre: 18e3
		},
		{
			name: "Bacterial Leaf Blight",
			explain: "Yellow wavy streaks from the leaf tip drying downward. Spreads with irrigation water.",
			organic: "Cow-dung slurry filtrate spray + stop flood irrigation for 4 days.",
			chemical: "Copper oxychloride 0.25% + Streptocycline 100ppm spray.",
			cost: 700,
			lossPerAcre: 15e3
		},
		{
			name: "Brown Spot",
			explain: "Small brown oval spots, usually a sign of potash-hungry soil plus fungal attack.",
			organic: "Potash-rich wood ash + neem cake soil dressing.",
			chemical: "Mancozeb 75% WP @ 2g/litre.",
			cost: 520,
			lossPerAcre: 9e3
		}
	],
	Sugarcane: [{
		name: "Red Rot",
		explain: "Inner cane turns red with white patches and smells of alcohol. Highly infectious in a field.",
		organic: "Uproot and burn affected clumps, drench with Trichoderma viride.",
		chemical: "Carbendazim 50% WP @ 2g/litre as sett dip and soil drench.",
		cost: 1400,
		lossPerAcre: 42e3
	}, {
		name: "Sugarcane Smut",
		explain: "A long black whip emerges from the cane top. Cuts sugar recovery sharply.",
		organic: "Rogue out whips into a sealed bag; use disease-free setts next season.",
		chemical: "Propiconazole 25% EC @ 1ml/litre sett treatment.",
		cost: 1100,
		lossPerAcre: 3e4
	}],
	Tomato: [
		{
			name: "Late Blight",
			explain: "Water-soaked dark patches on leaves with white mould underneath. Can wipe a plot in 4 days.",
			organic: "Bordeaux mixture 1% + remove lower infected leaves.",
			chemical: "Metalaxyl + Mancozeb @ 2g/litre, repeat after 8 days.",
			cost: 950,
			lossPerAcre: 26e3
		},
		{
			name: "Early Blight",
			explain: "Brown spots with concentric rings on older leaves, moving upward.",
			organic: "Neem oil 3% + Trichoderma soil application.",
			chemical: "Chlorothalonil 75% WP @ 2g/litre.",
			cost: 640,
			lossPerAcre: 14e3
		},
		{
			name: "Leaf Curl Virus",
			explain: "Curled, thickened, cup-shaped leaves. Carried by whitefly, not curable — control the vector.",
			organic: "Yellow sticky traps + neem soap spray for whitefly.",
			chemical: "Imidacloprid 17.8% SL @ 0.3ml/litre for whitefly control.",
			cost: 780,
			lossPerAcre: 22e3
		}
	],
	Cotton: [{
		name: "Bacterial Blight",
		explain: "Angular water-soaked spots on leaves and black arm on stems.",
		organic: "Pseudomonas fluorescens spray + balanced potash.",
		chemical: "Copper oxychloride 3g/litre + Streptocycline.",
		cost: 900,
		lossPerAcre: 2e4
	}, {
		name: "Cotton Leaf Curl",
		explain: "Upward curling with thick veins, stunted bolls. Whitefly borne.",
		organic: "Sticky traps + neem-based spray every 7 days.",
		chemical: "Diafenthiuron 50% WP @ 1g/litre.",
		cost: 1050,
		lossPerAcre: 24e3
	}],
	Wheat: [{
		name: "Yellow Rust",
		explain: "Yellow powdery stripes along the leaf veins. Cool, moist weather accelerates it.",
		organic: "Remove volunteer plants, spray cow-urine extract 10%.",
		chemical: "Propiconazole 25% EC @ 1ml/litre.",
		cost: 720,
		lossPerAcre: 16e3
	}, {
		name: "Powdery Mildew",
		explain: "White floury growth on the leaf surface reducing grain filling.",
		organic: "Wettable sulphur 0.2% spray.",
		chemical: "Hexaconazole 5% EC @ 2ml/litre.",
		cost: 600,
		lossPerAcre: 11e3
	}],
	Maize: [{
		name: "Fall Armyworm Damage",
		explain: "Ragged holes and moist sawdust-like frass in the whorl. Larvae feed at night.",
		organic: "Sand + lime in the whorl, release Trichogramma cards.",
		chemical: "Emamectin benzoate 5% SG @ 0.4g/litre into the whorl.",
		cost: 880,
		lossPerAcre: 19e3
	}, {
		name: "Turcicum Leaf Blight",
		explain: "Long cigar-shaped grey-green lesions on leaves.",
		organic: "Crop rotation + Trichoderma seed treatment.",
		chemical: "Mancozeb 75% WP @ 2.5g/litre.",
		cost: 640,
		lossPerAcre: 13e3
	}]
};
var DEALERS = [
	{
		name: "Sri Chamundeshwari Agro Centre",
		village: "Mandya Town",
		phone: "+91 98450 21134",
		km: 3.2
	},
	{
		name: "Kaveri Krishi Kendra",
		village: "Srirangapatna",
		phone: "+91 99012 77450",
		km: 5.8
	},
	{
		name: "Raitha Samparka Kendra",
		village: "Maddur",
		phone: "+91 94488 30219",
		km: 7.1
	}
];
function pickDisease(crop) {
	const list = DISEASE_BOOK[crop] ?? DISEASE_BOOK["Rice"];
	return list[Math.floor(Math.random() * list.length)];
}
function severityFromConfidence(confidence) {
	if (confidence > 95) return "Critical";
	if (confidence > 90) return "High";
	if (confidence > 85) return "Medium";
	return "Low";
}
var SEVERITY_HEX = {
	Low: "#4CAF50",
	Medium: "#F9A825",
	High: "#EF6C00",
	Critical: "#C62828"
};
function timeAgo(iso) {
	const diff = Date.now() - new Date(iso).getTime();
	const mins = Math.max(1, Math.round(diff / 6e4));
	if (mins < 60) return `${mins} min ago`;
	const hours = Math.round(mins / 60);
	if (hours < 24) return `${hours} hr ago`;
	return `${Math.round(hours / 24)} d ago`;
}
function inr(value) {
	return "₹" + value.toLocaleString("en-IN");
}
var STORAGE_KEY = "krishi-scans-v1";
var CROP_DISEASE = [
	["Rice", "Rice Blast"],
	["Rice", "Bacterial Leaf Blight"],
	["Rice", "Brown Spot"],
	["Sugarcane", "Red Rot"],
	["Sugarcane", "Sugarcane Smut"],
	["Tomato", "Late Blight"],
	["Tomato", "Early Blight"],
	["Tomato", "Leaf Curl Virus"],
	["Cotton", "Bacterial Blight"],
	["Wheat", "Yellow Rust"],
	["Maize", "Fall Armyworm Damage"]
];
var FARMERS = [
	"Ramesh Gowda",
	"Lakshmamma B",
	"Suresh Kumar",
	"Manjunath H R",
	"Shivanna M",
	"Devaraju N",
	"Kavitha S",
	"Prakash Gowda",
	"Nagaraj K",
	"Basavaraju T",
	"Yashoda Bai",
	"Chandrashekar P"
];
var SEVERITIES = [
	"Low",
	"Medium",
	"High",
	"Critical"
];
function pick(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
var seedCache = null;
function buildSeed() {
	if (seedCache) return seedCache;
	const now = Date.now();
	const scans = Array.from({ length: 56 }, (_, i) => {
		const v = pick(VILLAGES);
		const [crop, disease] = pick(CROP_DISEASE);
		return {
			id: `seed-${i}`,
			crop_type: crop,
			disease_name: disease,
			confidence: Math.round((82 + Math.random() * 16) * 10) / 10,
			severity: pick(SEVERITIES),
			latitude: v.lat + (Math.random() - .5) * .045,
			longitude: v.lng + (Math.random() - .5) * .045,
			village_name: v.village,
			farmer_name: pick(FARMERS),
			status: Math.random() < .28 ? "treated" : "active",
			created_at: (/* @__PURE__ */ new Date(now - Math.random() * 6 * 864e5)).toISOString()
		};
	});
	scans.sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at));
	seedCache = scans;
	return scans;
}
function readUserScans() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function writeUserScans(scans) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(scans.slice(0, 300)));
	} catch {}
}
function newId() {
	if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
	return `local-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
}
async function fetchScans() {
	const merged = [...readUserScans(), ...buildSeed()];
	merged.sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at));
	return merged.slice(0, 300);
}
async function insertScan(scan) {
	const record = {
		...scan,
		id: newId(),
		created_at: (/* @__PURE__ */ new Date()).toISOString()
	};
	writeUserScans([record, ...readUserScans()]);
	return record;
}
var scansQuery = {
	queryKey: ["scans"],
	queryFn: fetchScans,
	refetchInterval: 15e3
};
//#endregion
export { VILLAGES as a, pickDisease as c, timeAgo as d, Switch as i, scansQuery as l, DEALERS as n, inr as o, SEVERITY_HEX as r, insertScan as s, CROPS as t, severityFromConfidence as u };
