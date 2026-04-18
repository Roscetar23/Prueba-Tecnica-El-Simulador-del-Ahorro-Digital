// Tipos de input que se pueden llamar
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

// Datos que espera el input al ser llamado y input general de la pagina
export function Input({ label, error, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        className={`border rounded-lg px-3 py-2 text-sm outline-none transition-colors
          focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${error ? "border-red-500" : "border-gray-300"}
          ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
