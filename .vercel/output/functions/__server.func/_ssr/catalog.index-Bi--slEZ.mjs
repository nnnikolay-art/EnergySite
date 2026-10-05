import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { l as cn, r as Route$3, y as products } from "./router-CRjU6WHc.mjs";
import { n as ProductCard } from "./product-card-C3hcot0g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog.index-Bi--slEZ.js
var import_jsx_runtime = require_jsx_runtime();
var BRANDS = [
	{ label: "Все бренды" },
	{
		id: "ecoflow",
		label: "EcoFlow"
	},
	{
		id: "ctolity",
		label: "CTOLITY"
	}
];
var OFFERS = [
	{ label: "Продажа и аренда" },
	{
		id: "sale",
		label: "Купить"
	},
	{
		id: "rent",
		label: "Аренда"
	}
];
var SIZES = [
	{ label: "Любая ёмкость" },
	{
		id: "compact",
		label: "До 600 Вт·ч"
	},
	{
		id: "mid",
		label: "1 кВт·ч"
	},
	{
		id: "pro",
		label: "2 кВт·ч+"
	}
];
function CatalogPage() {
	const search = Route$3.useSearch();
	const navigate = Route$3.useNavigate();
	const filtered = products.filter((product) => {
		if (search.brand && product.brand !== search.brand) return false;
		if (search.size && product.size !== search.size) return false;
		if (search.offer === "sale" && !product.inStock) return false;
		if (search.offer === "rent" && !product.rentAvailable) return false;
		return true;
	});
	function setBrand(brand) {
		navigate({ search: {
			...search,
			brand
		} });
	}
	function setOffer(offer) {
		navigate({ search: {
			...search,
			offer
		} });
	}
	function setSize(size) {
		navigate({ search: {
			...search,
			size
		} });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.2em] text-muted-foreground uppercase",
				children: "Каталог"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-semibold tracking-tight",
				children: "Станции EcoFlow и CTOLITY"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted-foreground",
				children: "Характеристики с официальных линеек 2026 года. Каждую модель можно купить или взять в аренду."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, { children: BRANDS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: search.brand === item.id,
						onClick: () => setBrand(item.id),
						children: item.label
					}, item.label)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, { children: OFFERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: search.offer === item.id,
						onClick: () => setOffer(item.id),
						children: item.label
					}, item.label)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterRow, { children: SIZES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
						active: search.size === item.id,
						onClick: () => setSize(item.id),
						children: item.label
					}, item.label)) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted-foreground",
				children: filtered.length === products.length ? `${filtered.length} моделей` : `${filtered.length} из ${products.length}`
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-2xl border border-border bg-card p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Ничего не подошло"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Сбросьте фильтры — в линейке 11 станций от 245 до 4096 Вт·ч."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-4 text-sm underline",
						onClick: () => void navigate({ search: {} }),
						children: "Сбросить"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
			})
		]
	});
}
function FilterRow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		children
	});
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-10 rounded-full border px-4 text-sm font-medium transition-colors", active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-foreground/30"),
		children
	});
}
//#endregion
export { CatalogPage as component };
