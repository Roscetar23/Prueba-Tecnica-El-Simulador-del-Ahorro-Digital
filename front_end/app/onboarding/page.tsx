import { OnboardingForm } from "@/modules/onboarding/components/OnboardingForm"
// Esta vista reenderiza todo el modulo de onboarding
export default function OnboardingPage() {
  return (
    <main className="max-w-xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Abre tu cuenta</h1>
        <p className="text-gray-500 mt-2">
          Registra tu intención de apertura en menos de 2 minutos
        </p>
      </div>
      <OnboardingForm />
    </main>
  )
}