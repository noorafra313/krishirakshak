import { a as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as cn } from "./button-BHUavsfO.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scans-qVrcRdfM.js
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
export { VILLAGES as a, scansQuery as c, Switch as i, severityFromConfidence as l, DEALERS as n, inr as o, SEVERITY_HEX as r, insertScan as s, CROPS as t, timeAgo as u };
