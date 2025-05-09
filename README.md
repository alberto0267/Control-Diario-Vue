# 🕒 Control Diario

**Control Diario** es una aplicación web diseñada para pequeñas empresas como farmacias y comercios minoristas. Permite llevar el control de fichajes, nóminas y vacaciones del personal de forma eficiente, legal y digital.

![Logo](./src/assets/logo3d.png)

---

## 🚀 Funcionalidades principales

- ✅ Inicio de sesión para empleados, managers y admins
- ⏱️ Registro de fichajes de entrada y salida
- 📄 Descarga de contrato y nómina en PDF
- 📆 Calendario de vacaciones
- 📊 Paneles personalizados según el rol del usuario

---

## 🧑‍💼 ¿Para quién es?

Este proyecto está pensado para:

- Farmacias
- Supermercados de barrio
- Comercios pequeños
- Tiendas locales que necesitan cumplir con la ley de control horario

---

## 🛠️ Tecnologías utilizadas

| Frontend         | Backend          |
|------------------|------------------|
| Vue 3 + Vite      | Laravel 12       |
| Vue Router        | MySQL            |
| Pinia (próximamente) | API RESTful    |
| Tailwind (opcional) | JWT Auth        |

---

## 📁 Estructura general

```bash
Control-Diario-Vue/
│
├── public/              # favicon y recursos estáticos
├── src/
│   ├── assets/          # imágenes
│   ├── components/      # Header, Footer, Dashboards, etc.
│   ├── router/          # Definición de rutas
│   ├── styles/          # CSS personalizado por componente
│   └── views/           # Páginas completas (Login, Register, etc.)
│
├── backend/             # Proyecto
```

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
