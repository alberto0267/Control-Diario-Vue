<script setup>
import "../styles/header.css";

const props = defineProps({
  nombre: String,
});
</script>

<template>
  <header class="dashboard-header">
    <img src="../assets/logo3d.png" alt="Logo" class="logo" />
    <div class="user-info">
      <span>Hola, {{ nombre }}</span>
      <img src="../assets/avatar.png" alt="User" class="user-icon" />
    </div>
  </header>
</template>

<style scoped></style>
