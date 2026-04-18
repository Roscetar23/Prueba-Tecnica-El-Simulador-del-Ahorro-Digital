'use client'

import { useState } from 'react'
import { validateRecaptcha } from '../utils/recaptchaValidator'
import { generateUUID } from '@/shared/utils/generateUUID'
import type { OnboardingForm, OnboardingResult } from '../types/onboarding'

// datos solicitados
interface FormErrors {
  name?: string
  document?: string
  email?: string
  recaptchaToken?: string
}
// Funcion que maneja los errores 

function validate(values: OnboardingForm): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim())
    errors.name = 'El nombre es obligatorio'

  if (!values.document.trim())
    errors.document = 'El documento es obligatorio'
  else if (!/^\d{6,12}$/.test(values.document))
    errors.document = 'El documento debe tener entre 6 y 12 dígitos'

  if (!values.email.trim())
    errors.email = 'El correo es obligatorio'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'Ingresa un correo válido'

  if (!validateRecaptcha(values.recaptchaToken))
    errors.recaptchaToken = 'Token de reCAPTCHA inválido. Escribe "OK" para continuar'

  return errors
}

// Logica de cliente para el ingreso, maneja erroes, verifica los campos y confirma el ingreso

export function useOnboarding() {
  const [values, setValues] = useState<OnboardingForm>({
    name: '',
    document: '',
    email: '',
    recaptchaToken: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [result, setResult] = useState<OnboardingResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(field: keyof OnboardingForm, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit() {
    const validationErrors = validate(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setResult({
        requestCode: generateUUID(),
        name: values.name,
      })
      setIsLoading(false)
    }, 800)
  }

  function handleReset() {
    setValues({ name: '', document: '', email: '', recaptchaToken: '' })
    setErrors({})
    setResult(null)
  }

  return { values, errors, result, isLoading, handleChange, handleSubmit, handleReset }
}