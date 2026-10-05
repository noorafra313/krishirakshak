import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { E as Check, u as ShieldAlert } from "../_libs/lucide-react.mjs";
import { r as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PhoneAlert-CrjwVm3V.js
var import_jsx_runtime = require_jsx_runtime();
function PhoneAlert({ village = "Srirangapatna" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-[280px] rounded-[2.5rem] border-8 border-primary-deep bg-primary-deep p-1 shadow-[var(--shadow-lift)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[480px] overflow-hidden rounded-[2rem] bg-[oklch(0.96_0.01_140)] p-3 min-[420px]:h-[520px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-3 h-1.5 w-16 rounded-full bg-primary-deep/30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold",
						children: "KrishiRakshak Alerts"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: [
						{
							delay: .2,
							text: `⚠️ Rice Blast detected 3km from your farm (${village}). Inspect your crop and consider a preventive spray. Tap for guidance.`,
							time: "10:24 AM"
						},
						{
							delay: 1.1,
							text: "🌦️ Humidity 88% tonight — blast risk high. Spray before 9 AM tomorrow for best effect.",
							time: "10:26 AM"
						},
						{
							delay: 2,
							text: "🧪 Tricyclazole available at Kaveri Krishi Kendra, 5.8 km. Stock: yes.",
							time: "10:27 AM"
						}
					].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 18,
							scale: .96
						},
						animate: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						transition: {
							delay: m.delay,
							duration: .5,
							ease: "easeOut"
						},
						className: "max-w-[92%] rounded-2xl rounded-tl-sm bg-card p-3 shadow-[var(--shadow-soft)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] leading-snug text-foreground",
							children: m.text
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 flex items-center justify-end gap-1 text-[10px] text-muted-foreground",
							children: [
								m.time,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-primary-glow" })
							]
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: 2.8 },
					className: "absolute bottom-4 left-3 right-3 rounded-full bg-accent px-4 py-2 text-center text-xs font-semibold text-accent-foreground",
					children: "Sent to 214 farmers within 5 km"
				})
			]
		})
	});
}
//#endregion
export { PhoneAlert as t };
