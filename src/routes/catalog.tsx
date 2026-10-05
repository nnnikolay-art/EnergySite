import { createFileRoute, Outlet } from "@tanstack/react-router";
import type { Brand, SizeClass } from "@/data/products";

export type CatalogSearch = {
  brand?: Brand;
  offer?: "sale" | "rent";
  size?: SizeClass;
};

function parseBrand(value: unknown): Brand | undefined {
  return value === "ecoflow" || value === "ctolity" ? value : undefined;
}

function parseOffer(value: unknown): CatalogSearch["offer"] {
  return value === "sale" || value === "rent" ? value : undefined;
}

function parseSize(value: unknown): SizeClass | undefined {
  return value === "compact" || value === "mid" || value === "pro" ? value : undefined;
}

export const Route = createFileRoute("/catalog")({
  validateSearch: (search: Record<string, unknown>): CatalogSearch => ({
    brand: parseBrand(search.brand),
    offer: parseOffer(search.offer),
    size: parseSize(search.size),
  }),
  component: CatalogLayout,
});

function CatalogLayout() {
  return <Outlet />;
}
