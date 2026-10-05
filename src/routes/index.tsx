import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BatteryCharging, Clock, SunMedium, Truck } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { COMPANY, products } from "@/data/products";
import { formatPrice } from "@/lib/format";

export const Route = createFileRoute("/")({ component: Home });

const featured = [
  products.find((item) => item.slug === "ecoflow-river-3-plus"),
  products.find((item) => item.slug === "ecoflow-delta-3-plus"),
  products.find((item) => item.slug === "ctolity-xp1000"),
  products.find((item) => item.slug === "ecoflow-delta-3-max"),
].filter((item): item is NonNullable<typeof item> => Boolean(item));

const steps = [
  { title: "Выбор", text: "Модель из каталога — покупка или аренда от одного дня." },
  { title: "Заявка", text: "Оставляете контакты. Подтверждаем наличие в течение часа в рабочее время." },
  { title: "Выдача", text: "Самовывоз на Таганке или доставка по Москве. Инструктаж на месте." },
];

const faqs = [
  {
    q: "Что выгоднее — купить или взять в аренду?",
    a: "На поездку, съёмку или ремонт — аренда. Если станция нужна чаще двух-трёх раз в год, обычно дешевле купить. Посчитаем оба варианта в заявке.",
  },
  {
    q: "Нужен залог за аренду?",
    a: "Да, удерживаем 30% от цены продажи. Возвращаем в день приёмки, если станция цела. Можно картой.",
  },
  {
    q: "Есть солнечные панели и кабели?",
    a: "Да, панели, переходники Anderson / XT60 и кабели 220 В. Добавим к заявке.",
  },
  {
    q: "Подходит ли станция как резерв для квартиры?",
    a: "DELTA 3 Plus и старше закрывают холодильник, свет, роутер и котёл. Для ввода квартиры смотрите Ultra Plus и DELTA Pro 3 — с UPS быстрее 10 мс.",
  },
];

function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-end gap-10 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-12 lg:pt-16">
        <div className="lg:col-span-6">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Москва · EcoFlow · CTOLITY</p>
          <h1 className="mt-4 font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Станции, которые держат дом, площадку и маршрут
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Продажа и аренда портативных электростанций. Честные характеристики, выдача в день обращения, доставка по Москве.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/catalog">
                Каталог
                <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/catalog" search={{ offer: "rent" }}>
                Аренда от {formatPrice(790)} / сутки
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src="/products/hero.jpg"
              alt="Портативная электростанция в современной квартире"
              className="aspect-hero w-full object-cover"
            />
            <div className="grid grid-cols-3 divide-x divide-border">
              <Stat label="Моделей" value="11" />
              <Stat label="Аренда" value="от 1 дня" />
              <Stat label="Выдача" value="сегодня" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-4 sm:px-6">
          <Perk icon={BatteryCharging} title="LFP-ячейки" text="LiFePO4, 3000–4000 циклов, без запаха и выхлопа." />
          <Perk icon={Clock} title="Быстрый заряд" text="EcoFlow DELTA 3 — полный цикл примерно за час от розетки." />
          <Perk icon={SunMedium} title="Солнце" text="Панели и кабели в комплекте аренды по запросу." />
          <Perk icon={Truck} title="Логистика" text="Самовывоз на Таганке, доставка 790 ₽ по Москве." />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Подборка</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Что берут чаще всего</h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/catalog">Весь каталог</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-foreground/10 p-8">
            <p className="text-xs tracking-[0.2em] text-ink-foreground/50 uppercase">Покупка</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">Станция в собственность</h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
              Официальная гарантия производителя. Помогаем подобрать ёмкость под холодильник, котёл или съёмку. Можно забрать сегодня.
            </p>
            <Button variant="invert" className="mt-8" asChild>
              <Link to="/catalog" search={{ offer: "sale" }}>
                Смотреть цены
              </Link>
            </Button>
          </div>
          <div className="rounded-2xl border border-ink-foreground/10 p-8">
            <p className="text-xs tracking-[0.2em] text-ink-foreground/50 uppercase">Аренда</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">От суток, со скидкой за срок</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/70">
              <li>3+ дня — 10%</li>
              <li>7+ дней — 20%</li>
              <li>14+ дней — 30%</li>
            </ul>
            <Button variant="invert" className="mt-8" asChild>
              <Link to="/catalog" search={{ offer: "rent" }}>
                Взять в аренду
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight">Как устроена аренда</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-sm tabular-nums text-muted-foreground">0{index + 1}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight">Вопросы</h2>
          </div>
          <div className="divide-y divide-border lg:col-span-8">
            {faqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium">
                  {item.q}
                  <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">Шоурум на Таганке</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {COMPANY.address}. {COMPANY.hours}.
            </p>
          </div>
          <Button asChild>
            <Link to="/contacts">Контакты и схема проезда</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-4">
      <p className="font-display text-lg font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Perk({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof BatteryCharging;
  title: string;
  text: string;
}) {
  return (
    <div>
      <Icon className="size-5 text-primary" strokeWidth={1.5} />
      <h3 className="mt-3 font-medium">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
