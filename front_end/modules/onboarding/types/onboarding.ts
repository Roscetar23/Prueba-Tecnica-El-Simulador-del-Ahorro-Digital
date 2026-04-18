// tipos para el formulario, los ingresa el usuaio

export interface OnboardingForm {
  name: string
  document: string
  email: string
  recaptchaToken: string
}

export interface OnboardingResult {
  requestCode: string
  name: string
}