<script setup>
import Calendario from "vue-cal";
import "vue-cal/dist/vuecal.css";
import { ref, onMounted } from "vue";

// ID falso simulado del empleado logueado
const idEmpleadoActual = 1;

const eventos = ref([]);

// onMounted(async () => {
//   try {
//     const res = await fetch("/vacaciones.json"); // Llama al JSON en /public
//     const data = await res.json();

//     // Filtra los eventos que correspondan al empleado actual
//     eventos.value = data.filter(
//       (evento) => evento.idEmpleado === idEmpleadoActual
//     );
//   } catch (error) {
//     console.error("Error cargando vacaciones:", error);
//   }
// });
</script>

<template>
  <div class="calendario-container">
    <h2 class="titulo">Vacaciones</h2>
    <Calendario locale="es" :events="eventos" available-views="month" />
  </div>
</template>

<style scoped>
/* .calendario-container {
  padding: 2rem;
  background: #ffffff;
  border-radius: 1rem;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.titulo {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #333;
} */
</style>
