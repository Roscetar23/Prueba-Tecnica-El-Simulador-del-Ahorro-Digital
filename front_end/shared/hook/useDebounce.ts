// Este hook implementa un debounce para retrazar la actualizacion de los valores hasta que el usuario deje de escribir
// Para ejecutar busquedas
'use client'

import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 400): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
