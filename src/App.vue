<script setup>
import logo from "./assets/logo.png";
// import Create from "./components/CreateAccount.vue";
// import Login from "./components/Login.vue";
// Esto es para maquetar nada mas, luego se le tiene que meter pinia y view router
// import DashboardAdmind from "./components/DashboardAdmin.vue";
// import DashboardManager from "./components/DashboardManager.vue";
// import DashboardEmployee from "./components/DashboardEmployee.vue";
// import Suggets from "./components/Suggets.vue";
import Fichaje from "./components/Fichaje.vue";
</script>

<template>
  <!-- <Create /> -->
  <!-- <Login /> -->
  <!-- <DashboardAdmind /> -->
  <!-- <DashboardManager /> -->
  <!-- <DashboardEmployee /> -->
  <!-- <Suggets /> -->
  <Fichaje />
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
