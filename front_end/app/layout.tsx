import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simulador del Ahorro Digital",
  description: "Explora productos de ahorro y simula tu rentabilidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-blue-600 font-bold text-lg">
              AhorroDigital
            </Link>
            <div className="flex gap-6">
              <Link
                href="/products"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Productos
              </Link>
              <Link
                href="/simulator"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Simulador
              </Link>
              <Link
                href="/onboarding"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Abrir cuenta
              </Link>
            </div>
          </nav>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-gray-200 bg-white mt-auto">
          <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
            © 2026 AhorroDigital — Prueba técnica
          </div>
        </footer>
      </body>
    </html>
  );
}