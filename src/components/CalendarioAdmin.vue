<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import "../styles/calendarioAdmin.css";
</script>

<template>
  <Header />
  <main class="container-root">
    <div class="container-form">
      <form action="/api/empleados" method="POST">
        <h2>Registro de Vacaciones</h2>

        <label for="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Nombre"
          required
        />

        <label for="numeroEmpleado">Número de Empleado</label>
        <input
          id="numeroEmpleado"
          name="numero_empleado"
          type="number"
          placeholder="Ej. 1234"
          required
        />

        <label for="fechaInicio">Fecha de Inicio</label>
        <input id="fechaInicio" name="fecha_inicio" type="date" required />

        <label for="fechaFin">Fecha de Fin</label>
        <input id="fechaFin" name="fecha_fin" type="date" />

        <button type="submit">Registrar</button>
      </form>
    </div>
    <VCalendar class="calendario" />
  </main>
  <Footer />
</template>
