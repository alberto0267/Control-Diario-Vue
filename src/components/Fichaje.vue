<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { ref, onMounted, onUnmounted } from "vue";
import "../styles/fichaje.css";
const tiempo = ref("");

const actualizarTiempo = () => {
  const now = new Date();
  tiempo.value = now.toLocaleTimeString("es-ES", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

let intervalos;

/* Esto se usa en vez de settiemOut porque  el time out lo llama una vez a menos que sea recursiva */
onMounted(() => {
  actualizarTiempo();
  intervalos = setInterval(actualizarTiempo, 1000);
});

onUnmounted(() => {
  clearInterval(intervalos);
});
</script>

<template>
  <div class="dashboard">
    <Header />
    <main>
      <div class="clock">
        {{ tiempo }}
      </div>
    </main>
  </div>
  <Footer />
</template>

<style scoped></style>
