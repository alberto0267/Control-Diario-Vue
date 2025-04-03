<script setup>
import logo from "./assets/logo.png";
import "./styles/login.css";
import Login from "./components/Login.vue";

// Esto es para maquetar nada mas, luego se le tiene que meter pinia y view router
import DashboardAdmind from "./components/DashboardAdmin.vue";
</script>

<template>
  <!-- <Login /> -->
  <DashboardAdmind />
</template>
