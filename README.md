# Simulador del Ahorro Digital

## Descripción

Este README contiene toda la información de la prueba técnica “Aventura: El Simulador del Ahorro Digital”.

Aquí podrán leer la arquitectura que manejé, la estructura del monorepo,
las técnicas y herramientas utilizadas para llegar a la solución del problema,
su instalación y ejecución, y cómo funcionan las principales vistas.

## Arquitectura

### Screaming Architecture

Para la arquitectura del frontend se implementó Screaming Architecture, ya que
es la mejor opción para proyectos modulares como esta prueba técnica.

La idea principal de esta arquitectura es que la estructura de carpetas "grite"
el dominio del negocio. Al abrir el proyecto, lo primero que se ve es `products/`,
`simulator/` y `onboarding/`, no carpetas técnicas como `components/` o `hooks/`
en la raíz. Esto hace que cualquier desarrollador entienda de qué trata la
aplicación sin leer una sola línea de código.

Cada módulo es completamente independiente y contiene todo lo que necesita para
funcionar: sus propios componentes, hooks, tipos y utilidades. Si mañana se
elimina el módulo `simulator/`, el resto de la aplicación no se ve afectada.

Para el código reutilizable entre módulos existe una carpeta `shared/` que
centraliza componentes base, hooks genéricos como `useDebounce`, utilidades
como `formatCurrency` y `generateUUID`, y tipos comunes. La regla es simple:
si algo lo usa más de un módulo, va a `shared/`.

### Estructura del monorepo

pruebaTecnica/
├── front_end/
├── back_end/
└── README.md

### Por qué ISR en /products

Para la implementación de ISR planteé dos salidas necesarias antes de empezar
con la programación del proyecto. La prueba indicaba que se podía implementar
un JSON con los datos locales o agregar el plus con backend.

En primera instancia implementé los datos en un JSON local. La mejor forma de
manejar este escenario era con ISR, ya que al no estar en una base de datos,
la información solo cambia si el desarrollador manipula los datos directamente,
por lo que implementar SSR no tendría ningún beneficio real.

Luego de esto hice la implementación del punto plus con el backend en NestJS.
Conectado a un backend real de producción con base de datos, la mejor opción
sería SSR, ya que siempre se requieren los datos más actualizados del servidor
con cada petición. Sin embargo, el backend actual no tiene una base de datos
conectada y la información sigue siendo estática, por lo que se mantuvo ISR
como estrategia de renderizado.

En la presentación de la prueba técnica se explicará este punto con mayor detalle.

## Tecnologías

### Frontend

    NEXTJS

### Backend

    NESTJS

## Estructura de carpetas

### Frontend

```
front_end/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ ├── globals.css
│ ├── products/
│ │ └── page.tsx
│ ├── simulator/
│ │ └── page.tsx
│ └── onboarding/
│ └── page.tsx
├── modules/
│ ├── products/
│ │ ├── components/
│ │ │ ├── ProductCard.tsx
│ │ │ ├── ProductList.tsx
│ │ │ └── FilterBar.tsx
│ │ ├── hooks/
│ │ │ └── useProductFilter.ts
│ │ ├── types/
│ │ │ └── product.ts
│ │ └── data/
│ │ └── products.json
│ ├── simulator/
│ │ ├── components/
│ │ │ ├── SimulatorForm.tsx
│ │ │ └── SimulatorResult.tsx
│ │ ├── hooks/
│ │ │ └── useSimulator.ts
│ │ ├── types/
│ │ │ └── simulation.ts
│ │ └── utils/
│ │ └── calculateInterest.ts
│ └── onboarding/
│ ├── components/
│ │ ├── OnboardingForm.tsx
│ │ └── SuccessMessage.tsx
│ ├── hooks/
│ │ └── useOnboarding.ts
│ ├── types/
│ │ └── onboarding.ts
│ └── utils/
│ └── recaptchaValidator.ts
├── shared/
│ ├── components/
│ │ ├── Button.tsx
│ │ └── Input.tsx
│ ├── hooks/
│ │ └── useDebounce.ts
│ ├── types/
│ │ └── common.ts
│ └── utils/
│ ├── formatCurrency.ts
│ └── generateUUID.ts
└── lib/
└── api.ts
```

