import { Button } from '@/shared/components/Button'
import type { OnboardingResult } from '../types/onboarding'


interface SuccessMessageProps {
  result: OnboardingResult
  onReset: () => void
}

// Compoenete que genera un mensaje de solicitud completada 

export function SuccessMessage({ result, onReset }: SuccessMessageProps) {
  return (
    <div className="bg-white rounded-2xl border border-green-200 p-10 flex flex-col items-center gap-6 text-center">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold text-gray-900">
          ¡Solicitud registrada, {result.name}!
        </h2>
        <p className="text-gray-500 text-sm">
          Hemos recibido tu intención de apertura de cuenta. Pronto nos pondremos en contacto contigo.
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl px-6 py-4 flex flex-col gap-1 w-full">
        <p className="text-xs text-gray-400 font-medium">Código de solicitud</p>
        <p className="text-sm font-mono font-semibold text-gray-700 break-all">
          {result.requestCode}
        </p>
      </div>

      <Button variant="outline" onClick={onReset}>
        Registrar otra solicitud
      </Button>
    </div>
  )
}