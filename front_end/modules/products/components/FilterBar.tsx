import { Input } from "@/shared/components/input";

// Estos son los datos que recibe el componente
interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedType: string;
  onTypeChange: (value: string) => void;
}

const TYPES = [
  { label: "Todos", value: "all" },
  { label: "Ahorro", value: "ahorro" },
  { label: "Corriente", value: "corriente" },
  { label: "CDT", value: "CDT" },
];

//Barra de filtro con los datos que necesita, se llama al input del modulo shared.

export function FilterBar({
  search,
  onSearchChange,
  selectedType,
  onTypeChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex-1">
        <Input
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex gap-2 flex-wrap">
        {TYPES.map((t) => (
          <button
            key={t.value}
            onClick={() => onTypeChange(t.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${
                selectedType === t.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
