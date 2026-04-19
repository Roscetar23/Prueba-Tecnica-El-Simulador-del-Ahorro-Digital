import type { Product } from '@/modules/products/types/product'

// Con este apartado puedo cambiar la URL para ponerla en el archivo ENV pero no lo voy a implementar ya que es una prueba tecnica
// process.env.NEXT_PUBLIC_API_URL ??

const API_URL = 'http://localhost:3001/api'

// Conexion con base de datos, sigo amnejando IRS en el documento explico el por que, Tambien agrego una validacion por si el backend esta apagado
export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_URL}/products`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}