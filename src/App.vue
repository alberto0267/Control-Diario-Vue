<script setup>
import logo from "./assets/logo.png";

import Login from "./components/Login.vue";

// Esto es para maquetar nada mas, luego se le tiene que meter pinia y view router
import DashboardAdmind from "./components/DashboardAdmin.vue";
</script>

<template>
  <!-- <Login /> -->
  <DashboardAdmind />
</template>
<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #1c4a50, #2d7078);
  font-family: "Segoe UI", sans-serif;
}
</style>
