// Datoas necesarios para el primer input, los ingresa el usuario
export interface SimulationInput {
  initialAmount: number
  monthlyContribution: number
  months: number
  annualRate: number
}

//Datos de salida, los regresa el progama
export interface SimulationResult {
  finalAmount: number
  totalContributions: number
  interestEarned: number
  monthlyBreakdown: MonthlyBreakdown[]
}

// Reportes mensuales
export interface MonthlyBreakdown {
  month: number
  balance: number
  interest: number
}
