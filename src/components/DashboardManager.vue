<script setup>
import { ref } from "vue";
import "../styles/dashboard.css";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const nombre = ref(localStorage.getItem("nombre"));

const flujoCaja = () => router.push("/flujo-caja");
const fichaje = () => router.push("/fichaje");
const VacacionesAdmin = () => router.push("/vacaciones-manager");
const nomina = () => router.push("/nomina");
const contrato = () => router.push("/contrato");
</script>

<template>
  <div class="dashboard">
    <Header :nombre="nombre" />

    <main class="dashboard-gridM">
      <div class="dashboard-row">
        <div class="dashboard-item" @click="fichaje">
          <img src="../assets/fichaje.png" alt="Fichaje" />
          <span>Fichaje</span>
        </div>
        <div class="dashboard-item" @click="VacacionesAdmin">
          <img src="../assets/vacaciones.png" alt="Vacaciones" />
          <span>Vacaciones</span>
        </div>
      </div>

      <div class="dashboard-row center-row">
        <div class="dashboard-item" @click="flujoCaja">
          <img src="../assets/cajaDiaria1.png" alt="Flujo de caja" />
          <span>Flujo de caja</span>
        </div>
      </div>

      <div class="dashboard-row">
        <div class="dashboard-item" @click="contrato">
          <img src="../assets/contrato.png" alt="Contrato" />
          <span>Contrato</span>
        </div>
        <div class="dashboard-item" @click="nomina">
          <img src="../assets/nomina.png" alt="Nomina" />
          <span>Nómina</span>
        </div>
      </div>
    </main>
  </div>
  <Footer />
</template>