### Backend

```
back_end/
├── src/
│ ├── app.module.ts
│ ├── main.ts
│ └── products/
│ ├── interfaces/
│ │ └── product.interface.ts
│ ├── products.controller.ts
│ ├── products.module.ts
│ └── products.service.ts
├── nest-cli.json
├── tsconfig.json
└── package.json
```

## Instalación y ejecución

Para este apartado solo es necesario clonar el monorepo,
instalar las dependencias en ambas carpetas y ejecutar ambos proyectos.
El front se visualizará en el puerto 3000 y el backend en el puerto 3001.
Recomiendo primero ejecutar el backend y después el front.

### Backend

```bash
cd back_end
pnpm install
pnpm run start:dev
```

### Frontend

```bash
cd front_end
pnpm install
pnpm run dev
```

## Fórmula del simulador

Utilice la fórmula de **interés compuesto con aportes mensuales**:

### Variables

| Variable | Descripción                         |
| -------- | ----------------------------------- |
| `M`      | Monto final acumulado               |
| `P`      | Monto inicial (capital semilla)     |
| `A`      | Aporte mensual                      |
| `r`      | Tasa mensual = Tasa E.A. / 12 / 100 |
| `n`      | Número de meses                     |

### Derivados

| Concepto       | Cálculo             |
| -------------- | ------------------- |
| Total aportado | `P + (A × n)`       |
| Interés ganado | `M - (P + (A × n))` |

### Ejemplo

Con un monto inicial de **$1.000.000**, un aporte mensual de **$200.000**,
una tasa E.A. del **4.5%** y un plazo de **12 meses**:

- Tasa mensual: `4.5 / 12 / 100 = 0.00375`
- Monto final: **$3.469.231**
- Total aportado: **$3.400.000**
- Interés ganado: **$69.231**

### Implementación

La lógica está en `modules/simulator/utils/calculateInterest.ts`.
Seleccione un enfoque iterativo mes a mes en lugar de la fórmula directa,
Para mostrar en la tabla de resultados las ganancias mensuales de los usuarios

## Endpoints del API

| Método | Endpoint                    | Descripción                 |
| ------ | --------------------------- | --------------------------- |
| GET    | `/api/products`             | Obtener todos los productos |
| GET    | `/api/products?type=ahorro` | Filtrar por tipo            |
| GET    | `/api/products/:id`         | Obtener producto por ID     |

## 🔐 reCAPTCHA simulado

Dado que la prueba técnica no requería integrar un servicio real de reCAPTCHA,
se implementó una validación simulada para cumplir con el requisito funcional.

### ¿Cómo funciona?

El formulario de onboarding incluye un campo de verificación que el usuario
debe completar. La validación es simple: si el token ingresado es exactamente
`OK`, la solicitud se procesa. De lo contrario, se muestra un error visual
indicando que el token es inválido.

### Implementación

La lógica está en `modules/onboarding/utils/recaptchaValidator.ts`:

### En producción

En un entorno productivo esto se reemplazaría por **Google reCAPTCHA v3**,
donde el cliente obtiene un token del servicio de Google y el backend lo
valida contra la API de reCAPTCHA antes de procesar la solicitud.

## ✅ Checklist de requisitos

- [x] Página /products con listado y filtros con debounce
- [x] SSR/ISR en /products
- [x] Página /simulator con validaciones y cálculo de interés
- [x] Página /onboarding con reCAPTCHA simulado y UUID
- [x] Microservicio NestJS reemplazando JSON locales

## Decisiones técnicas

## Autor

- Oscar Javier Gomez Manrique
