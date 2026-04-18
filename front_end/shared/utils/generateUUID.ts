// Esta funcion genera el UUID version 4
export function generateUUID(): string {
  return crypto.randomUUID();
}
