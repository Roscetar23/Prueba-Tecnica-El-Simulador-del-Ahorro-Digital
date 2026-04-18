import { ProductList } from '@/modules/products/components/ProductList'
import productsData from '@/modules/products/data/products.json'
import type { Product } from '@/modules/products/types/product'

// Metodo que implemente ISR, En el readme general explico el por que 
export const revalidate = 3600

// Infiere la informacion que viene del JSON
const products = productsData as Product[]

// Esta vista reenderiza todo el modulo de producto.
export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Productos de ahorro</h1>
        <p className="text-gray-500 mt-2">
          Explora nuestras cuentas y encuentra la que más se adapta a ti
        </p>
      </div>
      <ProductList products={products} />
    </main>
  )
}