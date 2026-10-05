import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { InquiryPanel } from "@/components/inquiry-panel";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/data/products";
import { cn } from "@/lib/utils";
import { inquiryCount, useInquiry } from "@/store/inquiry";

const NAV = [
  { to: "/catalog" as const, label: "Каталог" },
  { to: "/catalog" as const, label: "Аренда", search: { offer: "rent" as const } },
  { to: "/contacts" as const, label: "Контакты" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const searchStr = useRouterState({ select: (state) => state.location.searchStr });
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const items = useInquiry((state) => state.items);
  const setOpen = useInquiry((state) => state.setOpen);
  const count = mounted ? inquiryCount(items) : 0;

  useEffect(() => setMounted(true), []);
  useEffect(() => setMenuOpen(false), [pathname, searchStr]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5" aria-label="VOLTA — на главную">
            <LogoMark />
            <span className="font-display text-lg font-semibold tracking-tight">{COMPANY.name}</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => {
              const isRent = item.label === "Аренда";
              const isCatalog = item.to === "/catalog" && !isRent;
              const rentActive = pathname.startsWith("/catalog") && searchStr.includes("offer=rent");
              const active = isRent
                ? rentActive
                : isCatalog
                  ? pathname.startsWith("/catalog") && !rentActive
                  : pathname === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  search={"search" in item ? item.search : undefined}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex" onClick={() => setOpen(true)}>
              Заявка
              {count > 0 ? (
                <span className="grid size-5 place-items-center rounded-full bg-primary font-mono text-xs leading-none text-primary-foreground tabular-nums">
                  {count}
                </span>
              ) : null}
            </Button>
            <Button size="sm" className="hidden sm:inline-flex" asChild>
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </Button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-md md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {menuOpen ? (
          <div className="border-t border-border bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  search={"search" in item ? item.search : undefined}
                  className="rounded-md px-3 py-3 text-base font-medium hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                className="rounded-md px-3 py-3 text-left text-base font-medium hover:bg-secondary"
                onClick={() => {
                  setMenuOpen(false);
                  setOpen(true);
                }}
              >
                Заявка{count > 0 ? ` · ${count}` : ""}
              </button>
              <a href={COMPANY.phoneHref} className="rounded-md px-3 py-3 text-base font-medium hover:bg-secondary">
                {COMPANY.phone}
              </a>
            </nav>
          </div>
        ) : null}
      </header>
      <InquiryPanel />
    </>
  );
}

function LogoMark() {
  return (
    <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
      <rect width="32" height="32" rx="8" className="fill-primary" />
      <path d="M18.2 7 10 17.4h6.1L14.6 25 22 14.4h-6.2L18.2 7Z" className="fill-primary-foreground" />
    </svg>
  );
}
