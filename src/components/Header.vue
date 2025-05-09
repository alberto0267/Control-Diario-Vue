<script setup>
import "../styles/header.css";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => router.back();

const nombre = ref("");
const tienda = ref("");
const mostrarMenu = ref(false);

onMounted(() => {
  nombre.value = localStorage.getItem("nombre") || "Usuario";
  tienda.value = localStorage.getItem("tienda") || "Sin tienda";
});

const toggleMenu = () => {
  mostrarMenu.value = !mostrarMenu.value;
};

const logout = () => {
  localStorage.clear();
  router.replace("/");
  location.reload();
};
</script>


<template>
  <header class="dashboard-header">
    <img src="../assets/logo3d.png" alt="Logo" class="logo" @click="goBack" />

    <div class="user-info" @click="toggleMenu">
      <span class="nombre-usuario">Hola, {{ nombre }}</span>
      <img src="../assets/avatar.png" alt="User" class="user-icon" />

      <div v-if="mostrarMenu" class="dropdown">
        <img src="../assets/avatar.png" alt="Perfil" class="dropdown-avatar" />
        <p class="dropdown-nombre">{{ nombre }}</p>
        <p class="dropdown-tienda">{{ tienda }}</p>
        <button @click="logout" class="logout-button">Cerrar sesión</button>
      </div>
    </div>
  </header>
</template>

