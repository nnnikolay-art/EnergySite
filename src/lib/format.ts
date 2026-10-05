export function formatPrice(value: number) {
  return `${new Intl.NumberFormat("ru-RU").format(value)}\u00A0₽`;
}

export function formatWh(value: number) {
  return `${new Intl.NumberFormat("ru-RU").format(value)}\u00A0Вт·ч`;
}

export function formatWatts(value: number) {
  if (value >= 1000 && value % 100 === 0) {
    const kw = value / 1000;
    const text = Number.isInteger(kw) ? String(kw) : kw.toFixed(1).replace(".", ",");
    return `${text}\u00A0кВт`;
  }
  return `${new Intl.NumberFormat("ru-RU").format(value)}\u00A0Вт`;
}

export function formatKg(value: number) {
  return `${value.toLocaleString("ru-RU")}\u00A0кг`;
}

export function formatHours(hours: number) {
  if (hours < 1) {
    const minutes = Math.max(1, Math.round(hours * 60));
    return `${minutes}\u00A0мин`;
  }
  if (hours >= 24) {
    const days = hours / 24;
    const rounded = days >= 10 ? Math.round(days) : Number(days.toFixed(1));
    return `${rounded.toLocaleString("ru-RU")}\u00A0сут`;
  }
  const rounded = hours >= 10 ? Math.round(hours) : Number(hours.toFixed(1));
  return `${rounded.toLocaleString("ru-RU")}\u00A0ч`;
}

export function rentDiscount(days: number) {
  if (days >= 14) return 0.3;
  if (days >= 7) return 0.2;
  if (days >= 3) return 0.1;
  return 0;
}

export function rentTotal(daily: number, days: number) {
  return Math.round(daily * days * (1 - rentDiscount(days)));
}

export function runtimeHours(capacityWh: number, watts: number) {
  return (capacityWh * 0.85) / watts;
}
