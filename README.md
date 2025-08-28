# JepiTravel - Dashboard Booking Engine para Tours y Hoteles

JepiTravel es una plataforma que permite a las agencias de tours y hoteles promocionar y vender sus servicios a través de WhatsApp, con una interfaz visual atractiva que simula un teléfono móvil y se adapta a cualquier dispositivo.

## Características implementadas

- 📱 Vista previa de Tours y Hoteles con diseño de teléfono móvil
- 🎨 Temas personalizables con múltiples colores para cada agencia
- 💬 Integración directa con WhatsApp para reservas
- 📊 Dashboard completo para gestionar tours, hoteles, agencias y estadísticas
- 🔒 Sistema de autenticación para usuarios y agencias
- 📱 Diseño responsive para escritorio y móvil
- 💰 Sistema de suscripciones con diferentes planes
- 🏨 Gestión de hoteles con habitaciones y amenidades
- 🧳 Gestión de tours con itinerarios detallados y fechas disponibles
- 🖼️ Sistema de carga y gestión de imágenes
- 💲 Integración con sistemas de pago (Stripe, PayPal)

## Estructura del proyecto

- `/prisma` - Esquema de la base de datos y seed de datos iniciales
- `/src/app` - Rutas y páginas de la aplicación (Next.js App Router)
  - `/api` - API endpoints de Next.js para tours, hoteles, agencias, autenticación, etc.
  - `/[slug]` - Página pública de agencia de tours y hoteles
  - `/dashboard` - Dashboard para gestión de agencias, tours y hoteles
  - `/login` - Página de inicio de sesión
  - `/register` - Página de registro
  - `/checkout` - Página de pago y checkout
  - `/pricing` - Página de planes y precios
- `/src/components` - Componentes reutilizables
  - `/ui` - Componentes de interfaz básicos
  - `/marketing` - Componentes para la página de marketing
  - `TourPhonePreview.tsx` - Componente de vista previa de tours
  - `HotelPhonePreview.tsx` - Componente de vista previa de hoteles
  - `TourForm.tsx` - Formulario para creación y edición de tours
  - `TailwindDatePicker.tsx` - Componente personalizado de selector de fechas
- `/src/contexts` - Contextos de React (Auth, etc.)
- `/database` - Scripts SQL para configuración inicial
- `/src/middleware` - Middleware para autenticación y protección de rutas
- `/src/utils` - Utilidades y funciones auxiliares
- `/src/lib` - Bibliotecas y configuraciones
- `/src/providers` - Proveedores de contexto para React

## Modelos de datos implementados

- **User**: Gestión de usuarios, administradores y propietarios de agencias
- **Agency**: Información de agencias de viajes con personalización de temas
- **Tour**: Tours con precios, descripciones, imágenes, itinerarios y fechas
- **Hotel**: Hoteles con información, amenidades, ubicación y políticas
- **Room**: Habitaciones de hoteles con precios, capacidad y amenidades
- **Booking**: Sistema de reservas para tours y hoteles
- **Image**: Gestión de imágenes para tours, hoteles y habitaciones
- **Theme**: Temas visuales personalizables para agencias
- **Plan**: Planes de suscripción con diferentes características
- **Subscription**: Suscripciones de usuarios a planes específicos

## Requisitos previos

- Node.js 18 o superior
- SQL Server (local o en la nube)
- Cuenta de WhatsApp

