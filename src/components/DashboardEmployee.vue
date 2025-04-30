<script setup>
import { ref } from "vue";
import "../styles/DashboardEmployee.css";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
const nombre = ref(localStorage.getItem("nombre"));
</script>

<template>
  <div class="dashboard">
    <Header :nombre="nombre" />

    <main class="dashboard-grid">
      <div class="dashboard-item">
        <img src="../assets/fichaje.png" alt="Fichaje" />
        <span>Fichaje</span>
      </div>
      <div class="dashboard-item">
        <img src="../assets/vacaciones.png" alt="Vacaciones" />
        <span>Vacaciones</span>
      </div>
      <div class="dashboard-item">
        <img src="../assets/nomina.png" alt="Nomina" />
        <span>Nòmina</span>
      </div>
      <div class="dashboard-item">
        <img src="../assets/contrato.png" alt="Contrato" />
        <span>Contrato</span>
      </div>
    </main>
  </div>
  <Footer />
</template>
