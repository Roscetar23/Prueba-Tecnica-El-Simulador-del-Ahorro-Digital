import { ProductList } from "@/modules/products/components/ProductList";
import { getProducts } from "@/lib/api";
//Lo mismo estas dos importaciones ya no son necesarias, si no existiera la base de datos lo mantendria
// import type { Product } from '@/modules/products/types/product'
// import { getProducts } from '@/lib/api'

// Metodo que implemente ISR, En el readme general explico el por que
export const revalidate = 3600;

// Infiere la informacion que viene del JSON
// Esta linea de codigo es la que me manejaba la lista de productos en el JSON, como ajuste base de datos la oculto
// const products = productsData as Product[]

// Esta vista reenderiza todo el modulo de producto.
export default async function ProductsPage() {
  //Coneixon base de datos
  const products = await getProducts();
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Productos de ahorro</h1>
        <p className="text-gray-500 mt-2">
          Explora nuestras cuentas y encuentra la que más se adapta a ti
        </p>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-700">No hay productos disponibles</p>
            <p className="text-sm text-gray-400 mt-1">El servicio no está disponible en este momento. Intenta más tarde.</p>
          </div>
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </main>
  )
}
