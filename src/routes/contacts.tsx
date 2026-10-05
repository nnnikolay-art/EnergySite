import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY } from "@/data/products";

export const Route = createFileRoute("/contacts")({
  component: ContactsPage,
  head: () => ({
    meta: [{ title: "Контакты — VOLTA" }],
  }),
});

function ContactsPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
      at: new Date().toISOString(),
    };
    const prev = JSON.parse(localStorage.getItem("volta-contacts") ?? "[]") as unknown[];
    localStorage.setItem("volta-contacts", JSON.stringify([payload, ...prev].slice(0, 20)));
    setSent(true);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Контакты</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">Шоурум VOLTA</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Можно приехать, включить станцию и забрать в тот же день. Для аренды на выходные лучше писать заранее.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-semibold">Адрес</h2>
            <p className="mt-3 text-sm leading-relaxed">
              {COMPANY.address}
              <br />
              {COMPANY.metro}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{COMPANY.hours}</p>
            <p className="mt-3 text-sm text-muted-foreground">{COMPANY.delivery}</p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-semibold">Связь</h2>
            <ul className="mt-3 space-y-2 text-sm">
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
              <li>
                <a href={COMPANY.telegram} className="hover:underline" target="_blank" rel="noreferrer">
                  Telegram {COMPANY.telegramLabel}
                </a>
              </li>
            </ul>
          </article>

          {sent ? (
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-semibold">Сообщение отправлено</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Ответим в рабочее время. Если срочно — звоните {COMPANY.phone}.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-display text-xl font-semibold">Написать нам</h2>
              <div className="mt-5 space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="c-name">Имя</Label>
                  <Input id="c-name" required value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-phone">Телефон</Label>
                  <Input
                    id="c-phone"
                    required
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    inputMode="tel"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-email">Почта</Label>
                  <Input
                    id="c-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="c-msg">Сообщение</Label>
                  <Textarea
                    id="c-msg"
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Модель, даты аренды или вопрос по характеристикам"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Отправить
                </Button>
              </div>
            </form>
          )}
        </div>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary">
            <iframe
              title="Карта шоурума VOLTA"
              className="h-[28rem] w-full border-0 grayscale"
              src="https://www.openstreetmap.org/export/embed.html?bbox=37.625%2C55.735%2C37.645%2C55.745&layer=mapnik&marker=55.7397%2C37.6354"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Большая Татарская, 35с1 — двор со стороны Климентовского. Парковка во дворе, 30 минут бесплатно.
          </p>
        </div>
      </div>
    </main>
  );
}
