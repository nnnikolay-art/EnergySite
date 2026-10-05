import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as BRAND_LABEL, b as relatedProducts, c as Button, d as formatPrice, f as formatWatts, g as runtimeHours, h as rentTotal, i as useInquiry, m as rentDiscount, n as Route, p as formatWh, s as Input, u as formatHours } from "./router-CRjU6WHc.mjs";
import { n as ProductCard, t as Badge } from "./product-card-C3hcot0g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog._slug-DlzGh3ys.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { product } = Route.useLoaderData();
	const add = useInquiry((state) => state.add);
	const [mode, setMode] = (0, import_react.useState)("buy");
	const [days, setDays] = (0, import_react.useState)(3);
	const [watts, setWatts] = (0, import_react.useState)(60);
	const related = relatedProducts(product);
	const discount = rentDiscount(days);
	const rentSum = rentTotal(product.rentDay, days);
	const hours = (0, import_react.useMemo)(() => runtimeHours(product.capacityWh, Math.max(1, watts)), [product.capacityWh, watts]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalog",
						className: "hover:text-foreground",
						children: "Каталог"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: product.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-10 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl border border-border bg-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image,
							alt: product.name,
							className: "aspect-photo w-full object-cover"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "muted",
								children: BRAND_LABEL[product.brand]
							}), product.bestFor.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: tag }, tag))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-6 grid grid-cols-3 gap-3 rounded-xl border border-border bg-card p-4 font-mono text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Ёмкость"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm text-foreground tabular-nums",
									children: formatWh(product.capacityWh)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Выход"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm text-foreground tabular-nums",
									children: formatWatts(product.outputW)
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: "Вес"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1 text-sm text-foreground tabular-nums",
									children: [product.weightKg.toLocaleString("ru-RU"), " кг"]
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex rounded-full border border-border p-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setMode("buy"),
								className: `h-10 flex-1 rounded-full text-sm font-medium ${mode === "buy" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`,
								children: "Покупка"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setMode("rent"),
								className: `h-10 flex-1 rounded-full text-sm font-medium ${mode === "rent" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`,
								children: "В аренду"
							})]
						}),
						mode === "rent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-xl border border-border bg-card p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center justify-between gap-3 text-sm",
									children: ["Срок, дней", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										min: 1,
										max: 60,
										value: days,
										onChange: (event) => setDays(Math.max(1, Number(event.target.value) || 1)),
										className: "h-10 w-20"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 flex flex-wrap gap-2",
									children: [
										1,
										3,
										7,
										14
									].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setDays(value),
										className: `h-9 rounded-full border px-3 text-xs font-medium ${days === value ? "border-primary bg-primary text-primary-foreground" : "border-border"}`,
										children: [value, " дн."]
									}, value))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-2xl tabular-nums",
									children: formatPrice(rentSum)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: [
										formatPrice(product.rentDay),
										" / сутки",
										discount > 0 ? ` · скидка ${discount * 100}%` : " · скидка с 3 дней"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs text-muted-foreground",
									children: [
										"Залог ",
										formatPrice(Math.round(product.salePrice * .3)),
										" — вернём при приёмке."
									]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-display text-3xl font-semibold tabular-nums",
							children: formatPrice(product.salePrice)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-6 w-full",
							size: "lg",
							onClick: () => add({
								slug: product.slug,
								mode,
								days,
								qty: 1
							}),
							children: mode === "buy" ? "В заявку на покупку" : "В заявку на аренду"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-2 text-sm text-muted-foreground",
							children: product.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", item] }, item))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16 grid gap-10 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold tracking-tight",
						children: "Характеристики"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 overflow-hidden rounded-2xl border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
							className: "w-full text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: product.specs.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: index % 2 === 0 ? "bg-card" : "bg-background",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "w-1/2 px-4 py-3 text-left font-medium text-muted-foreground",
									children: row.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-3",
									children: row.value
								})]
							}, row.label)) })
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold tracking-tight",
							children: "Сколько проработает"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Оценка: ёмкость × 0,85 / мощность прибора. Реальное время зависит от инвертора и температуры."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-2xl border border-border bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-sm font-medium",
									htmlFor: "watts",
									children: "Мощность прибора, Вт"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "watts",
									type: "number",
									min: 1,
									value: watts,
									onChange: (event) => setWatts(Number(event.target.value) || 1),
									className: "mt-2"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-display text-3xl tabular-nums",
									children: formatHours(hours)
								}),
								watts > product.outputW ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-destructive",
									children: [
										"Прибор выше номинала ",
										formatWatts(product.outputW),
										product.xBoostW ? ` (X-Boost до ${formatWatts(product.xBoostW)})` : "",
										"."
									]
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 divide-y divide-border rounded-2xl border border-border",
							children: product.runtimes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between px-4 py-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [item.device, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-2 text-muted-foreground",
									children: [item.watts, " Вт"]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono tabular-nums",
									children: item.watts > product.outputW && !product.xBoostW ? "—" : formatHours(runtimeHours(product.capacityWh, item.watts))
								})]
							}, item.device))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold tracking-tight",
					children: "Рядом в линейке"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: item }, item.slug))
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
