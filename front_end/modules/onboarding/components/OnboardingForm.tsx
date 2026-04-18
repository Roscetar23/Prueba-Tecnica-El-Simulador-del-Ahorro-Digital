'use client'

import { Input } from '@/shared/components/input'
import { Button } from '@/shared/components/Button'
import { useOnboarding } from '../hooks/useOnboarding'
import { SuccessMessage } from './SuccessMessage'

//Formulario completo de rrgistro, Manejo de todos los componentes reenderizados

export function OnboardingForm() {
  const { values, errors, result, isLoading, handleChange, handleSubmit, handleReset } =
    useOnboarding()

  if (result) {
    return <SuccessMessage result={result} onReset={handleReset} />
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col gap-6">
      <h2 className="text-lg font-semibold text-gray-900">Datos personales</h2>

      <Input
        label="Nombre completo"
        type="text"
        placeholder="Ej: Juan Pérez"
        value={values.name}
        onChange={(e) => handleChange('name', e.target.value)}
        error={errors.name}
      />

      <Input
        label="Número de documento"
        type="text"
        placeholder="Ej: 1234567890"
        value={values.document}
        onChange={(e) => handleChange('document', e.target.value)}
        error={errors.document}
      />

      <Input
        label="Correo electrónico"
        type="email"
        placeholder="Ej: juan@correo.com"
        value={values.email}
        onChange={(e) => handleChange('email', e.target.value)}
        error={errors.email}
      />

      <div className="flex flex-col gap-1">
        <Input
          label="Verificación reCAPTCHA"
          type="text"
          placeholder='Escribe "OK" para continuar'
          value={values.recaptchaToken}
          onChange={(e) => handleChange('recaptchaToken', e.target.value)}
          error={errors.recaptchaToken}
        />
        <p className="text-xs text-gray-400">
          Campo simulado — escribe exactamente <span className="font-mono font-semibold">OK</span> para validar
        </p>
      </div>

      <Button onClick={handleSubmit} isLoading={isLoading} className="w-full">
        Enviar solicitud
      </Button>
    </div>
  )
}