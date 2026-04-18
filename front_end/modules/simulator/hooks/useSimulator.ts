import { useState } from "react";
import { calculateInterest } from "../utils/calculateInterest";
import type { SimulationInput, SimulationResult } from "../types/simulation";

// Valores requeridos para manejo de datos y errores
interface FormValues {
  initialAmount: string;
  monthlyContribution: string;
  months: string;
  annualRate: string;
}

interface FormErrors {
  initialAmount?: string;
  monthlyContribution?: string;
  months?: string;
  annualRate?: string;
}

// Validaciones necesarias y manejo de erroes logicos

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.initialAmount || Number(values.initialAmount) < 10000)
    errors.initialAmount = "El monto inicial debe ser mínimo $10.000";

  if (Number(values.monthlyContribution) < 0)
    errors.monthlyContribution = "El aporte mensual no puede ser negativo";

  if (
    !values.months ||
    Number(values.months) < 1 ||
    Number(values.months) > 360
  )
    errors.months = "Los meses deben estar entre 1 y 360";

  if (
    !values.annualRate ||
    Number(values.annualRate) <= 0 ||
    Number(values.annualRate) > 30
  )
    errors.annualRate = "La tasa debe estar entre 0.1% y 30%";

  return errors;
}

// Este es el hook que maneja toda la logica de negocio

export function useSimulator() {
  const [values, setValues] = useState<FormValues>({
    initialAmount: "",
    monthlyContribution: "",
    months: "",
    annualRate: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [result, setResult] = useState<SimulationResult | null>(null);

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit() {
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const input: SimulationInput = {
      initialAmount: Number(values.initialAmount),
      monthlyContribution: Number(values.monthlyContribution),
      months: Number(values.months),
      annualRate: Number(values.annualRate),
    };

    setResult(calculateInterest(input));
  }

  function handleReset() {
    setValues({
      initialAmount: "",
      monthlyContribution: "",
      months: "",
      annualRate: "",
    });
    setErrors({});
    setResult(null);
  }

  return { values, errors, result, handleChange, handleSubmit, handleReset };
}
