#  Simulador del Ahorro Digital

##  Descripción
Este README contiene toda la información de la prueba técnica “Aventura: El Simulador del Ahorro Digital”.

Aquí podrán leer la arquitectura que manejé, la estructura del monorepo, las técnicas y herramientas utilizadas para llegar a la solución del problema, su instalación y ejecución, y cómo funcionan las principales vistas.

##  Arquitectura

### Screaming Architecture

### Estructura del monorepo

### Por qué ISR en /products

##  Tecnologías

### Frontend
    NEXTJS
    
### Backend
    NESTJS

##  Estructura de carpetas

### Frontend
### Backend

##  Instalación y ejecución

Para este apartado solo es necesario clonar el monorepo, instalar las dependencias en ambas carpetas y ejecutar ambos proyectos. El front se visualizará en el puerto 3000 y el backend en el puerto 3001. Recomiendo primero ejecutar el backend y después el front.

### Requisitos previos

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

##  Fórmula del simulador

##  Endpoints del API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/products` | Obtener todos los productos |
| GET | `/api/products?type=ahorro` | Filtrar por tipo |
| GET | `/api/products/:id` | Obtener producto por ID |

## 🔐 reCAPTCHA simulado

## ✅ Checklist de requisitos

- [ ] Página /products con listado y filtros con debounce
- [ ] SSR/ISR en /products
- [ ] Página /simulator con validaciones y cálculo de interés
- [ ] Página /onboarding con reCAPTCHA simulado y UUID
- [ ] Microservicio NestJS reemplazando JSON locales

##  Decisiones técnicas

##  Autor
 - Oscar Javier Gomez Manrique 