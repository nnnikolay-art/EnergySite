import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-xl font-semibold tracking-tight">{COMPANY.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">{COMPANY.tagline}. EcoFlow и CTOLITY — в наличии в шоуруме на Таганке.</p>
        </div>
        <div>
          <p className="text-xs tracking-wide text-muted-foreground uppercase">Навигация</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/catalog" className="hover:underline">
                Каталог
              </Link>
            </li>
            <li>
              <Link to="/catalog" search={{ offer: "rent" }} className="hover:underline">
                Аренда
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:underline">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-wide text-muted-foreground uppercase">Шоурум</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>{COMPANY.address}</li>
            <li>{COMPANY.hours}</li>
            <li>
              <a href={COMPANY.phoneHref} className="hover:underline">
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:underline">
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
          <span>{COMPANY.legal}</span>
          <span>Характеристики — по данным производителей, 2026</span>
        </div>
      </div>
    </footer>
  );
}
