import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProduct } from "@/data/products";
import { rentTotal } from "@/lib/format";

export type InquiryMode = "buy" | "rent";

export type InquiryItem = {
  slug: string;
  mode: InquiryMode;
  days: number;
  qty: number;
};

type InquiryState = {
  items: InquiryItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (item: InquiryItem) => void;
  remove: (slug: string, mode: InquiryMode) => void;
  setDays: (slug: string, days: number) => void;
  setQty: (slug: string, mode: InquiryMode, qty: number) => void;
  clear: () => void;
};

export const useInquiry = create<InquiryState>()(
  persist(
    (set, get) => ({
      items: [],
      open: false,
      setOpen: (open) => set({ open }),
      add: (item) => {
        const existing = get().items.find((row) => row.slug === item.slug && row.mode === item.mode);
        if (existing) {
          set({
            items: get().items.map((row) =>
              row.slug === item.slug && row.mode === item.mode
                ? {
                    ...row,
                    qty: row.qty + item.qty,
                    days: item.mode === "rent" ? item.days : row.days,
                  }
                : row,
            ),
            open: true,
          });
          return;
        }
        set({ items: [...get().items, item], open: true });
      },
      remove: (slug, mode) =>
        set({ items: get().items.filter((row) => !(row.slug === slug && row.mode === mode)) }),
      setDays: (slug, days) =>
        set({
          items: get().items.map((row) =>
            row.slug === slug && row.mode === "rent" ? { ...row, days: Math.max(1, days) } : row,
          ),
        }),
      setQty: (slug, mode, qty) =>
        set({
          items: get().items.map((row) =>
            row.slug === slug && row.mode === mode ? { ...row, qty: Math.max(1, qty) } : row,
          ),
        }),
      clear: () => set({ items: [] }),
    }),
    {
      name: "volta-inquiry",
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

export function itemTotal(item: InquiryItem) {
  const product = getProduct(item.slug);
  if (!product) return 0;
  if (item.mode === "buy") return product.salePrice * item.qty;
  return rentTotal(product.rentDay, item.days) * item.qty;
}

export function inquiryCount(items: InquiryItem[]) {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

export function inquiryTotal(items: InquiryItem[]) {
  return items.reduce((sum, item) => sum + itemTotal(item), 0);
}
