import { Input } from "@/shared/components/input";
import { Button } from "@/shared/components/Button";
import { useSimulator } from "../hooks/useSimulator";
import { SimulatorResult } from "./SimulatorResult";

// Esra funcion es el reenderizado final de la vista, trae todos los componentes creados
export function SimulatorForm() {
  const { values, errors, result, handleChange, handleSubmit, handleReset } =
    useSimulator();

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-8">
      <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col gap-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Ingresa los datos
        </h2>

        <Input
          label="Monto inicial ($)"
          type="number"
          placeholder="Ej: 1000000"
          value={values.initialAmount}
          onChange={(e) => handleChange("initialAmount", e.target.value)}
          error={errors.initialAmount}
        />

        <Input
          label="Aporte mensual ($)"
          type="number"
          placeholder="Ej: 200000"
          value={values.monthlyContribution}
          onChange={(e) => handleChange("monthlyContribution", e.target.value)}
          error={errors.monthlyContribution}
        />

        <Input
          label="Plazo (meses)"
          type="number"
          placeholder="Ej: 12"
          value={values.months}
          onChange={(e) => handleChange("months", e.target.value)}
          error={errors.months}
        />

        <Input
          label="Tasa E.A. (%)"
          type="number"
          placeholder="Ej: 4.5"
          value={values.annualRate}
          onChange={(e) => handleChange("annualRate", e.target.value)}
          error={errors.annualRate}
        />

        <div className="flex gap-3 pt-2">
          <Button onClick={handleSubmit} className="flex-1">
            Calcular
          </Button>
          {result && (
            <Button variant="outline" onClick={handleReset}>
              Limpiar
            </Button>
          )}
        </div>
      </div>

      {result && <SimulatorResult result={result} />}
    </div>
  );
}
