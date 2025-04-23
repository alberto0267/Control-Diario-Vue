<script setup>
import "../styles/header.css";
import { useRouter } from "vue-router";

const router = useRouter();

const goToLobby = () => {
  router.back();
};
</script>

<template>
  <header class="dashboard-header">
    <img src="../assets/logo3d.png" alt="Logo" class="logo" @click="goToLobby" />
    <div class="user-info">
      <span>Hola, Fulano</span>
      <img src="../assets/googleIcon.png" alt="User" class="user-icon" />
    </div>
  </header>
</template>

<style scoped></style>
