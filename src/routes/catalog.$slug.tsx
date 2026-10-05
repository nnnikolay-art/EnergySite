import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BRAND_LABEL, getProduct, relatedProducts } from "@/data/products";
import {
  formatHours,
  formatPrice,
  formatWatts,
  formatWh,
  rentDiscount,
  rentTotal,
  runtimeHours,
} from "@/lib/format";
import { useInquiry } from "@/store/inquiry";

export const Route = createFileRoute("/catalog/$slug")({
  component: ProductPage,
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.product.name} — VOLTA` : "VOLTA" }],
  }),
  notFoundComponent: () => (
    <main className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-3xl font-semibold">Станция не найдена</h1>
      <p className="mt-3 text-muted-foreground">Модель снята или ссылка устарела.</p>
      <Button className="mt-6" asChild>
        <Link to="/catalog">В каталог</Link>
      </Button>
    </main>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const add = useInquiry((state) => state.add);
  const [mode, setMode] = useState<"buy" | "rent">("buy");
  const [days, setDays] = useState(3);
  const [watts, setWatts] = useState(60);

  const related = relatedProducts(product);
  const discount = rentDiscount(days);
  const rentSum = rentTotal(product.rentDay, days);
  const hours = useMemo(() => runtimeHours(product.capacityWh, Math.max(1, watts)), [product.capacityWh, watts]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="text-sm text-muted-foreground">
        <Link to="/catalog" className="hover:text-foreground">
          Каталог
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={product.image} alt={product.name} className="aspect-photo w-full object-cover" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="flex flex-wrap gap-2">
            <Badge variant="muted">{BRAND_LABEL[product.brand]}</Badge>
            {product.bestFor.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>
          <p className="mt-3 text-muted-foreground">{product.description}</p>

          <dl className="mt-6 grid grid-cols-3 gap-3 rounded-xl border border-border bg-card p-4 font-mono text-xs">
            <div>
              <dt className="text-muted-foreground">Ёмкость</dt>
              <dd className="mt-1 text-sm text-foreground tabular-nums">{formatWh(product.capacityWh)}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Выход</dt>
              <dd className="mt-1 text-sm text-foreground tabular-nums">{formatWatts(product.outputW)}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Вес</dt>
              <dd className="mt-1 text-sm text-foreground tabular-nums">
                {product.weightKg.toLocaleString("ru-RU")} кг
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex rounded-full border border-border p-1">
            <button
              type="button"
              onClick={() => setMode("buy")}
              className={`h-10 flex-1 rounded-full text-sm font-medium ${
                mode === "buy" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Покупка
            </button>
            <button
              type="button"
              onClick={() => setMode("rent")}
              className={`h-10 flex-1 rounded-full text-sm font-medium ${
                mode === "rent" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              В аренду
            </button>
          </div>

          {mode === "rent" ? (
            <div className="mt-4 rounded-xl border border-border bg-card p-4">
              <label className="flex items-center justify-between gap-3 text-sm">
                Срок, дней
                <Input
                  type="number"
                  min={1}
                  max={60}
                  value={days}
                  onChange={(event) => setDays(Math.max(1, Number(event.target.value) || 1))}
                  className="h-10 w-20"
                />
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {[1, 3, 7, 14].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setDays(value)}
                    className={`h-9 rounded-full border px-3 text-xs font-medium ${
                      days === value ? "border-primary bg-primary text-primary-foreground" : "border-border"
                    }`}
                  >
                    {value} дн.
                  </button>
                ))}
              </div>
              <p className="mt-4 font-display text-2xl tabular-nums">{formatPrice(rentSum)}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {formatPrice(product.rentDay)} / сутки
                {discount > 0 ? ` · скидка ${discount * 100}%` : " · скидка с 3 дней"}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Залог {formatPrice(Math.round(product.salePrice * 0.3))} — вернём при приёмке.
              </p>
            </div>
          ) : (
            <p className="mt-5 font-display text-3xl font-semibold tabular-nums">{formatPrice(product.salePrice)}</p>
          )}

          <Button
            className="mt-6 w-full"
            size="lg"
            onClick={() => add({ slug: product.slug, mode, days, qty: 1 })}
          >
            {mode === "buy" ? "В заявку на покупку" : "В заявку на аренду"}
          </Button>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {product.highlights.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-16 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Характеристики</h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <tbody>
                {product.specs.map((row, index) => (
                  <tr key={row.label} className={index % 2 === 0 ? "bg-card" : "bg-background"}>
                    <th className="w-1/2 px-4 py-3 text-left font-medium text-muted-foreground">{row.label}</th>
                    <td className="px-4 py-3">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Сколько проработает</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Оценка: ёмкость × 0,85 / мощность прибора. Реальное время зависит от инвертора и температуры.
          </p>
          <div className="mt-4 rounded-2xl border border-border bg-card p-5">
            <label className="text-sm font-medium" htmlFor="watts">
              Мощность прибора, Вт
            </label>
            <Input
              id="watts"
              type="number"
              min={1}
              value={watts}
              onChange={(event) => setWatts(Number(event.target.value) || 1)}
              className="mt-2"
            />
            <p className="mt-4 font-display text-3xl tabular-nums">{formatHours(hours)}</p>
            {watts > product.outputW ? (
              <p className="mt-2 text-sm text-destructive">
                Прибор выше номинала {formatWatts(product.outputW)}
                {product.xBoostW ? ` (X-Boost до ${formatWatts(product.xBoostW)})` : ""}.
              </p>
            ) : null}
          </div>
          <ul className="mt-4 divide-y divide-border rounded-2xl border border-border">
            {product.runtimes.map((item) => (
              <li key={item.device} className="flex items-center justify-between px-4 py-3 text-sm">
                <span>
                  {item.device}
                  <span className="ml-2 text-muted-foreground">{item.watts} Вт</span>
                </span>
                <span className="font-mono tabular-nums">
                  {item.watts > product.outputW && !product.xBoostW
                    ? "—"
                    : formatHours(runtimeHours(product.capacityWh, item.watts))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Рядом в линейке</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
