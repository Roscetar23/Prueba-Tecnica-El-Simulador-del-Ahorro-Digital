import { SimulatorForm } from '@/modules/simulator/components/SimulatorForm'

// llamado final de pagina simulator
export default function SimulatorPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Simulador de ahorro</h1>
        <p className="text-gray-500 mt-2">
          Calcula cuánto podrías ganar con tus ahorros
        </p>
      </div>
      <SimulatorForm />
    </main>
  )
}