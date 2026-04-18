import Link from "next/link";

const FEATURES = [
  {
    href: "/products",
    title: "Productos de ahorro",
    description: "Explora nuestras cuentas y encuentra la que más se adapta a ti.",
    cta: "Ver productos",
    color: "bg-blue-50 border-blue-100 hover:border-blue-300",
    ctaColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    href: "/simulator",
    title: "Simulador de rentabilidad",
    description: "Calcula cuánto podrías ganar con tu ahorro mes a mes.",
    cta: "Simular ahora",
    color: "bg-green-50 border-green-100 hover:border-green-300",
    ctaColor: "bg-green-600 hover:bg-green-700",
  },
  {
    href: "/onboarding",
    title: "Abre tu cuenta",
    description: "Registra tu intención de apertura en menos de 2 minutos.",
    cta: "Comenzar",
    color: "bg-purple-50 border-purple-100 hover:border-purple-300",
    ctaColor: "bg-purple-600 hover:bg-purple-700",
  },
]

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col items-center gap-16">

      <div className="text-center flex flex-col gap-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Bienvenido al Simulador del Ahorro Digital
        </h1>
        <p className="text-lg text-gray-500">
          Descubre productos financieros, simula tu rentabilidad y registra tu apertura de cuenta de forma segura.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {FEATURES.map((f) => (
          <div
            key={f.href}
            className={`rounded-2xl border p-8 flex flex-col gap-4 transition-colors ${f.color}`}
          >
            <h2 className="font-semibold text-gray-900 text-lg">{f.title}</h2>
            <p className="text-sm text-gray-500 leading-relaxed flex-1">{f.description}</p>
            <Link
              href={f.href}
              className={`text-sm text-white font-medium px-4 py-2 rounded-lg text-center transition-colors ${f.ctaColor}`}
            >
              {f.cta}
            </Link>
          </div>
        ))}
      </div>

    </div>
  )
}