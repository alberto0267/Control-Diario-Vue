<script setup>
import "../styles/dashboardManager.css";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="dashboard">
    <Header />

    <main class="dashboard-grid">
      <div class="dashboard-row">
        <div class="dashboard-item">
          <img src="../assets/fichaje.png" alt="Fichaje" />
          <span>Fichaje</span>
        </div>
        <div class="dashboard-item">
          <img src="../assets/vacaciones.png" alt="Vacaciones" />
          <span>Vacaciones</span>
        </div>
      </div>

      <div class="dashboard-row center-row">
        <div class="dashboard-item">
          <img src="../assets/cajaDiaria.png" alt="Flujo de caja" />
          <span>Flujo de caja</span>
        </div>
      </div>

      <div class="dashboard-row">
        <div class="dashboard-item">
          <img src="../assets/contrato.png" alt="Contrato" />
          <span>Contrato</span>
        </div>
        <div class="dashboard-item">
          <img src="../assets/nomina.png" alt="Nomina" />
          <span>Nómina</span>
        </div>
      </div>
    </main>
  </div>
  <Footer />
</template>
