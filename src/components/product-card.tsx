import { Link } from "@tanstack/react-router";
import { BRAND_LABEL, type Product } from "@/data/products";
import { formatPrice, formatWatts, formatWh } from "@/lib/format";
import { Badge } from "@/components/ui/badge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/catalog/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[transform,border-color] duration-200 ease-[var(--ease-smooth-out)] hover:-translate-y-0.5 hover:border-foreground/20"
    >
      <div className="relative aspect-photo overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="size-full object-cover transition-transform duration-500 ease-[var(--ease-smooth-out)] group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="muted">{BRAND_LABEL[product.brand]}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="font-display text-lg font-semibold tracking-tight">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
        </div>
        <dl className="grid grid-cols-3 gap-2 font-mono text-xs tabular-nums">
          <div>
            <dt className="text-muted-foreground">Ёмкость</dt>
            <dd className="mt-1 text-foreground">{formatWh(product.capacityWh)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Выход</dt>
            <dd className="mt-1 text-foreground">{formatWatts(product.outputW)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Вес</dt>
            <dd className="mt-1 text-foreground">{product.weightKg.toLocaleString("ru-RU")} кг</dd>
          </div>
        </dl>
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border pt-4">
          <div>
            <p className="text-xs text-muted-foreground">Купить</p>
            <p className="font-display text-base font-medium tabular-nums">{formatPrice(product.salePrice)}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Аренда / сутки</p>
            <p className="font-medium tabular-nums">{formatPrice(product.rentDay)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
