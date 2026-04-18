import type { SimulationInput, SimulationResult } from '../types/simulation'

// Estya funcion maneja toda la logica de intereses pedida en el lado dse rentabilidad en la prueba.
// La explicacion estara en el readmi general

export function calculateInterest(input: SimulationInput): SimulationResult {
  const { initialAmount, monthlyContribution, months, annualRate } = input

  const r = annualRate / 12 / 100 // tasa mensual
  const monthlyBreakdown = []

  let balance = initialAmount

  for (let month = 1; month <= months; month++) {
    const interest = balance * r
    balance = balance + interest + monthlyContribution
    monthlyBreakdown.push({
      month,
      balance: Math.round(balance),
      interest: Math.round(interest),
    })
  }

  const finalAmount = Math.round(balance)
  const totalContributions = initialAmount + monthlyContribution * months
  const interestEarned = finalAmount - totalContributions

  return {
    finalAmount,
    totalContributions,
    interestEarned,
    monthlyBreakdown,
  }
}