import { a as __toESM, t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DFn_qV7t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BCpF8QYG.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var DICT = {
	en: {
		appName: "KrishiRakshak",
		tagline: "Detect Early. Warn Neighbors. Save Harvests.",
		scanCrop: "Scan My Crop",
		commandCenter: "District Command Center",
		uploadLeaf: "Upload a leaf photo",
		dropHint: "Drag & drop, or tap to use camera",
		cropType: "Crop type",
		location: "Location",
		analyze: "Analyze with AI",
		analyzing: "AI Analyzing...",
		result: "Detection result",
		confidence: "Confidence",
		severity: "Severity",
		advisory: "Treatment advisory",
		organic: "Organic option",
		chemical: "Chemical option",
		estCost: "Estimated cost",
		yieldLoss: "Yield loss if untreated",
		dealer: "Nearest input dealer",
		notify: "Notify nearby farmers",
		notifyHint: "Adds this scan to the shared outbreak map",
		submit: "Submit to Outbreak Radar",
		followUp: "We'll check back in 5 days",
		followUpBody: "A treatment verification reminder will reach you on WhatsApp.",
		scanAnother: "Scan another leaf",
		activeOutbreaks: "Active Outbreaks",
		farmersAlerted: "Farmers Alerted Today",
		trending: "Trending This Week",
		valueAtRisk: "Crop Value at Risk",
		liveFeed: "Live scan feed",
		predictedSpread: "Predicted Spread (72h)",
		broadcast: "Broadcast Alert to Zone",
		affectedFarms: "Affected farms"
	},
	hi: {
		appName: "कृषिरक्षक",
		tagline: "जल्दी पहचानें। पड़ोसियों को चेताएं। फसल बचाएं।",
		scanCrop: "मेरी फसल स्कैन करें",
		commandCenter: "जिला कमांड सेंटर",
		uploadLeaf: "पत्ते की फोटो अपलोड करें",
		dropHint: "खींचकर छोड़ें, या कैमरा खोलें",
		cropType: "फसल",
		location: "स्थान",
		analyze: "एआई से जांचें",
		analyzing: "एआई जांच कर रहा है...",
		result: "जांच परिणाम",
		confidence: "विश्वास",
		severity: "गंभीरता",
		advisory: "उपचार सलाह",
		organic: "जैविक उपाय",
		chemical: "रासायनिक उपाय",
		estCost: "अनुमानित लागत",
		yieldLoss: "इलाज न करने पर नुकसान",
		dealer: "नज़दीकी कृषि केंद्र",
		notify: "आस-पास के किसानों को सूचित करें",
		notifyHint: "यह स्कैन साझा नक्शे में जुड़ेगा",
		submit: "आउटब्रेक रडार पर भेजें",
		followUp: "हम 5 दिन बाद फिर पूछेंगे",
		followUpBody: "उपचार जांच की याद व्हाट्सएप पर आएगी।",
		scanAnother: "दूसरा पत्ता स्कैन करें",
		activeOutbreaks: "सक्रिय प्रकोप",
		farmersAlerted: "आज सूचित किसान",
		trending: "इस सप्ताह के रोग",
		valueAtRisk: "जोखिम में फसल मूल्य",
		liveFeed: "लाइव स्कैन फीड",
		predictedSpread: "संभावित फैलाव (72घं)",
		broadcast: "क्षेत्र में अलर्ट भेजें",
		affectedFarms: "प्रभावित खेत"
	},
	kn: {
		appName: "ಕೃಷಿರಕ್ಷಕ",
		tagline: "ಬೇಗ ಪತ್ತೆ. ನೆರೆಯವರಿಗೆ ಎಚ್ಚರಿಕೆ. ಬೆಳೆ ರಕ್ಷಣೆ.",
		scanCrop: "ನನ್ನ ಬೆಳೆ ಸ್ಕ್ಯಾನ್",
		commandCenter: "ಜಿಲ್ಲಾ ಕಮಾಂಡ್ ಸೆಂಟರ್",
		uploadLeaf: "ಎಲೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
		dropHint: "ಎಳೆದು ಬಿಡಿ ಅಥವಾ ಕ್ಯಾಮೆರಾ ತೆರೆಯಿರಿ",
		cropType: "ಬೆಳೆ",
		location: "ಸ್ಥಳ",
		analyze: "ಎಐ ಮೂಲಕ ಪರಿಶೀಲಿಸಿ",
		analyzing: "ಎಐ ಪರಿಶೀಲಿಸುತ್ತಿದೆ...",
		result: "ಪತ್ತೆ ಫಲಿತಾಂಶ",
		confidence: "ವಿಶ್ವಾಸ",
		severity: "ತೀವ್ರತೆ",
		advisory: "ಚಿಕಿತ್ಸಾ ಸಲಹೆ",
		organic: "ಸಾವಯವ ಪರಿಹಾರ",
		chemical: "ರಾಸಾಯನಿಕ ಪರಿಹಾರ",
		estCost: "ಅಂದಾಜು ವೆಚ್ಚ",
		yieldLoss: "ಚಿಕಿತ್ಸೆ ಇಲ್ಲದಿದ್ದರೆ ನಷ್ಟ",
		dealer: "ಹತ್ತಿರದ ಕೃಷಿ ಕೇಂದ್ರ",
		notify: "ಸಮೀಪದ ರೈತರಿಗೆ ತಿಳಿಸಿ",
		notifyHint: "ಈ ಸ್ಕ್ಯಾನ್ ಹಂಚಿಕೆ ನಕ್ಷೆಗೆ ಸೇರುತ್ತದೆ",
		submit: "ಔಟ್‌ಬ್ರೇಕ್ ರಾಡಾರ್‌ಗೆ ಕಳುಹಿಸಿ",
		followUp: "5 ದಿನಗಳ ನಂತರ ಪರಿಶೀಲಿಸುತ್ತೇವೆ",
		followUpBody: "ಚಿಕಿತ್ಸೆ ಪರಿಶೀಲನೆ ಜ್ಞಾಪನೆ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಬರುತ್ತದೆ.",
		scanAnother: "ಇನ್ನೊಂದು ಎಲೆ ಸ್ಕ್ಯಾನ್",
		activeOutbreaks: "ಸಕ್ರಿಯ ಏಕಾಏಕಿ",
		farmersAlerted: "ಇಂದು ಎಚ್ಚರಿಸಿದ ರೈತರು",
		trending: "ಈ ವಾರದ ರೋಗಗಳು",
		valueAtRisk: "ಅಪಾಯದಲ್ಲಿರುವ ಬೆಳೆ ಮೌಲ್ಯ",
		liveFeed: "ಲೈವ್ ಸ್ಕ್ಯಾನ್ ಫೀಡ್",
		predictedSpread: "ಸಂಭಾವ್ಯ ಹರಡುವಿಕೆ (72ಗಂ)",
		broadcast: "ವಲಯಕ್ಕೆ ಎಚ್ಚರಿಕೆ ಕಳುಹಿಸಿ",
		affectedFarms: "ಬಾಧಿತ ಜಮೀನುಗಳು"
	}
};
var LangCtx = (0, import_react.createContext)({
	lang: "en",
	setLang: () => {},
	t: (k) => DICT.en[k]
});
function LangProvider({ children }) {
	const [lang, setLang] = (0, import_react.useState)("en");
	const t = (k) => DICT[lang][k] ?? DICT.en[k];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangCtx.Provider, {
		value: {
			lang,
			setLang,
			t
		},
		children
	});
}
var useLang = () => (0, import_react.useContext)(LangCtx);
var LANGS = [
	{
		code: "en",
		label: "EN"
	},
	{
		code: "hi",
		label: "हिं"
	},
	{
		code: "kn",
		label: "ಕನ್"
	}
];
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "KrishiRakshak — Outbreak Radar" },
			{
				name: "description",
				content: "AI-powered crop disease early warning for Indian farmers. Detect early, warn neighbors, save harvests."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "stylesheet",
				href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LangProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "top-center",
			richColors: true
		})] })
	});
}
var $$splitComponentImporter$2 = () => import("./routes-CYw_IGtM.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "KrishiRakshak — Village-Level Crop Disease Outbreak Radar" },
		{
			name: "description",
			content: "Scan a leaf, detect crop disease in seconds, and warn every farmer nearby before the outbreak reaches their field."
		},
		{
			property: "og:title",
			content: "KrishiRakshak — Outbreak Radar"
		},
		{
			property: "og:description",
			content: "AI crop disease early warning with a live village-level outbreak heatmap."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./command-l0PPKDme.mjs");
var Route$1 = createFileRoute("/command")({
	head: () => ({ meta: [
		{ title: "District Command Center — KrishiRakshak" },
		{
			name: "description",
			content: "Live outbreak heatmap, incoming farmer scans and zone-wide alert broadcasting for Mandya district."
		},
		{
			property: "og:title",
			content: "District Command Center — KrishiRakshak"
		},
		{
			property: "og:description",
			content: "Watch crop disease outbreaks spread across a district in real time."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./scan-CRSpjRR-.mjs");
var Route = createFileRoute("/scan")({
	head: () => ({ meta: [
		{ title: "Scan My Crop — KrishiRakshak" },
		{
			name: "description",
			content: "Upload a leaf photo, get an instant disease reading with severity, treatment cost and nearby dealer."
		},
		{
			property: "og:title",
			content: "Scan My Crop — KrishiRakshak"
		},
		{
			property: "og:description",
			content: "Instant crop disease detection and treatment advisory for Indian farmers."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	CommandRoute: Route$1.update({
		id: "/command",
		path: "/command",
		getParentRoute: () => Route$3
	}),
	ScanRoute: Route.update({
		id: "/scan",
		path: "/scan",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { LANGS as n, useLang as r, router_exports as t };
