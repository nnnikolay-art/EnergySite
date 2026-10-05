import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as notFound, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as Menu, i as Trash2, o as Plus, r as TriangleAlert, s as Minus, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1, u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-CSPLoRxu.js
var BRAND_LABEL = {
	ecoflow: "EcoFlow",
	ctolity: "CTOLITY"
};
var campFridge = {
	device: "Автохолодильник",
	watts: 60
};
var laptop = {
	device: "Ноутбук",
	watts: 60
};
var router = {
	device: "Wi-Fi роутер",
	watts: 10
};
var tv = {
	device: "Телевизор",
	watts: 100
};
var fridge = {
	device: "Холодильник",
	watts: 120
};
var kettle = {
	device: "Чайник",
	watts: 900
};
var heater = {
	device: "Обогреватель",
	watts: 1500
};
var ac = {
	device: "Кондиционер",
	watts: 900
};
var cpap = {
	device: "CPAP",
	watts: 40
};
var projector = {
	device: "Проектор",
	watts: 200
};
var products = [
	{
		slug: "ecoflow-river-3",
		brand: "ecoflow",
		name: "EcoFlow RIVER 3",
		series: "RIVER",
		tagline: "Карманная станция для поездок и съёмок",
		description: "Самая лёгкая модель линейки RIVER 3. Хватает на заряд ноутбука, камеры и роутера, помещается в рюкзак. LiFePO4-ячейки и зарядка от розетки примерно за час.",
		image: "/products/river-3.jpg",
		size: "compact",
		capacityWh: 245,
		outputW: 300,
		surgeW: 600,
		xBoostW: 600,
		weightKg: 3.55,
		salePrice: 32900,
		rentDay: 990,
		inStock: true,
		rentAvailable: true,
		bestFor: [
			"путешествия",
			"съёмка",
			"офис"
		],
		highlights: [
			"3,55 кг",
			"заряд ~60 мин",
			"X-Boost до 600 Вт"
		],
		specs: [
			{
				label: "Ёмкость",
				value: "245 Вт·ч"
			},
			{
				label: "Номинальная мощность",
				value: "300 Вт"
			},
			{
				label: "X-Boost",
				value: "до 600 Вт"
			},
			{
				label: "Пиковая мощность",
				value: "600 Вт"
			},
			{
				label: "Химия батареи",
				value: "LFP (LiFePO4)"
			},
			{
				label: "Циклы до 80%",
				value: "3000+"
			},
			{
				label: "Инвертор",
				value: "Чистая синусоида"
			},
			{
				label: "AC-выходы",
				value: "2 × 220 В"
			},
			{
				label: "USB",
				value: "USB-A + 2 × USB-C"
			},
			{
				label: "Солнечный ввод",
				value: "до 110 Вт"
			},
			{
				label: "Заряд от сети",
				value: "0–100% ≈ 60 мин"
			},
			{
				label: "UPS",
				value: "< 20 мс"
			},
			{
				label: "Расширение",
				value: "нет"
			},
			{
				label: "Вес",
				value: "3,55 кг"
			},
			{
				label: "Габариты",
				value: "230 × 150 × 150 мм"
			},
			{
				label: "Гарантия",
				value: "5 лет"
			}
		],
		runtimes: [
			router,
			laptop,
			cpap,
			campFridge
		]
	},
	{
		slug: "ecoflow-river-3-plus",
		brand: "ecoflow",
		name: "EcoFlow RIVER 3 Plus",
		series: "RIVER",
		tagline: "Универсальная станция для кемпинга и квартиры",
		description: "Основная модель серии: 600 Вт постоянно и до 1200 Вт с X-Boost. Можно расширить допбатарей до 858 Вт·ч. Переключение UPS быстрее 10 мс — подходит как резерв для роутера и NAS.",
		image: "/products/river-3-plus.jpg",
		size: "compact",
		capacityWh: 286,
		outputW: 600,
		surgeW: 1200,
		xBoostW: 1200,
		weightKg: 4.7,
		salePrice: 44900,
		rentDay: 1290,
		inStock: true,
		rentAvailable: true,
		bestFor: [
			"кемпинг",
			"квартира",
			"CPAP"
		],
		highlights: [
			"600 Вт / 1200 Вт X-Boost",
			"UPS < 10 мс",
			"расширение до 858 Вт·ч"
		],
		specs: [
			{
				label: "Ёмкость",
				value: "286 Вт·ч"
			},
			{
				label: "Номинальная мощность",
				value: "600 Вт"
			},
			{
				label: "X-Boost",
				value: "до 1200 Вт"
			},
			{
				label: "Пиковая мощность",
				value: "1200 Вт"
			},
			{
				label: "Химия батареи",
				value: "LFP (LiFePO4)"
			},
			{
				label: "Циклы до 80%",
				value: "3000+"
			},
			{
				label: "Инвертор",
				value: "Чистая синусоида"
			},
			{
				label: "AC-выходы",
				value: "3 × 220 В"
			},
			{
				label: "USB",
				value: "2 × USB-A, USB-C"
			},
			{
				label: "Автомобильный выход",
				value: "12,6 В / 10 А, 126 Вт"
			},
			{
				label: "Солнечный ввод",
				value: "до 220 Вт"
			},
			{
				label: "Заряд от сети",
				value: "0–100% ≈ 60 мин"
			},
			{
				label: "UPS",
				value: "< 10 мс"
			},
			{
				label: "Расширение",
				value: "до 858 Вт·ч"
			},
			{
				label: "Вес",
				value: "4,7 кг"
			},
			{
				label: "Габариты",
				value: "234 × 232 × 146 мм"
			},
			{
				label: "Гарантия",
				value: "5 лет"
			}
		],
		runtimes: [
			router,
			laptop,
			campFridge,
			projector,
			kettle
		]
	},
	{
		slug: "ecoflow-river-3-max",
		brand: "ecoflow",
		name: "EcoFlow RIVER 3 Max",
		series: "RIVER",
		tagline: "Plus со съёмной допбатареей в комплекте",
		description: "Комплект RIVER 3 Plus и съёмной Smart Extra Battery. 572 Вт·ч без потери портативности: основную станцию можно взять отдельно, батарею оставить в машине или палатке.",
		image: "/products/river-3-max.jpg",
		size: "compact",
		capacityWh: 572,
		outputW: 600,
		surgeW: 1200,
		xBoostW: 1200,
		weightKg: 7.9,
		salePrice: 64900,
		rentDay: 1590,
		inStock: true,
		rentAvailable: true,
		bestFor: [
			"кемпинг",
			"автодом",
			"выходные"
		],
		highlights: [
			"572 Вт·ч",
			"съёмная батарея",
			"X-Boost 1200 Вт"
		],
		specs: [
			{
				label: "Ёмкость",
				value: "572 Вт·ч (286 + 286)"
			},
			{
				label: "Номинальная мощность",
				value: "600 Вт"
			},
			{
				label: "X-Boost",
				value: "до 1200 Вт"
			},
			{
				label: "Пиковая мощность",
				value: "1200 Вт"
			},
			{
				label: "Химия батареи",
				value: "LFP (LiFePO4)"
			},
			{
				label: "Циклы до 80%",
				value: "3000+"
			},
			{
				label: "Инвертор",
				value: "Чистая синусоида"
			},
			{
				label: "AC-выходы",
				value: "3 × 220 В"
			},
			{
				label: "USB",
				value: "2 × USB-A, USB-C"
			},
			{
				label: "Солнечный ввод",
				value: "до 220 Вт"
			},
			{
				label: "Заряд от сети",
				value: "0–100% ≈ 90 мин"
			},
			{
				label: "UPS",
				value: "< 10 мс"
			},
			{
				label: "Расширение",
				value: "до 858 Вт·ч"
			},
			{
				label: "Вес комплекта",
				value: "≈ 7,9 кг"
			},
			{
				label: "Комплектация",
				value: "станция + Extra Battery"
			},
			{
				label: "Гарантия",
				value: "5 лет"
			}
		],
		runtimes: [
			router,
			laptop,
			campFridge,
			tv,
			projector,
			kettle
		]
	},
	{
		slug: "ecoflow-delta-3-classic",
		brand: "ecoflow",
		name: "EcoFlow DELTA 3 Classic",
		series: "DELTA 3",
		tagline: "Киловатт-час и 1800 Вт без лишнего веса",
		description: "Вход в семейство DELTA 3: 1024 Вт·ч, 1800 Вт на розетках, зарядка чуть меньше часа. Тянет холодильник, электроинструмент и свет на площадке. Расширяется допбатареями до 5 кВт·ч.",
		image: "/products/delta-3-classic.jpg",
		size: "mid",
		capacityWh: 1024,
		outputW: 1800,
		surgeW: 3600,
		xBoostW: 2400,
		weightKg: 12.1,
		salePrice: 89900,
		rentDay: 2490,
		inStock: true,
		rentAvailable: true,
		bestFor: [
			"дача",
			"стройка",
			"резерв дома"
		],
		highlights: [
			"1024 Вт·ч",
			"1800 Вт",
			"заряд ≈ 56 мин"
		],
		specs: [
			{
				label: "Ёмкость",
				value: "1024 Вт·ч"
			},
			{
				label: "Номинальная мощность",
				value: "1800 Вт"
			},
			{
				label: "X-Boost",
				value: "до 2400 Вт"
			},
			{
				label: "Пиковая мощность",
				value: "3600 Вт"
			},
			{
				label: "Химия батареи",
				value: "LFP (LiFePO4)"
			},
			{
				label: "Циклы до 80%",
				value: "4000"
			},
			{
				label: "Инвертор",
				value: "Чистая синусоида"
			},
			{
				label: "AC-выходы",
				value: "до 4 × 220 В"
			},
			{
				label: "USB",
				value: "USB-A 18 Вт, USB-C 100 Вт + 30 Вт"
			},
			{
				label: "Солнечный ввод",
				value: "до 500 Вт"
			},
			{
				label: "Заряд от сети",
				value: "макс. 1500 Вт, 0–100% ≈ 56 мин"
			},
			{
				label: "UPS",
				value: "< 10 мс"
			},
			{
				label: "Расширение",
				value: "до 5 кВт·ч"
			},
			{
				label: "Вес",
				value: "12,1 кг"
			},
			{
				label: "Габариты",
				value: "398 × 200 × 283 мм"
			},
			{
				label: "Гарантия",
				value: "5 лет"
			}
		],
		runtimes: [
			router,
			laptop,
			fridge,
			tv,
			kettle,
			heater
		]
	},
	{
		slug: "ecoflow-delta-3-plus",
		brand: "ecoflow",
		name: "EcoFlow DELTA 3 Plus",
		series: "DELTA 3",
		tagline: "Тот же киловатт-час, быстрее солнце и серьёзный UPS",
		description: "Версия Plus добавляет двухпортовый солнечный ввод до 1000 Вт и UPS-режим для NAS и чувствительной техники. В тестах 2026 года — одна из самых сбалансированных станций среднего класса.",
		image: "/products/delta-3-plus.jpg",
		size: "mid",
		capacityWh: 1024,
		outputW: 1800,
		surgeW: 3600,
		xBoostW: 2400,
		weightKg: 12.5,
		salePrice: 109900,
		rentDay: 2790,
		inStock: true,
		rentAvailable: true,
		bestFor: [
			"дом",
			"офис",
			"солнечная зарядка"
		],
		highlights: [
			"солнечный ввод 1000 Вт",
			"UPS для NAS",
			"11 выходов"
		],
		specs: [
			{
				label: "Ёмкость",
				value: "1024 Вт·ч (≈ 825 Вт·ч полезных)"
			},
			{
				label: "Номинальная мощность",
				value: "1800 Вт"
			},
			{
				label: "X-Boost",
				value: "до 2400 Вт"
			},
			{
				label: "Пиковая мощность",
				value: "3600 Вт"
			},
			{
				label: "Химия батареи",
				value: "LFP (LiFePO4)"
			},
			{
				label: "Циклы до 80%",
				value: "4000"
			},
			{
				label: "Инвертор",
				value: "Чистая синусоида"
			},
			{
				label: "AC-выходы",
				value: "4 × 220 В"
			},
			{
				label: "USB",
				value: "2 × USB-A, 2 × USB-C до 100 Вт"
			},
			{
				label: "Солнечный ввод",
				value: "до 1000 Вт, 2 порта"
			},
			{
				label: "Заряд от сети",
				value: "макс. 1500 Вт, 0–100% ≈ 56 мин"
			},
			{
				label: "UPS",
				value: "< 10 мс, режим NAS / HID"
			},
			{
				label: "Расширение",
				value: "до 5 кВт·ч"
			},
			{
				label: "Вес",
				value: "12,5 кг"
			},
			{
				label: "Габариты",
				value: "398 × 200 × 283 мм"
			},
			{
				label: "Гарантия",
				value: "5 лет"
			}
		],
		runtimes: [
			router,
			laptop,
			fridge,
			tv,
			kettle,
			heater
		]
	},
	{
		slug: "ecoflow-delta-3-max",
		brand: "ecoflow",
		name: "EcoFlow DELTA 3 Max",
		series: "DELTA 3",
		tagline: "Два киловатт-часа для дома и съёмочной площадки",
		description: "2048 Вт·ч и 2400 Вт непрерывно. Закрывает холодильник, свет и рабочие станции на сутки. Можно нарастить ёмкость до 6 кВт·ч совместимыми батареями.",
		image: "/products/delta-3-max.jpg",
		size: "pro",
		capacityWh: 2048,
		outputW: 2400,
		surgeW: 4800,
		xBoostW: 3400,
		weightKg: 20.3,
		salePrice: 169900,
		rentDay: 3990,
		inStock: true,
		rentAvailable: true,
		bestFor: [
			"дом",
			"мероприятие",
			"автодом"
		],
		highlights: [
			"2048 Вт·ч",
			"2400 Вт",
			"расширение до 6 кВт·ч"
		],
		specs: [
			{
				label: "Ёмкость",
				value: "2048 Вт·ч"
			},
			{
				label: "Номинальная мощность",
				value: "2400 Вт"
			},
			{
				label: "X-Boost",
				value: "до 3400 Вт"
			},
			{
				label: "Пиковая мощность",
				value: "4800 Вт"
			},
			{
				label: "Химия батареи",
				value: "LFP (LiFePO4)"
			},
			{
				label: "Циклы до 80%",
				value: "4000"
			},
			{
				label: "Инвертор",
				value: "Чистая синусоида"
			},
			{
				label: "AC-выходы",
				value: "4 × 220 В"
			},
			{
				label: "USB",
				value: "USB-C до 100 Вт"
			},
			{
				label: "Солнечный ввод",
				value: "до 1000 Вт"
			},
			{
				label: "Заряд от сети",
				value: "макс. 1800 Вт, 0–100% ≈ 65–70 мин"
			},
			{
				label: "UPS",
				value: "< 10 мс"
			},
			{
				label: "Расширение",
				value: "до 6 кВт·ч"
			},
			{
				label: "Вес",
				value: "20,3 кг"
			},
			{
				label: "Габариты",
				value: "494 × 242 × 305 мм"
			},
			{
				label: "Гарантия",
				value: "5 лет"
			}
		],
		runtimes: [
			router,
			fridge,
			tv,
			projector,
			kettle,
			heater,
			ac
		]
	},
	{
		slug: "ecoflow-delta-3-ultra-plus",
		brand: "ecoflow",
		name: "EcoFlow DELTA 3 Ultra Plus",
		series: "DELTA 3",
		tagline: "Домашний резерв на основные приборы",
		description: "3072 Вт·ч и 3600 Вт — уровень ввода квартиры. Держит холодильник, свет, роутер и котёл на ночь отключения. Солнечный ввод до 1600 Вт, расширение около 7 кВт·ч.",
		image: "/products/delta-3-ultra.jpg",
		size: "pro",
		capacityWh: 3072,
		outputW: 3600,
		surgeW: 7200,
		xBoostW: 4700,
		weightKg: 33.7,
		salePrice: 249900,
		rentDay: 5490,
		inStock: true,
		rentAvailable: true,
		bestFor: [
			"дом",
			"офис",
			"резерв"
		],
		highlights: [
			"3072 Вт·ч",
			"3600 Вт",
			"солнечный ввод 1600 Вт"
		],
		specs: [
			{
				label: "Ёмкость",
				value: "3072 Вт·ч"
			},
			{
				label: "Номинальная мощность",
				value: "3600 Вт"
			},
			{
				label: "X-Boost",
				value: "до 4700 Вт"
			},
			{
				label: "Пиковая мощность",
				value: "7200 Вт"
			},
			{
				label: "Химия батареи",
				value: "LFP (LiFePO4)"
			},
			{
				label: "Циклы до 80%",
				value: "4000"
			},
			{
				label: "Инвертор",
				value: "Чистая синусоида"
			},
			{
				label: "AC-выходы",
				value: "несколько 220 В, до 3600 Вт суммарно"
			},
			{
				label: "USB",
				value: "USB-C до 140 Вт"
			},
			{
				label: "Солнечный ввод",
				value: "до 1600 Вт"
			},
			{
				label: "Заряд от сети",
				value: "0–80% ≈ 75 мин"
			},
			{
				label: "UPS",
				value: "< 10 мс"
			},
			{
				label: "Расширение",
				value: "≈ 7 кВт·ч"
			},
			{
				label: "Вес",
				value: "33,7 кг"
			},
			{
				label: "Габариты",
				value: "613 × 328 × 395 мм"
			},
			{
				label: "Гарантия",
				value: "5 лет"
			}
		],
		runtimes: [
			router,
			fridge,
			tv,
			kettle,
			heater,
			ac
		]
	},
	{
		slug: "ecoflow-delta-pro-3",
		brand: "ecoflow",
		name: "EcoFlow DELTA Pro 3",
		series: "DELTA Pro",
		tagline: "Объектная станция на колёсах",
		description: "4096 Вт·ч, 4000 Вт постоянно и до 6000 Вт с X-Boost. Колёса и ручка — станцию можно катить по площадке. Масштабируется до 48 кВт·ч: дом, съёмка, малый объект.",
		image: "/products/delta-pro-3.jpg",
		size: "pro",
		capacityWh: 4096,
		outputW: 4e3,
		surgeW: 8e3,
		xBoostW: 6e3,
		weightKg: 51,
		salePrice: 349900,
		rentDay: 7490,
		inStock: true,
		rentAvailable: true,
		bestFor: [
			"дом",
			"площадка",
			"бизнес"
		],
		highlights: [
			"4,1 кВт·ч",
			"4000 Вт",
			"расширение до 48 кВт·ч"
		],
		specs: [
			{
				label: "Ёмкость",
				value: "4096 Вт·ч"
			},
			{
				label: "Номинальная мощность",
				value: "4000 Вт"
			},
			{
				label: "X-Boost",
				value: "до 6000 Вт"
			},
			{
				label: "Пиковая мощность",
				value: "8000 Вт"
			},
			{
				label: "Химия батареи",
				value: "LFP (LiFePO4)"
			},
			{
				label: "Циклы до 80%",
				value: "4000"
			},
			{
				label: "Инвертор",
				value: "Чистая синусоида"
			},
			{
				label: "AC-выходы",
				value: "10–12 портов"
			},
			{
				label: "USB",
				value: "USB-C до 100 Вт"
			},
			{
				label: "Солнечный ввод",
				value: "до 2600 Вт"
			},
			{
				label: "Заряд от сети",
				value: "макс. 1800 Вт, ≈ 70 мин"
			},
			{
				label: "UPS",
				value: "< 10 мс"
			},
			{
				label: "Расширение",
				value: "до 48 кВт·ч"
			},
			{
				label: "Вес",
				value: "51 кг, колёса"
			},
			{
				label: "Гарантия",
				value: "5 лет"
			}
		],
		runtimes: [
			router,
			fridge,
			tv,
			kettle,
			heater,
			ac
		]
	},
	{
		slug: "ctolity-ap400",
		brand: "ctolity",
		name: "CTOLITY AP400",
		series: "AP",
		tagline: "Компакт 345 Вт·ч с беспроводной зарядкой",
		description: "Недорогая LFP-станция на каждый день: телефоны, ноутбук, мини-холодильник, CPAP. Есть беспроводная площадка, UPS быстрее 10 мс и заряд от сети, прикуривателя и панели.",
		image: "/products/ap400.jpg",
		size: "compact",
		capacityWh: 346,
		outputW: 500,
		surgeW: 650,
		weightKg: 5.03,
		salePrice: 19900,
		rentDay: 790,
		inStock: true,
		rentAvailable: true,
		bestFor: [
			"поездки",
			"CPAP",
			"дача"
		],
		highlights: [
			"345 Вт·ч / 500 Вт",
			"беспроводная зарядка",
			"UPS < 10 мс"
		],
		specs: [
			{
				label: "Ёмкость",
				value: "345,6 Вт·ч"
			},
			{
				label: "Номинальная мощность",
				value: "500 Вт"
			},
			{
				label: "Пиковая мощность",
				value: "650 Вт"
			},
			{
				label: "Химия батареи",
				value: "LFP (LiFePO4)"
			},
			{
				label: "Циклы до 80%",
				value: "> 3000"
			},
			{
				label: "Инвертор",
				value: "Чистая синусоида"
			},
			{
				label: "AC-выходы",
				value: "2 × 220 В"
			},
			{
				label: "USB-A",
				value: "3 × QC 3.0"
			},
			{
				label: "USB-C",
				value: "1 × PD 22,5 Вт"
			},
			{
				label: "DC",
				value: "DC5521 12 В / 10 А"
			},
			{
				label: "Беспроводная зарядка",
				value: "да"
			},
			{
				label: "Заряд от сети",
				value: "150 Вт, ≈ 2,5 ч"
			},
			{
				label: "Солнечный ввод",
				value: "12–26 В, 150 Вт"
			},
			{
				label: "Автозаряд",
				value: "12 В / 8 А, 100 Вт"
			},
			{
				label: "UPS",
				value: "< 10 мс"
			},
			{
				label: "Вес",
				value: "5,03 кг"
			},
			{
				label: "Габариты",
				value: "250 × 177 × 177 мм"
			},
			{
				label: "Гарантия",
				value: "5 лет (+1 при покупке у бренда)"
			}
		],
		runtimes: [
			router,
			laptop,
			cpap,
			campFridge
		]
	},
	{
		slug: "ctolity-xp1000",
		brand: "ctolity",
		name: "CTOLITY XP1000",
		series: "XP",
		tagline: "Киловатт-час и 1800 Вт без переплаты за бренд",
		description: "1024 Вт·ч на ячейках BYD LiFePO4, 1800 Вт на розетках и заряд от сети киловаттом. До 11 устройств сразу. Тихая, пылезащищённая, с автопереключением UPS.",
		image: "/products/xp1000.jpg",
		size: "mid",
		capacityWh: 1024,
		outputW: 1800,
		surgeW: 2600,
		weightKg: 14,
		salePrice: 44900,
		rentDay: 1990,
		inStock: true,
		rentAvailable: true,
		bestFor: [
			"дача",
			"стройка",
			"резерв"
		],
		highlights: [
			"1024 Вт·ч",
			"1800 Вт",
			"заряд 1000 Вт"
		],
		specs: [
			{
				label: "Ёмкость",
				value: "1024 Вт·ч"
			},
			{
				label: "Номинальная мощность",
				value: "1800 Вт"
			},
			{
				label: "Пиковая мощность",
				value: "2600 Вт"
			},
			{
				label: "Химия батареи",
				value: "LFP BYD (LiFePO4)"
			},
			{
				label: "Циклы до 80%",
				value: "> 3000"
			},
			{
				label: "BMS",
				value: "16 уровней защиты"
			},
			{
				label: "Инвертор",
				value: "Чистая синусоида"
			},
			{
				label: "AC-выходы",
				value: "100–240 В, авто 50/60 Гц"
			},
			{
				label: "USB-C",
				value: "100 Вт + 22,5 Вт"
			},
			{
				label: "USB-A",
				value: "4 × до 18 Вт"
			},
			{
				label: "DC",
				value: "прикуриватель 12 В / 24 В до 200 Вт"
			},
			{
				label: "Заряд от сети",
				value: "1000 Вт, ≈ 1,2 ч"
			},
			{
				label: "Солнечный ввод",
				value: "12–48 В, 500 Вт"
			},
			{
				label: "Автозаряд",
				value: "12–24 В, 100 Вт"
			},
			{
				label: "UPS",
				value: "< 20 мс"
			},
			{
				label: "Устройства сразу",
				value: "до 11"
			},
			{
				label: "Вес",
				value: "14 кг"
			},
			{
				label: "Габариты",
				value: "398 × 228 × 256 мм"
			},
			{
				label: "Гарантия",
				value: "до 6 лет при регистрации"
			}
		],
		runtimes: [
			router,
			laptop,
			fridge,
			tv,
			kettle,
			heater
		]
	},
	{
		slug: "ctolity-ap2000",
		brand: "ctolity",
		name: "CTOLITY AP2000",
		series: "AP",
		tagline: "Два киловатт-часа и 2400 Вт на площадку",
		description: "2048 Вт·ч и 2400 Вт — запас для дома, мероприятия или автодома без цены флагмана. Солнечный ввод до 600 Вт, сеть 1000 Вт, UPS быстрее 10 мс.",
		image: "/products/ap2000.jpg",
		size: "pro",
		capacityWh: 2048,
		outputW: 2400,
		surgeW: 2600,
		weightKg: 23,
		salePrice: 69900,
		rentDay: 2990,
		inStock: true,
		rentAvailable: true,
		bestFor: [
			"дом",
			"мероприятие",
			"автодом"
		],
		highlights: [
			"2048 Вт·ч",
			"2400 Вт",
			"солнечный ввод 600 Вт"
		],
		specs: [
			{
				label: "Ёмкость",
				value: "2048 Вт·ч"
			},
			{
				label: "Номинальная мощность",
				value: "2400 Вт (110 В) / 2600 Вт (220 В)"
			},
			{
				label: "Пиковая мощность",
				value: "2600 Вт"
			},
			{
				label: "Химия батареи",
				value: "LFP (LiFePO4)"
			},
			{
				label: "Циклы до 80%",
				value: "> 3000"
			},
			{
				label: "Инвертор",
				value: "Чистая синусоида"
			},
			{
				label: "USB-C",
				value: "100 Вт + 22,5 Вт"
			},
			{
				label: "USB-A",
				value: "4 порта"
			},
			{
				label: "DC",
				value: "2 × DC5525 12 В / 18 А, до 200 Вт"
			},
			{
				label: "Прикуриватель",
				value: "12 В / 18 А, 200 Вт"
			},
			{
				label: "Заряд от сети",
				value: "1000 Вт, ≈ 2,2 ч"
			},
			{
				label: "Солнечный ввод",
				value: "12–48 В, 600 Вт"
			},
			{
				label: "Автозаряд",
				value: "12 В / 8 А, 100 Вт"
			},
			{
				label: "UPS",
				value: "< 10 мс"
			},
			{
				label: "Вес",
				value: "23 кг"
			},
			{
				label: "Габариты",
				value: "483 × 301 × 301 мм"
			},
			{
				label: "Гарантия",
				value: "до 6 лет при регистрации"
			}
		],
		runtimes: [
			router,
			fridge,
			tv,
			projector,
			kettle,
			heater
		]
	}
];
function getProduct(slug) {
	return products.find((item) => item.slug === slug);
}
function relatedProducts(product, limit = 3) {
	return products.filter((item) => item.slug !== product.slug).sort((a, b) => {
		const brandBoost = (item) => item.brand === product.brand ? 0 : 1;
		const sizeBoost = (item) => item.size === product.size ? 0 : 1;
		const cap = Math.abs(a.capacityWh - product.capacityWh) - Math.abs(b.capacityWh - product.capacityWh);
		return brandBoost(a) - brandBoost(b) || sizeBoost(a) - sizeBoost(b) || cap;
	}).slice(0, limit);
}
var COMPANY = {
	name: "VOLTA",
	legal: "ООО «Вольта»",
	tagline: "Аренда и продажа портативных электростанций",
	phone: "+7 495 120-40-80",
	phoneHref: "tel:+74951204080",
	email: "hello@volta.energy",
	telegram: "https://t.me/volta_energy",
	telegramLabel: "@volta_energy",
	hours: "Ежедневно 10:00–21:00",
	address: "Москва, Большая Татарская ул., 35с1",
	metro: "м. Новокузнецкая, 7 минут пешком",
	delivery: "Самовывоз в день обращения. Доставка по Москве — 790 ₽, МО — по расчёту."
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/format-DToLdHS9.js
function formatPrice(value) {
	return `${new Intl.NumberFormat("ru-RU").format(value)}\u00A0₽`;
}
function formatWh(value) {
	return `${new Intl.NumberFormat("ru-RU").format(value)}\u00A0Вт·ч`;
}
function formatWatts(value) {
	if (value >= 1e3 && value % 100 === 0) {
		const kw = value / 1e3;
		return `${Number.isInteger(kw) ? String(kw) : kw.toFixed(1).replace(".", ",")}\u00A0кВт`;
	}
	return `${new Intl.NumberFormat("ru-RU").format(value)}\u00A0Вт`;
}
function formatHours(hours) {
	if (hours < 1) return `${Math.max(1, Math.round(hours * 60))}\u00A0мин`;
	if (hours >= 24) {
		const days = hours / 24;
		return `${(days >= 10 ? Math.round(days) : Number(days.toFixed(1))).toLocaleString("ru-RU")}\u00A0сут`;
	}
	return `${(hours >= 10 ? Math.round(hours) : Number(hours.toFixed(1))).toLocaleString("ru-RU")}\u00A0ч`;
}
function rentDiscount(days) {
	if (days >= 14) return .3;
	if (days >= 7) return .2;
	if (days >= 3) return .1;
	return 0;
}
function rentTotal(daily, days) {
	return Math.round(daily * days * (1 - rentDiscount(days)));
}
function runtimeHours(capacityWh, watts) {
	return capacityWh * .85 / watts;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CRjU6WHc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-semibold tracking-tight",
						children: COMPANY.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 max-w-sm text-sm text-muted-foreground",
						children: [COMPANY.tagline, ". EcoFlow и CTOLITY — в наличии в шоуруме на Таганке."]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted-foreground uppercase",
					children: "Навигация"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/catalog",
							className: "hover:underline",
							children: "Каталог"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/catalog",
							search: { offer: "rent" },
							className: "hover:underline",
							children: "Аренда"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contacts",
							className: "hover:underline",
							children: "Контакты"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted-foreground uppercase",
					children: "Шоурум"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: COMPANY.address }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: COMPANY.hours }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: COMPANY.phoneHref,
							className: "hover:underline",
							children: COMPANY.phone
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${COMPANY.email}`,
							className: "hover:underline",
							children: COMPANY.email
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: COMPANY.legal }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Характеристики — по данным производителей, 2026" })]
			})
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,border-color,transform,opacity] duration-150 ease-[var(--ease-smooth-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-95 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			invert: "bg-ink-foreground text-ink hover:bg-ink-foreground/90",
			outline: "border border-border bg-transparent hover:bg-secondary",
			ghost: "hover:bg-secondary",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-6 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-ink/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-background p-6 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-4 right-4 rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Закрыть"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 pr-8", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-xl font-semibold tracking-tight", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground shadow-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("text-sm font-medium leading-none text-foreground", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-lg border border-input bg-card px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
var useInquiry = create()(persist((set, get) => ({
	items: [],
	open: false,
	setOpen: (open) => set({ open }),
	add: (item) => {
		if (get().items.find((row) => row.slug === item.slug && row.mode === item.mode)) {
			set({
				items: get().items.map((row) => row.slug === item.slug && row.mode === item.mode ? {
					...row,
					qty: row.qty + item.qty,
					days: item.mode === "rent" ? item.days : row.days
				} : row),
				open: true
			});
			return;
		}
		set({
			items: [...get().items, item],
			open: true
		});
	},
	remove: (slug, mode) => set({ items: get().items.filter((row) => !(row.slug === slug && row.mode === mode)) }),
	setDays: (slug, days) => set({ items: get().items.map((row) => row.slug === slug && row.mode === "rent" ? {
		...row,
		days: Math.max(1, days)
	} : row) }),
	setQty: (slug, mode, qty) => set({ items: get().items.map((row) => row.slug === slug && row.mode === mode ? {
		...row,
		qty: Math.max(1, qty)
	} : row) }),
	clear: () => set({ items: [] })
}), {
	name: "volta-inquiry",
	partialize: (state) => ({ items: state.items })
}));
function itemTotal(item) {
	const product = getProduct(item.slug);
	if (!product) return 0;
	if (item.mode === "buy") return product.salePrice * item.qty;
	return rentTotal(product.rentDay, item.days) * item.qty;
}
function inquiryCount(items) {
	return items.reduce((sum, item) => sum + item.qty, 0);
}
function inquiryTotal(items) {
	return items.reduce((sum, item) => sum + itemTotal(item), 0);
}
function InquiryPanel() {
	const { items, open, setOpen, remove, setDays, setQty, clear } = useInquiry();
	const [sent, setSent] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [comment, setComment] = (0, import_react.useState)("");
	const total = (0, import_react.useMemo)(() => inquiryTotal(items), [items]);
	function onSubmit(event) {
		event.preventDefault();
		if (!items.length || !name.trim() || !phone.trim()) return;
		const payload = {
			name: name.trim(),
			phone: phone.trim(),
			comment: comment.trim(),
			items,
			total,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		const prev = JSON.parse(localStorage.getItem("volta-requests") ?? "[]");
		localStorage.setItem("volta-requests", JSON.stringify([payload, ...prev].slice(0, 20)));
		setSent(true);
		clear();
	}
	function onOpenChange(next) {
		setOpen(next);
		if (!next) setSent(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			"aria-describedby": void 0,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: sent ? "Заявка принята" : "Заявка" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: sent ? "Перезвоним в рабочее время и подтвердим наличие, сроки и доставку." : "Продажа и аренда. Менеджер уточнит наличие и доставку." })] }), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-1 flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"Если вопрос срочный — ",
						COMPANY.phone,
						" или Telegram ",
						COMPANY.telegramLabel,
						"."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => onOpenChange(false),
					children: "Закрыть"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex min-h-0 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 flex-1 space-y-4 overflow-y-auto pr-1",
					children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Корзина пуста. Добавьте станцию из каталога — в продажу или в аренду."
					}) : items.map((item) => {
						const product = getProduct(item.slug);
						if (!product) return null;
						const discount = item.mode === "rent" ? rentDiscount(item.days) : 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-wide text-muted-foreground uppercase",
										children: item.mode === "buy" ? "Покупка" : `Аренда · ${item.days} дн.`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/catalog/$slug",
										params: { slug: product.slug },
										className: "mt-1 block font-medium hover:underline",
										onClick: () => setOpen(false),
										children: product.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-sm tabular-nums",
										children: formatPrice(itemTotal(item))
									}),
									discount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											"скидка ",
											discount * 100,
											"% за срок"
										]
									}) : null
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground",
									onClick: () => remove(item.slug, item.mode),
									"aria-label": "Удалить",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Qty, {
									value: item.qty,
									onChange: (qty) => setQty(item.slug, item.mode, qty)
								}), item.mode === "rent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "ml-auto flex items-center gap-2 text-xs text-muted-foreground",
									children: ["дней", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										min: 1,
										max: 60,
										value: item.days,
										onChange: (event) => setDays(item.slug, Number(event.target.value) || 1),
										className: "h-9 w-16 px-2"
									})]
								}) : null]
							})]
						}, `${item.slug}-${item.mode}`);
					})
				}), items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-4 space-y-3 border-t border-border pt-4",
					onSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: "Итого"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg tabular-nums",
								children: formatPrice(total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "inq-name",
								children: "Имя"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "inq-name",
								value: name,
								onChange: (event) => setName(event.target.value),
								required: true,
								autoComplete: "name"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "inq-phone",
								children: "Телефон"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "inq-phone",
								value: phone,
								onChange: (event) => setPhone(event.target.value),
								required: true,
								inputMode: "tel",
								autoComplete: "tel",
								placeholder: "+7"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "inq-comment",
								children: "Комментарий"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: "inq-comment",
								value: comment,
								onChange: (event) => setComment(event.target.value),
								placeholder: "Дата, адрес доставки, задача",
								className: "min-h-20"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "w-full",
							children: "Отправить заявку"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalog",
						children: "Открыть каталог"
					})
				})]
			})]
		})
	});
}
function Qty({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center rounded-md border border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-9 place-items-center text-muted-foreground hover:text-foreground",
				onClick: () => onChange(Math.max(1, value - 1)),
				"aria-label": "Меньше",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-6 text-center font-mono text-sm tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-9 place-items-center text-muted-foreground hover:text-foreground",
				onClick: () => onChange(value + 1),
				"aria-label": "Больше",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
			})
		]
	});
}
var NAV = [
	{
		to: "/catalog",
		label: "Каталог"
	},
	{
		to: "/catalog",
		label: "Аренда",
		search: { offer: "rent" }
	},
	{
		to: "/contacts",
		label: "Контакты"
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const searchStr = useRouterState({ select: (state) => state.location.searchStr });
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const items = useInquiry((state) => state.items);
	const setOpen = useInquiry((state) => state.setOpen);
	const count = mounted ? inquiryCount(items) : 0;
	(0, import_react.useEffect)(() => setMounted(true), []);
	(0, import_react.useEffect)(() => setMenuOpen(false), [pathname, searchStr]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					"aria-label": "VOLTA — на главную",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: COMPANY.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: NAV.map((item) => {
						const isRent = item.label === "Аренда";
						const isCatalog = item.to === "/catalog" && !isRent;
						const rentActive = pathname.startsWith("/catalog") && searchStr.includes("offer=rent");
						const active = isRent ? rentActive : isCatalog ? pathname.startsWith("/catalog") && !rentActive : pathname === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							search: "search" in item ? item.search : void 0,
							className: cn("text-sm font-medium transition-colors", active ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
							children: item.label
						}, item.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "hidden sm:inline-flex",
							onClick: () => setOpen(true),
							children: ["Заявка", count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-5 place-items-center rounded-full bg-primary font-mono text-xs leading-none text-primary-foreground tabular-nums",
								children: count
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "hidden sm:inline-flex",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: COMPANY.phoneHref,
								children: COMPANY.phone
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-md md:hidden",
							onClick: () => setMenuOpen((value) => !value),
							"aria-expanded": menuOpen,
							"aria-label": menuOpen ? "Закрыть меню" : "Открыть меню",
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background px-4 py-4 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				children: [
					NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						search: "search" in item ? item.search : void 0,
						className: "rounded-md px-3 py-3 text-base font-medium hover:bg-secondary",
						children: item.label
					}, item.label)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "rounded-md px-3 py-3 text-left text-base font-medium hover:bg-secondary",
						onClick: () => {
							setMenuOpen(false);
							setOpen(true);
						},
						children: ["Заявка", count > 0 ? ` · ${count}` : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: COMPANY.phoneHref,
						className: "rounded-md px-3 py-3 text-base font-medium hover:bg-secondary",
						children: COMPANY.phone
					})
				]
			})
		}) : null]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryPanel, {})] });
}
function LogoMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: "size-7",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "32",
			height: "32",
			rx: "8",
			className: "fill-primary"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M18.2 7 10 17.4h6.1L14.6 25 22 14.4h-6.2L18.2 7Z",
			className: "fill-primary-foreground"
		})]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var styles_default = "/assets/styles-D8bGnYpU.css";
var APP_NAME = "VOLTA — аренда и продажа EcoFlow и CTOLITY";
var Route$5 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Шоурум VOLTA в Москве: продажа и аренда портативных электростанций EcoFlow и CTOLITY. Каталог с характеристиками, самовывоз и доставка."
			},
			{
				name: "theme-color",
				content: "#1C332E"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
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
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&family=Unbounded:wght@500;600;700&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ru",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-rmjskBfB.mjs");
var Route$4 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./catalog-CPnBs_0F.mjs");
function parseBrand(value) {
	return value === "ecoflow" || value === "ctolity" ? value : void 0;
}
function parseOffer(value) {
	return value === "sale" || value === "rent" ? value : void 0;
}
function parseSize(value) {
	return value === "compact" || value === "mid" || value === "pro" ? value : void 0;
}
var Route$3 = createFileRoute("/catalog")({
	validateSearch: (search) => ({
		brand: parseBrand(search.brand),
		offer: parseOffer(search.offer),
		size: parseSize(search.size)
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contacts-I8GSxP0c.mjs");
var Route$2 = createFileRoute("/contacts")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Контакты — VOLTA" }] })
});
var $$splitComponentImporter$1 = () => import("./catalog.index-Bi--slEZ.mjs");
var Route$1 = createFileRoute("/catalog/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Каталог — VOLTA" }] })
});
var $$splitNotFoundComponentImporter = () => import("./catalog._slug-bxkk9GTo.mjs");
var $$splitComponentImporter = () => import("./catalog._slug-DlzGh3ys.mjs");
var Route = createFileRoute("/catalog/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.product.name} — VOLTA` : "VOLTA" }] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var CatalogRoute = Route$3.update({
	id: "/catalog",
	path: "/catalog",
	getParentRoute: () => Route$5
});
var ContactsRoute = Route$2.update({
	id: "/contacts",
	path: "/contacts",
	getParentRoute: () => Route$5
});
var CatalogIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => CatalogRoute
});
var CatalogRouteChildren = {
	CatalogSlugRoute: Route.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => CatalogRoute
	}),
	CatalogIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	CatalogRoute: CatalogRoute._addFileChildren(CatalogRouteChildren),
	ContactsRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { BRAND_LABEL as _, Textarea as a, relatedProducts as b, Button as c, formatPrice as d, formatWatts as f, runtimeHours as g, rentTotal as h, useInquiry as i, cn as l, rentDiscount as m, Route as n, Label as o, formatWh as p, Route$3 as r, Input as s, router_exports as t, formatHours as u, COMPANY as v, products as y };
