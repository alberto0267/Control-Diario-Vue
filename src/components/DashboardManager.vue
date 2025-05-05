<script setup>
import "../styles/dashboard.css";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToCaja = () => router.push("/caja");
const goToFichaje = () => router.push("/fichaje");
const goToVacaciones = () => router.push("/vacaciones");
const goToNomina = () => router.push("/nomina");
const goToContrato = () => router.push("/contrato");
</script>

<template>
  <div class="dashboard">
    <Header />

    <main class="dashboard-grid">
      <div class="dashboard-item" @click="goToFichaje">
        <img src="../assets/fichaje.png" alt="Fichaje" />
        <span>Fichaje</span>
      </div>
      <div class="dashboard-item" @click="goToVacaciones">
        <img src="../assets/vacaciones.png" alt="Vacaciones" />
        <span>Vacaciones</span>
      </div>

      <div class="dashboard-item" @click="goToCaja">
        <img src="../assets/cajaDiaria1.png" alt="Flujo de caja" />
        <span>Flujo de caja</span>
      </div>

      <div class="dashboard-item" @click="goToContrato">
        <img src="../assets/contrato.png" alt="Contrato" />
        <span>Contrato</span>
      </div>

      <div class="dashboard-item" @click="goToNomina">
        <img src="../assets/nomina.png" alt="Nomina" />
        <span>Nómina</span>
      </div>
    </main>
  </div>
  <Footer />
</template>
