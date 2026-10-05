import { a as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { r as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as useLang } from "./router-DFn_qV7t.mjs";
import { C as CalendarClock, S as Camera, b as ChevronDown, c as ShieldCheck, d as Radar, h as Leaf, i as Upload, m as LoaderCircle, o as Store, p as MapPin, v as FlaskConical, x as Check, y as ChevronUp } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as SiteHeader, r as cn, t as Button } from "./button-1g9aKi-k.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { a as VILLAGES, c as pickDisease, i as Switch, n as DEALERS, o as inr, s as insertScan, t as CROPS, u as severityFromConfidence } from "./scans-PfYMEl4V.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/scan-CRSpjRR-.js
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
function ScanPage() {
	const { t } = useLang();
	const qc = useQueryClient();
	const fileRef = (0, import_react.useRef)(null);
	const [image, setImage] = (0, import_react.useState)(null);
	const [crop, setCrop] = (0, import_react.useState)("Rice");
	const [coords, setCoords] = (0, import_react.useState)({
		lat: VILLAGES[0].lat,
		lng: VILLAGES[0].lng,
		village: VILLAGES[0].village
	});
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [result, setResult] = (0, import_react.useState)(null);
	const [notify, setNotify] = (0, import_react.useState)(true);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	function readFile(file) {
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => setImage(reader.result);
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
	function analyze() {
		if (!image) {
			toast.error("Add a leaf photo first.");
			return;
		}
		setPhase("analyzing");
		setSubmitted(false);
		setTimeout(() => {
			const disease = pickDisease(crop);
			const confidence = Math.round((83 + Math.random() * 15) * 10) / 10;
			setResult({
				disease,
				confidence,
				severity: severityFromConfidence(confidence)
			});
			setPhase("done");
		}, 2600);
	}
	async function submitToRadar() {
		if (!result) return;
		try {
			await insertScan({
				crop_type: crop,
				disease_name: result.disease.name,
				confidence: result.confidence,
				severity: result.severity,
				latitude: coords.lat,
				longitude: coords.lng,
				village_name: coords.village === "My Field" ? VILLAGES[0].village : coords.village,
				farmer_name: FARMERS[Math.floor(Math.random() * FARMERS.length)],
				status: "active"
			});
			await qc.invalidateQueries({ queryKey: ["scans"] });
			setSubmitted(true);
			toast.success(notify ? "Logged. 214 nearby farmers alerted." : "Logged privately to your scan history.");
		} catch {
			toast.error("Could not reach the radar. Try again.");
		}
	}
	const dealer = DEALERS[0];
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
								onValueChange: setCrop,
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-5 w-5 animate-spin" }),
								" ",
								t("analyzing")
							] }) : t("analyze")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: phase === "done" && result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "surface-card p-4 sm:p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 min-[420px]:grid min-[420px]:grid-cols-[minmax(0,1fr)_auto] min-[420px]:items-start",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground",
												children: t("result")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "text-balance break-words text-xl font-extrabold text-foreground min-[420px]:text-2xl",
												children: result.disease.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-0.5 text-sm text-muted-foreground",
												children: [
													crop,
													" · ",
													t("confidence"),
													" ",
													result.confidence,
													"%"
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										className: `w-fit shrink-0 rounded-full px-3 py-1 ${SEV_CLASS[result.severity]}`,
										children: result.severity
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										initial: { width: 0 },
										animate: { width: `${result.confidence}%` },
										transition: { duration: 1 },
										className: "h-full rounded-full bg-primary"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-foreground/80",
									children: result.disease.explain
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-secondary/70 p-3 sm:p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-4 w-4 shrink-0" }),
												" ",
												t("organic")
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm leading-relaxed text-foreground/80",
											children: result.disease.organic
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl bg-accent/10 p-3 sm:p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "h-4 w-4 shrink-0" }),
												" ",
												t("chemical")
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm leading-relaxed text-foreground/80",
											children: result.disease.chemical
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border p-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: t("estCost")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "break-words text-lg font-extrabold text-foreground",
												children: inr(result.disease.cost)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground",
												children: "per acre"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-sev-critical/30 bg-sev-critical/10 p-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: t("yieldLoss")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "break-words text-lg font-extrabold text-sev-critical",
												children: inr(result.disease.lossPerAcre)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground",
												children: "per acre"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-start gap-3 rounded-2xl border p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: t("dealer")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "break-words text-sm font-semibold text-foreground",
												children: dealer.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "break-words text-xs leading-relaxed text-muted-foreground",
												children: [
													dealer.village,
													" · ",
													dealer.km,
													" km · ",
													dealer.phone
												]
											})
										]
									})]
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
					]
				}) })
			]
		})]
	});
}
//#endregion
export { ScanPage as component };
