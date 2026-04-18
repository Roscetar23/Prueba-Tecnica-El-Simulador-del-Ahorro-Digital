//Funcion para conveertir cualquier numero a formato de moneda colombiana

export function formatCurrency(
  value: number,
  locale = "es-CO",
  currency = "COP",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
