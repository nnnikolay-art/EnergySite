import { Minus, Plus, Trash2 } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { COMPANY, getProduct } from "@/data/products";
import { formatPrice, rentDiscount } from "@/lib/format";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { inquiryTotal, itemTotal, useInquiry } from "@/store/inquiry";

export function InquiryPanel() {
  const { items, open, setOpen, remove, setDays, setQty, clear } = useInquiry();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const total = useMemo(() => inquiryTotal(items), [items]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!items.length || !name.trim() || !phone.trim()) return;
    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      comment: comment.trim(),
      items,
      total,
      at: new Date().toISOString(),
    };
    const prev = JSON.parse(localStorage.getItem("volta-requests") ?? "[]") as unknown[];
    localStorage.setItem("volta-requests", JSON.stringify([payload, ...prev].slice(0, 20)));
    setSent(true);
    clear();
  }

  function onOpenChange(next: boolean) {
    setOpen(next);
    if (!next) setSent(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>{sent ? "Заявка принята" : "Заявка"}</DialogTitle>
          <DialogDescription>
            {sent
              ? "Перезвоним в рабочее время и подтвердим наличие, сроки и доставку."
              : "Продажа и аренда. Менеджер уточнит наличие и доставку."}
          </DialogDescription>
        </DialogHeader>

        {sent ? (
          <div className="mt-8 flex flex-1 flex-col justify-between">
            <p className="text-sm text-muted-foreground">
              Если вопрос срочный — {COMPANY.phone} или Telegram {COMPANY.telegramLabel}.
            </p>
            <Button onClick={() => onOpenChange(false)}>Закрыть</Button>
          </div>
        ) : (
          <div className="mt-6 flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
              {items.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Корзина пуста. Добавьте станцию из каталога — в продажу или в аренду.
                </p>
              ) : (
                items.map((item) => {
                  const product = getProduct(item.slug);
                  if (!product) return null;
                  const discount = item.mode === "rent" ? rentDiscount(item.days) : 0;
                  return (
                    <article key={`${item.slug}-${item.mode}`} className="rounded-xl border border-border bg-card p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs tracking-wide text-muted-foreground uppercase">
                            {item.mode === "buy" ? "Покупка" : `Аренда · ${item.days} дн.`}
                          </p>
                          <Link
                            to="/catalog/$slug"
                            params={{ slug: product.slug }}
                            className="mt-1 block font-medium hover:underline"
                            onClick={() => setOpen(false)}
                          >
                            {product.name}
                          </Link>
                          <p className="mt-1 font-mono text-sm tabular-nums">{formatPrice(itemTotal(item))}</p>
                          {discount > 0 ? (
                            <p className="text-xs text-muted-foreground">скидка {discount * 100}% за срок</p>
                          ) : null}
                        </div>
                        <button
                          type="button"
                          className="rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
                          onClick={() => remove(item.slug, item.mode)}
                          aria-label="Удалить"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <Qty
                          value={item.qty}
                          onChange={(qty) => setQty(item.slug, item.mode, qty)}
                        />
                        {item.mode === "rent" ? (
                          <label className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
                            дней
                            <Input
                              type="number"
                              min={1}
                              max={60}
                              value={item.days}
                              onChange={(event) => setDays(item.slug, Number(event.target.value) || 1)}
                              className="h-9 w-16 px-2"
                            />
                          </label>
                        ) : null}
                      </div>
                    </article>
                  );
                })
              )}
            </div>

            {items.length > 0 ? (
              <form className="mt-4 space-y-3 border-t border-border pt-4" onSubmit={onSubmit}>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-muted-foreground">Итого</span>
                  <span className="font-display text-lg tabular-nums">{formatPrice(total)}</span>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="inq-name">Имя</Label>
                  <Input
                    id="inq-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="inq-phone">Телефон</Label>
                  <Input
                    id="inq-phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+7"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="inq-comment">Комментарий</Label>
                  <Textarea
                    id="inq-comment"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    placeholder="Дата, адрес доставки, задача"
                    className="min-h-20"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            ) : (
              <Button asChild className="mt-6" onClick={() => setOpen(false)}>
                <Link to="/catalog">Открыть каталог</Link>
              </Button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Qty({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return (
    <div className="inline-flex items-center rounded-md border border-border">
      <button
        type="button"
        className="grid size-9 place-items-center text-muted-foreground hover:text-foreground"
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label="Меньше"
      >
        <Minus className="size-3.5" />
      </button>
      <span className="w-6 text-center font-mono text-sm tabular-nums">{value}</span>
      <button
        type="button"
        className="grid size-9 place-items-center text-muted-foreground hover:text-foreground"
        onClick={() => onChange(value + 1)}
        aria-label="Больше"
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}