## Configuración inicial

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/jepitravel.git
cd jepitravel
```

2. Instala las dependencias:
```bash
npm install
npm install next-auth@beta @auth/prisma-adapter bcrypt uuid mssql prisma @prisma/client
npm install tailwindcss postcss autoprefixer
# o
yarn add next-auth@beta @auth/prisma-adapter bcrypt uuid mssql prisma @prisma/client
yarn add -D tailwindcss postcss autoprefixer
```

> **Nota importante**: Este proyecto utiliza Next Auth v5 (versión beta), que cambió algunas APIs importantes. Si encuentras errores relacionados con NextAuth, asegúrate de instalar la versión beta como se indica arriba.

3. Configura el archivo `.env` con tus credenciales de base de datos:
```
DATABASE_URL="sqlserver://localhost:1433;database=JepiTravel;user=sa;password=TuPassword;trustServerCertificate=true"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="genera_una_clave_secreta_aqui"
JWT_SECRET="genera_otra_clave_secreta_aqui"
```

4. Ejecuta el script SQL de configuración:
   - Abre SQL Server Management Studio
   - Ejecuta el archivo `database/setup.sql`
   - Esto creará la base de datos, tablas y temas predeterminados

5. Genera los tipos de Prisma:
```bash
npx prisma generate
```

## Ejecución del proyecto

Para ejecutar en modo desarrollo:
```bash
npm run dev
# o
yarn dev
```

Para construir y ejecutar en producción:
```bash
npm run build
npm start
# o
yarn build
yarn start
```

## Flujo de uso

1. **Registro de agencia**:
   - Un usuario se registra y crea una agencia
   - Selecciona un tema y personaliza sus datos

2. **Creación de tours y/o hoteles**:
   - La agencia crea tours con imágenes, descripciones, itinerarios y precios
   - La agencia crea hoteles con habitaciones, amenidades e imágenes
   - Puede destacar tours y hoteles específicos

3. **Compartir enlace**:
   - La agencia comparte su enlace personalizado por redes sociales
   - Formato: `https://jepitravel.com/[nombre-agencia]`

4. **Cliente explora y reserva**:
   - El cliente visualiza los tours y hoteles en formato de teléfono móvil
   - Hace clic en "Reservar por WhatsApp" o procede al checkout en línea

## Solución a problemas comunes

### Errores de TypeScript

Si encuentras errores de tipos o definiciones de módulos, prueba lo siguiente:

1. Asegúrate de haber instalado todas las dependencias:
```bash
npm install next-auth@beta @auth/prisma-adapter bcrypt uuid mssql prisma @prisma/client
npm install tailwindcss postcss autoprefixer
```

2. Regenera los tipos de Prisma:
```bash
npx prisma generate
```

3. Si persisten los errores de tipos, puedes ignorarlos temporalmente mientras desarrollas:
```bash
npm run dev --ts-ignore
```

### Errores de componentes

Si encuentras errores relacionados con los componentes de la UI:

1. Asegúrate de tener instaladas las dependencias necesarias:
```bash
npm install tailwindcss postcss autoprefixer
```

2. Verifica que los componentes se importan desde la ruta correcta.

3. Consulta la documentación de Tailwind CSS si tienes dudas sobre el estilo:
```
https://tailwindcss.com/docs
```

### Incompatibilidad entre versiones de componentes

Este proyecto utiliza componentes personalizados con Tailwind CSS para evitar problemas de compatibilidad entre librerías:

1. Utiliza los componentes personalizados incluidos en:
```
src/components/TailwindDatePicker.tsx
```

2. Importa el componente en tu archivo:
```typescript
import TailwindDatePicker from '@/components/TailwindDatePicker';
```

3. Utilízalo de la siguiente manera:
```typescript
<TailwindDatePicker 
  label="Fecha de entrada" 
  value={checkIn} 
  onChange={(newValue: Date | null) => setCheckIn(newValue)} 
  format="dd/MM/yyyy" 
  fullWidth
/>
```

Este componente personalizado es compatible con el resto del proyecto y ofrece una funcionalidad similar a los componentes de date picker.

### Errores de NextAuth

Si encuentras errores con NextAuth, es posible que estés usando una versión incompatible:

1. Asegúrate de usar Next Auth v5 (beta):
```bash
npm install next-auth@beta
```

2. Verifica que estés importando desde 'next-auth/next':
```typescript
import { auth } from 'next-auth/next';

// En lugar de
// import { getServerSession } from 'next-auth';
```

3. El uso correcto en los archivos de API es:
```typescript
const session = await auth();
```

### Errores de conexión a la base de datos

1. Verifica que la cadena de conexión en `.env` sea correcta
2. Asegúrate de que SQL Server esté en ejecución
3. Verifica que el usuario tenga permisos suficientes
4. Comprueba que la base de datos exista (ejecuta `database/setup.sql`)

### Errores de API

1. Revisa los logs del servidor en la consola
2. Verifica que NextAuth esté configurado correctamente
3. Asegúrate de que las rutas API estén correctamente definidas

## Licencia

Este proyecto está licenciado bajo [MIT License](LICENSE).

## Contacto

Para soporte o consultas: jepitravel@ejemplo.com
