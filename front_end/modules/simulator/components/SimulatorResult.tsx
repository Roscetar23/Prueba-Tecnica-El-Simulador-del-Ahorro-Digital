import { formatCurrency } from '@/shared/utils/formatCurrency'
import type { SimulationResult } from '../types/simulation'

// Trae los datos de resultados de la simulacion
interface SimulatorResultProps {
  result: SimulationResult | null 
}

// Esta funcion mueestra laa logica al terminar una simulacion 
export function SimulatorResult({ result }: SimulatorResultProps) {

  // Agregue validacion por cambio de estilo, ahora puede ser null para el usuario y vera esta mensaje
  if (!result) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center justify-center gap-4 text-center min-h-[300px]">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 12h.01M12 12h.01M15 12h.01M12 7h.01M9 17h6" />
          </svg>
        </div>
        <div>
          <p className="text-base font-semibold text-gray-700">Ingresa los datos para simular</p>
          <p className="text-sm text-gray-400 mt-1">Completa el formulario y presiona Calcular</p>
        </div>
      </div>
    )
  }
  
  const { finalAmount, totalContributions, interestEarned } = result

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col gap-6">
      <h2 className="text-lg font-semibold text-gray-900">Resultado de tu simulación</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-xl p-4 flex flex-col gap-1">
          <p className="text-xs text-blue-500 font-medium">Monto final</p>
          <p className="text-xl font-bold text-blue-700">{formatCurrency(finalAmount)}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4 flex flex-col gap-1">
          <p className="text-xs text-green-500 font-medium">Interés ganado</p>
          <p className="text-xl font-bold text-green-700">{formatCurrency(interestEarned)}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-1">
          <p className="text-xs text-gray-500 font-medium">Total aportado</p>
          <p className="text-xl font-bold text-gray-700">{formatCurrency(totalContributions)}</p>
        </div>
      </div>

      <div className="overflow-auto max-h-64 rounded-xl border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Mes</th>
              <th className="text-right px-4 py-3 text-gray-500 font-medium">Interés</th>
              <th className="text-right px-4 py-3 text-gray-500 font-medium">Balance</th>
            </tr>
          </thead>
          <tbody>
            {result.monthlyBreakdown.map((row) => (
              <tr key={row.month} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-2 text-gray-600">{row.month}</td>
                <td className="px-4 py-2 text-right text-green-600">{formatCurrency(row.interest)}</td>
                <td className="px-4 py-2 text-right font-medium text-gray-800">{formatCurrency(row.balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}