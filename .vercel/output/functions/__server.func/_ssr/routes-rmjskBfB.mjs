import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as SunMedium, d as ArrowRight, l as Clock, n as Truck, u as BatteryCharging } from "../_libs/lucide-react.mjs";
import { c as Button, d as formatPrice, v as COMPANY, y as products } from "./router-CRjU6WHc.mjs";
import { n as ProductCard } from "./product-card-C3hcot0g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-rmjskBfB.js
var import_jsx_runtime = require_jsx_runtime();
var featured = [
	products.find((item) => item.slug === "ecoflow-river-3-plus"),
	products.find((item) => item.slug === "ecoflow-delta-3-plus"),
	products.find((item) => item.slug === "ctolity-xp1000"),
	products.find((item) => item.slug === "ecoflow-delta-3-max")
].filter((item) => Boolean(item));
var steps = [
	{
		title: "Выбор",
		text: "Модель из каталога — покупка или аренда от одного дня."
	},
	{
		title: "Заявка",
		text: "Оставляете контакты. Подтверждаем наличие в течение часа в рабочее время."
	},
	{
		title: "Выдача",
		text: "Самовывоз на Таганке или доставка по Москве. Инструктаж на месте."
	}
];
var faqs = [
	{
		q: "Что выгоднее — купить или взять в аренду?",
		a: "На поездку, съёмку или ремонт — аренда. Если станция нужна чаще двух-трёх раз в год, обычно дешевле купить. Посчитаем оба варианта в заявке."
	},
	{
		q: "Нужен залог за аренду?",
		a: "Да, удерживаем 30% от цены продажи. Возвращаем в день приёмки, если станция цела. Можно картой."
	},
	{
		q: "Есть солнечные панели и кабели?",
		a: "Да, панели, переходники Anderson / XT60 и кабели 220 В. Добавим к заявке."
	},
	{
		q: "Подходит ли станция как резерв для квартиры?",
		a: "DELTA 3 Plus и старше закрывают холодильник, свет, роутер и котёл. Для ввода квартиры смотрите Ultra Plus и DELTA Pro 3 — с UPS быстрее 10 мс."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-end gap-10 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-12 lg:pt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] text-muted-foreground uppercase",
						children: "Москва · EcoFlow · CTOLITY"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl",
						children: "Станции, которые держат дом, площадку и маршрут"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-base leading-relaxed text-muted-foreground",
						children: "Продажа и аренда портативных электростанций. Честные характеристики, выдача в день обращения, доставка по Москве."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/catalog",
								children: ["Каталог", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/catalog",
								search: { offer: "rent" },
								children: [
									"Аренда от ",
									formatPrice(790),
									" / сутки"
								]
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-2xl border border-border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/products/hero.jpg",
						alt: "Портативная электростанция в современной квартире",
						className: "aspect-hero w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 divide-x divide-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Моделей",
								value: "11"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Аренда",
								value: "от 1 дня"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Выдача",
								value: "сегодня"
							})
						]
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Perk, {
						icon: BatteryCharging,
						title: "LFP-ячейки",
						text: "LiFePO4, 3000–4000 циклов, без запаха и выхлопа."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Perk, {
						icon: Clock,
						title: "Быстрый заряд",
						text: "EcoFlow DELTA 3 — полный цикл примерно за час от розетки."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Perk, {
						icon: SunMedium,
						title: "Солнце",
						text: "Панели и кабели в комплекте аренды по запросу."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Perk, {
						icon: Truck,
						title: "Логистика",
						text: "Самовывоз на Таганке, доставка 790 ₽ по Москве."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.2em] text-muted-foreground uppercase",
					children: "Подборка"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold tracking-tight",
					children: "Что берут чаще всего"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalog",
						children: "Весь каталог"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: featured.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-ink-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-ink-foreground/10 p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.2em] text-ink-foreground/50 uppercase",
							children: "Покупка"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-semibold tracking-tight",
							children: "Станция в собственность"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70",
							children: "Официальная гарантия производителя. Помогаем подобрать ёмкость под холодильник, котёл или съёмку. Можно забрать сегодня."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "invert",
							className: "mt-8",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/catalog",
								search: { offer: "sale" },
								children: "Смотреть цены"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-ink-foreground/10 p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.2em] text-ink-foreground/50 uppercase",
							children: "Аренда"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-semibold tracking-tight",
							children: "От суток, со скидкой за срок"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-sm text-ink-foreground/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "3+ дня — 10%" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "7+ дней — 20%" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "14+ дней — 30%" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "invert",
							className: "mt-8",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/catalog",
								search: { offer: "rent" },
								children: "Взять в аренду"
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl font-semibold tracking-tight",
				children: "Как устроена аренда"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 grid gap-6 md:grid-cols-3",
				children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-border bg-card p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-sm tabular-nums text-muted-foreground",
							children: ["0", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-xl font-semibold",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: step.text
						})
					]
				}, step.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold tracking-tight",
						children: "Вопросы"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border lg:col-span-8",
					children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium",
							children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground transition-transform group-open:rotate-45",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground",
							children: item.a
						})]
					}, item.q))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold tracking-tight",
					children: "Шоурум на Таганке"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: [
						COMPANY.address,
						". ",
						COMPANY.hours,
						"."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contacts",
						children: "Контакты и схема проезда"
					})
				})]
			})
		})
	] });
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg font-semibold tracking-tight",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted-foreground",
			children: label
		})]
	});
}
function Perk({ icon: Icon, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-5 text-primary",
			strokeWidth: 1.5
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-3 font-medium",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm leading-relaxed text-muted-foreground",
			children: text
		})
	] });
}
//#endregion
export { Home as component };
