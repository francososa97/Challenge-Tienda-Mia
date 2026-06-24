# 🛒 Challenge Tienda Mia — E-commerce Full Stack

Solución al challenge técnico **Tienda Mia**: una aplicación de **e-commerce** con backend de API REST y un frontend con catálogo y **dashboard** de métricas.

## 🧱 Arquitectura

Monorepo con backend y frontend separados:

```
Challenge Tienda Mia/
├── BackEnd/my-ecommerce-backend/    # API REST (Node + Express + TypeScript + MongoDB)
└── FrontEnd/tienda-mia-challenge/   # SPA (React + TypeScript + MUI)
```

## 🛠️ Stack

**Backend**
- Node.js + **Express** + **TypeScript**
- **MongoDB** con Mongoose
- CORS + body-parser

**Frontend**
- **React** + **TypeScript** (Create React App)
- **MUI** (Material UI) + styled-components + react-bootstrap
- **axios** para consumir la API
- **react-router-dom** para navegación
- **recharts** para el dashboard de métricas
- **sweetalert2** para notificaciones

## ▶️ Cómo correrlo

**Backend**
```bash
cd "BackEnd/my-ecommerce-backend"
npm install
npm start          # ts-node src/app.ts
```
Configurar la conexión a MongoDB mediante variables de entorno antes de iniciar.

**Frontend**
```bash
cd "FrontEnd/tienda-mia-challenge"
npm install
npm start          # http://localhost:3000
```

## ✨ Funcionalidades

- Catálogo de productos del e-commerce
- Operaciones CRUD contra la API
- Dashboard con visualización de datos (recharts)
- Feedback de UI con SweetAlert2

---

> Resuelto por [Franco Sosa](https://github.com/francososa97) como challenge técnico.
