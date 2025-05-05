<script setup>
import "../styles/header.css";
import { useRouter } from "vue-router";

const router = useRouter();

const goToLobby = () => {
  router.back();
};

const toggleDropdown = () => {
  const dropdown = document.querySelector(".dropdown-menu");
  if (dropdown) {
    dropdown.classList.toggle("show");
  }
};

const logout = () => {
  console.log("Cerrando sesión...");
  router.push("/login");
};
</script>

<template>
  <header class="dashboard-header">
    <img
      src="../assets/logo3d.png"
      alt="Logo"
      class="logo"
      @click="goToLobby"
    />
    <div class="user-info" @click="toggleDropdown">
      <span>Hola, Fulano</span>
      <img src="../assets/googleIcon.png" alt="User" class="user-icon" />
      <div class="dropdown-menu">
        <p>Nombre: Fulano</p>
        <p>Tienda: FPeuroformac</p>
        <button @click.stop="logout">Cerrar sesión</button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
