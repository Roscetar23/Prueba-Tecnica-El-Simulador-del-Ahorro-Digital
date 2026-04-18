'use client'

import { useState, useMemo } from 'react'
import { useDebounce } from '@/shared/hook/useDebounce'
import type { Product } from '../types/product'


// este hook encapsula toda la logica para buscar y filtrar una lista de productos


export function useProductFilter(products: Product[]) {
  const [search, setSearch] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')
// importa el debounce del modulo shared

  const debouncedSearch = useDebounce(search, 400)

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
      const matchesType = selectedType === 'all' || p.type === selectedType
      return matchesSearch && matchesType
    })
  }, [products, debouncedSearch, selectedType])

  return {
    search,
    setSearch,
    selectedType,
    setSelectedType,
    filtered,
  }
}