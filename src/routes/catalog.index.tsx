import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ProductCard } from "@/components/product-card";
import { products, type Brand, type SizeClass } from "@/data/products";
import { cn } from "@/lib/utils";
import { Route as CatalogRoute, type CatalogSearch } from "@/routes/catalog";

export const Route = createFileRoute("/catalog/")({
  component: CatalogPage,
  head: () => ({
    meta: [{ title: "Каталог — VOLTA" }],
  }),
});

const BRANDS: { id?: Brand; label: string }[] = [
  { label: "Все бренды" },
  { id: "ecoflow", label: "EcoFlow" },
  { id: "ctolity", label: "CTOLITY" },
];

const OFFERS: { id?: CatalogSearch["offer"]; label: string }[] = [
  { label: "Продажа и аренда" },
  { id: "sale", label: "Купить" },
  { id: "rent", label: "Аренда" },
];

const SIZES: { id?: SizeClass; label: string }[] = [
  { label: "Любая ёмкость" },
  { id: "compact", label: "До 600 Вт·ч" },
  { id: "mid", label: "1 кВт·ч" },
  { id: "pro", label: "2 кВт·ч+" },
];

function CatalogPage() {
  const search = CatalogRoute.useSearch();
  const navigate = CatalogRoute.useNavigate();

  const filtered = products.filter((product) => {
    if (search.brand && product.brand !== search.brand) return false;
    if (search.size && product.size !== search.size) return false;
    if (search.offer === "sale" && !product.inStock) return false;
    if (search.offer === "rent" && !product.rentAvailable) return false;
    return true;
  });

  function setBrand(brand?: Brand) {
    void navigate({ search: { ...search, brand } });
  }

  function setOffer(offer?: CatalogSearch["offer"]) {
    void navigate({ search: { ...search, offer } });
  }

  function setSize(size?: SizeClass) {
    void navigate({ search: { ...search, size } });
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Каталог</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">Станции EcoFlow и CTOLITY</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Характеристики с официальных линеек 2026 года. Каждую модель можно купить или взять в аренду.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <FilterRow>
          {BRANDS.map((item) => (
            <Chip key={item.label} active={search.brand === item.id} onClick={() => setBrand(item.id)}>
              {item.label}
            </Chip>
          ))}
        </FilterRow>
        <FilterRow>
          {OFFERS.map((item) => (
            <Chip key={item.label} active={search.offer === item.id} onClick={() => setOffer(item.id)}>
              {item.label}
            </Chip>
          ))}
        </FilterRow>
        <FilterRow>
          {SIZES.map((item) => (
            <Chip key={item.label} active={search.size === item.id} onClick={() => setSize(item.id)}>
              {item.label}
            </Chip>
          ))}
        </FilterRow>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        {filtered.length === products.length
          ? `${filtered.length} моделей`
          : `${filtered.length} из ${products.length}`}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-border bg-card p-8">
          <p className="font-medium">Ничего не подошло</p>
          <p className="mt-2 text-sm text-muted-foreground">Сбросьте фильтры — в линейке 11 станций от 245 до 4096 Вт·ч.</p>
          <button type="button" className="mt-4 text-sm underline" onClick={() => void navigate({ search: {} })}>
            Сбросить
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}

function FilterRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 rounded-full border px-4 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground hover:border-foreground/30",
      )}
    >
      {children}
    </button>
  );
}
