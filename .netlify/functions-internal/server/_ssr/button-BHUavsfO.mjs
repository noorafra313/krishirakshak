import { a as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as LANGS, r as useLang } from "./router-C2QLkYeb.mjs";
import { f as ScanLine, h as Menu, p as Radar, t as X, v as Leaf, x as House } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-BHUavsfO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SiteHeader({ variant = "light" }) {
	const { lang, setLang, t } = useLang();
	const dark = variant === "dark";
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const links = [
		{
			to: "/",
			label: t("appName"),
			icon: House
		},
		{
			to: "/scan",
			label: t("scanCrop"),
			icon: ScanLine
		},
		{
			to: "/command",
			label: t("commandCenter"),
			icon: Radar
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-[1000] backdrop-blur", dark ? "bg-primary-deep/85 text-primary-foreground" : "border-b bg-background/90 text-foreground"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between gap-2 px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex min-w-0 flex-1 items-center gap-2",
				onClick: () => setOpen(false),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 truncate text-base font-extrabold tracking-tight sm:text-lg",
					children: [
						t("appName"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden font-medium opacity-70 min-[420px]:inline sm:inline",
							children: "· Outbreak Radar"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-2 sm:gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-1 text-sm font-medium md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/scan",
							className: "rounded-full px-3 py-1.5 opacity-80 transition hover:bg-black/5 hover:opacity-100",
							activeProps: { className: "!opacity-100 bg-black/5 font-semibold" },
							children: t("scanCrop")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/command",
							className: "rounded-full px-3 py-1.5 opacity-80 transition hover:bg-black/5 hover:opacity-100",
							activeProps: { className: "!opacity-100 bg-black/5 font-semibold" },
							children: t("commandCenter")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("flex items-center rounded-full p-0.5", dark ? "bg-primary-foreground/15" : "bg-secondary"),
						children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLang(l.code),
							"aria-pressed": lang === l.code,
							className: cn("min-h-[28px] min-w-[40px] rounded-full px-2.5 py-1 text-xs font-semibold transition", lang === l.code ? "bg-accent text-accent-foreground" : dark ? "text-primary-foreground/70" : "text-muted-foreground"),
							children: l.label
						}, l.code))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((v) => !v),
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						className: cn("grid h-10 w-10 place-items-center rounded-xl transition md:hidden", dark ? "bg-primary-foreground/15 hover:bg-primary-foreground/25" : "bg-secondary hover:bg-secondary/70"),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: cn("border-t px-4 pb-4 pt-2 md:hidden", dark ? "border-primary-foreground/15 bg-primary-deep" : "border-border bg-background"),
			children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: l.to,
				onClick: () => setOpen(false),
				className: cn("flex min-h-[48px] items-center gap-3 rounded-2xl px-3 py-2.5 text-[15px] font-semibold transition", pathname === l.to ? "bg-accent/20 text-foreground" : "text-foreground/80 hover:bg-black/5", dark && pathname !== l.to && "text-primary-foreground/90 hover:bg-primary-foreground/10", dark && pathname === l.to && "bg-accent/25 text-primary-foreground"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: "h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: l.label
				})]
			}, l.to))
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { SiteHeader as n, cn as r, Button as t };
