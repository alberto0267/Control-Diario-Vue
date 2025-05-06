<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";

const nombre = ref(localStorage.getItem("nombre"));
</script>

<template>
  <div class="layout">
    <Header :nombre="nombre" />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, #004d5a, #00717d);
}

main {
  flex: 1;
  padding: 2rem;
}
</style>
