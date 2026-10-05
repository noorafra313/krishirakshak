import { a as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as ClientOnly } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as useLang } from "./router-C2QLkYeb.mjs";
import { _ as LoaderCircle, j as Activity, k as BellRing, n as Waves, y as IndianRupee } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as Button } from "./button-BHUavsfO.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion+[...].mjs";
import { t as PhoneAlert } from "./PhoneAlert-CrjwVm3V.mjs";
import { c as scansQuery, i as Switch, o as inr, r as SEVERITY_HEX, u as timeAgo } from "./scans-qVrcRdfM.mjs";
import { a as ResponsiveContainer, i as Cell, n as XAxis, o as Tooltip, r as Bar, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/command-BlZNEeAf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StatCard({ icon: Icon, label, value, sub, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 16
		},
		animate: {
			opacity: 1,
			y: 0
		},
		className: `surface-card grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4 ${accent ? "border-accent/40 bg-accent/10" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "break-words text-[11px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-xs",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "break-words text-xl font-extrabold text-foreground min-[420px]:text-2xl",
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "break-words text-[11px] leading-snug text-muted-foreground",
					children: sub
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
		})]
	});
}
function CommandCenter() {
	const { t } = useLang();
	const { data: scans = [], isLoading } = useQuery(scansQuery);
	const [predicted, setPredicted] = (0, import_react.useState)(false);
	const stats = (0, import_react.useMemo)(() => {
		const active = scans.filter((s) => s.status === "active");
		const villages = new Set(active.map((s) => s.village_name));
		const week = scans.filter((s) => Date.now() - new Date(s.created_at).getTime() < 6048e5);
		const counts = /* @__PURE__ */ new Map();
		week.forEach((s) => counts.set(s.disease_name, (counts.get(s.disease_name) ?? 0) + 1));
		const trending = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([name, count]) => ({
			name: name.split(" ")[0],
			full: name,
			count
		}));
		return {
			activeZones: villages.size,
			activeCount: active.length,
			alerted: active.length * 37 + 128,
			trending,
			atRisk: active.length * 18500
		};
	}, [scans]);
	const feed = (0, import_react.useMemo)(() => scans.slice(0, 14), [scans]);
	function broadcast(village, count) {
		toast.success(`Alert broadcast to ${village}`, { description: `WhatsApp + SMS sent to farmers within 5 km of ${count} affected farms.` });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto w-full max-w-[1600px] px-4 py-4 sm:px-6 sm:py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 min-[560px]:flex-row min-[560px]:items-center min-[560px]:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-balance break-words text-xl font-extrabold tracking-tight text-foreground min-[420px]:text-2xl",
							children: t("commandCenter")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-0.5 break-words text-xs text-muted-foreground sm:text-sm",
							children: [
								"Mandya District, Karnataka · ",
								scans.length,
								" scans on radar"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-fit max-w-full items-center gap-2 rounded-full border bg-card px-3 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, { className: "h-4 w-4 shrink-0 text-sev-high" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-xs font-semibold text-foreground",
								children: t("predictedSpread")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
								checked: predicted,
								onCheckedChange: setPredicted,
								className: "shrink-0"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 xl:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							icon: Activity,
							label: t("activeOutbreaks"),
							value: String(stats.activeZones),
							sub: `${stats.activeCount} active detections`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							icon: BellRing,
							label: t("farmersAlerted"),
							value: stats.alerted.toLocaleString("en-IN"),
							sub: "WhatsApp + SMS delivered"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
								children: t("trending")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 h-[62px] w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
									width: "100%",
									height: "100%",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
										data: stats.trending,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
												dataKey: "name",
												tick: { fontSize: 10 },
												axisLine: false,
												tickLine: false
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
												cursor: { fill: "transparent" },
												contentStyle: {
													borderRadius: 12,
													fontSize: 12
												},
												formatter: (v, _n, p) => [`${v} scans`, (p?.payload)?.full ?? ""]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
												dataKey: "count",
												radius: [
													6,
													6,
													0,
													0
												],
												children: stats.trending.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: i === 0 ? SEVERITY_HEX.Critical : "#2E7D32" }, i))
											})
										]
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
							icon: IndianRupee,
							label: t("valueAtRisk"),
							value: inr(stats.atRisk),
							sub: "estimated across active zones",
							accent: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_360px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "surface-card relative h-[420px] overflow-hidden p-0 min-[480px]:h-[520px] lg:h-[calc(100vh-320px)] lg:min-h-[560px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-full place-items-center text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin" })
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pointer-events-none absolute bottom-3 left-3 z-[500] rounded-2xl border bg-card/95 p-2.5 text-[11px] shadow-[var(--shadow-soft)] min-[480px]:bottom-4 min-[480px]:left-4 min-[480px]:p-3 min-[480px]:text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-1.5 font-bold text-foreground",
									children: "Severity"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-x-3 gap-y-0.5 min-[480px]:block",
									children: [
										"Low",
										"Medium",
										"High",
										"Critical"
									].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-2 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "h-2.5 w-2.5 shrink-0 rounded-full",
											style: { background: SEVERITY_HEX[s] }
										}), s]
									}, s))
								}),
								predicted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-[180px] text-[10px] italic leading-snug",
									children: "Dashed ring = 72h predictive model output"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "surface-card flex max-h-[480px] flex-col overflow-hidden min-[480px]:max-h-[560px] lg:max-h-[calc(100vh-320px)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-foreground",
									children: t("liveFeed")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 text-[11px] font-semibold text-sev-low",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 animate-pulse rounded-full bg-sev-low" }), " LIVE"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 space-y-2 overflow-y-auto p-3",
								children: [isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "p-3 text-sm text-muted-foreground",
									children: "Loading scans…"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
									initial: false,
									children: feed.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										layout: true,
										initial: {
											opacity: 0,
											x: 30
										},
										animate: {
											opacity: 1,
											x: 0
										},
										exit: { opacity: 0 },
										className: "rounded-2xl border bg-background/60 p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "min-w-0 text-sm text-foreground",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold",
														children: s.farmer_name
													}),
													" in ",
													s.village_name,
													" reported",
													" ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold",
														children: s.disease_name
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold text-white",
												style: { background: SEVERITY_HEX[s.severity] },
												children: s.severity
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-[11px] text-muted-foreground",
											children: [
												s.crop_type,
												" · ",
												s.confidence,
												"% confidence · ",
												timeAgo(s.created_at)
											]
										})]
									}, s.id))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "min-h-[48px] w-full rounded-xl text-sm",
									onClick: () => broadcast("all active zones", stats.activeCount),
									children: t("broadcast")
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 grid grid-cols-1 items-center gap-6 rounded-3xl bg-secondary/60 p-5 sm:p-6 md:grid-cols-2 md:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center md:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-balance text-xl font-extrabold tracking-tight text-foreground min-[420px]:text-2xl",
							children: "What the neighbouring farmer sees"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:mx-0",
							children: "Every broadcast lands as a plain-language message in the local language — distance, disease and the single next action, with no app install required."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneAlert, {})]
				})
			]
		})]
	});
}
//#endregion
export { CommandCenter as component };
