# Proyecto

> **Nombre del proyecto:** Revisor Automático de Escritura Académica

## Tabla de Contenido

- [Descripción](#descripción)  
- [Características](#características)  
- [Tecnologías](#tecnologías)  
- [Estructura del repositorio](#estructura-del-repositorio)  
- [Requisitos previos](#requisitos-previos)  
- [Instalación (local)](#instalación-local)  
- [Variables de entorno](#variables-de-entorno)  
- [Scripts útiles](#scripts-útiles)  
  - [Server](#server)  
  - [Client](#client)  
  - [Raíz](#raíz-ejemplo-con-concurrently)  
- [Ejecutar con Docker](#ejecutar-con-docker)  
- [Despliegue](#despliegue)  
- [Autenticación](#autenticación)  
- [Buenas prácticas](#buenas-prácticas)  
- [Testing](#testing)  
- [Contribuir](#contribuir)  
- [Licencia](#licencia)  
- [Autor](#autor)  

## Descripción

Aplicación web Full Stack construida con el stack MERN (MongoDB, Express, React y Node.js). Este repositorio contiene el cliente (React) y el servidor (Express/Node) organizados para facilitar el desarrollo, pruebas y despliegue.

## Características

- Autenticación de usuarios (JWT / OAuth opcional)
- CRUD completo para recursos principales
- Rutas protegidas y control de roles
- Persistencia en MongoDB (Mongoose)
- Build y despliegue preparados para producción
- Tests unitarios y de integración (Jest / Supertest)

## Tecnologías

- Frontend: React, React Router, Axios, Context / Redux (opcional), Tailwind o CSS Modules
- Backend: Node.js, Express, Mongoose
- Base de datos: MongoDB (Atlas o local)
- Autenticación: JSON Web Tokens (JWT)
- Tests: Jest, React Testing Library, Supertest
- Herramientas: ESLint, Prettier, Husky (pre-commit), Docker (opcional)

## Estructura del repositorio

```
/ (raíz)
├─ /client            # Aplicación React
│  ├─ /public
│  └─ /src
│     ├─ /components
│     ├─ /pages
│     ├─ /services
│     ├─ /hooks
│     └─ index.js
├─ /server            # API Express
│  ├─ /config
│  ├─ /controllers
│  ├─ /models
│  ├─ /routes
│  ├─ /middlewares
│  └─ server.js
├─ .env.example
├─ docker-compose.yml
├─ Dockerfile (server)
├─ Dockerfile.client (opcional)
├─ package.json (raíz - scripts de conveniencia)
└─ README.md
```

## Requisitos previos

- Node.js v16+ (o LTS actual)
- npm o yarn
- MongoDB (local) o una cuenta en MongoDB Atlas
- (Opcional) Docker y Docker Compose

## Instalación (local)

1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/nombre-del-proyecto.git
cd nombre-del-proyecto
```

2. Instalar dependencias del servidor

```bash
cd server
npm install
# o yarn
```

3. Instalar dependencias del cliente

```bash
cd ../client
npm install
# o yarn
```

## Variables de entorno

Copia `.env.example` a `.env` en la carpeta `server` y añade los valores:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nombre-db
JWT_SECRET=tu_secreto_jwt
NODE_ENV=development
```

Si usas MongoDB Atlas, reemplaza `MONGODB_URI` por la cadena de conexión provista por Atlas.

## Scripts útiles

En la raíz del proyecto se pueden definir scripts convenientes que ejecuten cliente y servidor en paralelo (ej. con `concurrently`).

### Server
```bash
# desde /server
npm run dev      # inicia con nodemon en desarrollo
npm start        # inicia en modo producción
npm test         # ejecuta tests del backend
```

### Client
```bash
# desde /client
npm start        # inicia la dev server de React
npm run build    # build para producción
npm test         # tests de frontend
```

### Raíz (ejemplo con concurrently)
```bash
npm install
npm run dev      # levanta client + server en desarrollo
```

## Ejecutar con Docker

Archivo `docker-compose.yml` incluído para levantar mongo + server + client (opcional). Ejemplo:

```bash
docker-compose up --build
```

## Despliegue

- Build del cliente: `cd client && npm run build` y servir `client/build` desde Express (o desplegar en Vercel/Netlify y conectar la API por URL).
- Desplegar la API en Heroku, Render, Railway o en una VM/contener.

## Autenticación

Se recomienda implementar JWT en cabeceras `Authorization: Bearer <token>` y almacenar tokens en `httpOnly` cookies o en memoria (evitar localStorage para tokens largos si es posible).

## Buenas prácticas

- Validar y sanitizar datos entrantes (celebrate / Joi / express-validator)
- Manejar errores centralizados en middleware
- Políticas CORS bien definidas
- Logs estructurados (p.ej. Winston)
- Variables de entorno fuera del repositorio

## Testing

- Backend: Jest + Supertest para endpoints
- Frontend: React Testing Library para componentes y flujos
- Integración: tests E2E con Cypress (opcional)

## Contribuir

1. Fork y crea una rama: `feature/mi-feature` o `fix/bug`
2. Haz commits pequeños y descriptivos
3. Abre un Pull Request explicando los cambios

## Licencia

Este proyecto está bajo la licencia MIT. Ajusta según corresponda.

## Autor

- Nombre del autor / Equipo - correo@ejemplo.com
