import { a as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as useLang } from "./router-C2QLkYeb.mjs";
import { A as ArrowRight, c as Sprout, f as ScanLine, o as TrendingUp, p as Radar, r as Users } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as Button } from "./button-BHUavsfO.mjs";
import { n as animate, r as motion, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { t as PhoneAlert } from "./PhoneAlert-CrjwVm3V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BT6z0jEg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Counter({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, { once: true });
	const [val, setVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const controls = animate(0, to, {
			duration: 1.8,
			ease: "easeOut",
			onUpdate: (v) => setVal(Math.round(v))
		});
		return () => controls.stop();
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [val.toLocaleString("en-IN"), suffix]
	});
}
var FEATURES = [
	{
		icon: ScanLine,
		title: "Scan in seconds",
		body: "Snap a leaf. The model names the disease, scores its confidence and grades severity instantly."
	},
	{
		icon: Radar,
		title: "Neighbourhood radar",
		body: "Every scan feeds a shared district map, so a spike in one village warns the next one within minutes."
	},
	{
		icon: Sprout,
		title: "Advice that fits the field",
		body: "Organic and chemical options, real rupee cost, projected loss and the nearest stocking dealer."
	}
];
function Landing() {
	const { t } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { variant: "dark" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "hero-gradient relative overflow-hidden px-4 pb-16 pt-12 text-primary-foreground sm:px-6 sm:pb-24 sm:pt-16 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl sm:h-96 sm:w-96" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-40 left-10 h-72 w-72 rounded-full bg-primary-glow/25 blur-3xl sm:h-96 sm:w-96" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto w-full max-w-5xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 12
								},
								animate: {
									opacity: 1,
									y: 0
								},
								className: "mx-auto mb-5 w-fit max-w-full rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest sm:text-xs",
								children: "Mandya District · Live pilot"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
								initial: {
									opacity: 0,
									y: 22
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .1,
									duration: .6
								},
								className: "text-balance text-3xl font-extrabold leading-[1.08] tracking-tight min-[420px]:text-4xl sm:text-6xl",
								children: t("tagline")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 22
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .22,
									duration: .6
								},
								className: "mx-auto mt-5 max-w-2xl text-balance text-sm leading-relaxed text-primary-foreground/80 min-[420px]:text-base sm:text-lg",
								children: "KrishiRakshak turns one farmer's leaf photo into a district-wide early warning. Disease is caught where it starts — and the next village hears about it before the spores arrive."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 22
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .34,
									duration: .6
								},
								className: "mt-7 grid grid-cols-1 gap-3 min-[420px]:flex min-[420px]:flex-wrap min-[420px]:items-center min-[420px]:justify-center sm:mt-9",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "secondary",
									className: "min-h-[52px] w-full rounded-full px-7 text-base font-semibold min-[420px]:w-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/scan",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, { className: "mr-1 h-5 w-5 shrink-0" }),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: t("scanCrop")
											})
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "min-h-[52px] w-full rounded-full bg-accent px-7 text-base font-semibold text-accent-foreground hover:bg-accent/90 min-[420px]:w-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/command",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, { className: "mr-1 h-5 w-5 shrink-0" }),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: t("commandCenter")
											})
										]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 sm:mt-16 sm:gap-4",
								children: [
									{
										icon: Users,
										value: 12400,
										suffix: "",
										label: "farmers protected"
									},
									{
										icon: TrendingUp,
										value: 340,
										suffix: "",
										label: "outbreaks contained early"
									},
									{
										icon: Sprout,
										value: 47,
										suffix: " Cr",
										label: "₹ harvest value defended"
									}
								].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 24
									},
									whileInView: {
										opacity: 1,
										y: 0
									},
									viewport: { once: true },
									transition: { delay: i * .12 },
									className: "rounded-3xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 backdrop-blur",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "mx-auto mb-2 h-6 w-6 text-accent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-3xl font-extrabold",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
												to: s.value,
												suffix: s.suffix
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-primary-foreground/75",
											children: s.label
										})
									]
								}, s.label))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:gap-5 md:grid-cols-3",
					children: FEATURES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						initial: {
							opacity: 0,
							y: 28
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							delay: i * .1,
							duration: .5
						},
						className: "surface-card p-5 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-balance text-base font-bold text-foreground sm:text-lg",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: f.body
							})
						]
					}, f.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/60 px-4 py-12 sm:px-6 sm:py-20 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-12 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: -30
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						className: "text-center md:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-balance text-2xl font-extrabold tracking-tight text-foreground min-[420px]:text-3xl sm:text-4xl",
								children: "The warning reaches the phone in the pocket."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base md:mx-0",
								children: "When density crosses the outbreak threshold in a zone, every registered farmer within 5 km gets a plain-language WhatsApp/SMS alert — with the disease, the distance and the next action."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-6 min-h-[48px] w-full rounded-full px-6 min-[420px]:w-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/command",
									children: ["See the command center ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4 shrink-0" })]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneAlert, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t px-4 py-8 text-center text-xs leading-relaxed text-muted-foreground sm:px-8 sm:text-sm",
				children: "KrishiRakshak · Outbreak Radar — hackathon demo with simulated detection on seeded district data."
			})
		]
	});
}
//#endregion
export { Landing as component };
