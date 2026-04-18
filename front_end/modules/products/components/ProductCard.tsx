import { formatCurrency } from "@/shared/utils/formatCurrency";
import type { Product } from "../types/product";
// Constantes de estilos para los tipos de cuenta

const TYPE_STYLES: Record<string, string> = {
  ahorro: "bg-green-100 text-green-800",
  corriente: "bg-blue-100 text-blue-800",
  CDT: "bg-purple-100 text-purple-800",
};

// Datos que se necesitan
interface ProductCardProps {
  product: Product;
}


// card con toda la informacion e interefaz visual, trayendo toda la informacion del producto 
export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold text-gray-900 text-base">
          {product.name}
        </h3>
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${TYPE_STYLES[product.type]}`}
        >
          {product.type.toUpperCase()}
        </span>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">
        {product.description}
      </p>
      <div className="flex justify-between items-center pt-2 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-400">Tasa E.A.</p>
          <p className="text-lg font-bold text-blue-600">
            {product.interestRate}%
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Monto mínimo</p>
          <p className="text-sm font-semibold text-gray-700">
            {formatCurrency(product.minAmount)}
          </p>
        </div>
      </div>
    </div>
  );
}
