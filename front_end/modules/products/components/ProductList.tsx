'use client'

import { useProductFilter } from "../hooks/useProductFilter";
import { FilterBar } from "./FilterBar";
import { ProductCard } from "./ProductCard";
import type { Product } from "../types/product";

// Recibe los datos en forma de array 
interface ProductListProps {
  products: Product[];
}

// Esta funcion llama todos los productos y los pone en una lista, ademas hace el llamado a todos los componetes.
export function ProductList({ products }: ProductListProps) {
  const { search, setSearch, selectedType, setSelectedType, filtered } =
    useProductFilter(products);

  return (
    <div>
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">No se encontraron productos</p>
          <p className="text-sm mt-1">Intenta con otro nombre o tipo</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
