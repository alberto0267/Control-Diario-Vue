<script setup>
import "../styles/footer.css";
import { useRouter } from "vue-router";

const router = useRouter();

const sugerencias = () => router.push("/sugerencias");
</script>

<template>
  <footer class="dashboard-footer">
    <a href="#">Cookies</a>
    <a href="#" @click="sugerencias">Sugerencias</a>
    <a href="#">Privacidad</a>
  </footer>
</template>

<style scoped></style>
