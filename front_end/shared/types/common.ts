// Exporto los estados generales y indico que tipo de datos puedo recibir.

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export type Status = 'idle' | 'loading' | 'success' | 'error'