<script setup>

import { ref } from "vue";
import "../styles/dashboard.css";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useRouter } from "vue-router";

const router = useRouter();


const fichaje = () => router.push("/fichaje");
const vacacionesEmployee = () => router.push("/vacaciones-employee");
const nominaE = () => router.push("/nomina");
const contratoE = () => router.push("/contrato");

const nombre = ref(localStorage.getItem("nombre"));
</script>

<template>
  <div class="dashboard">
    <Header :nombre="nombre" />

    <main class="dashboard-grid">

      <div class="dashboard-item" @click="fichaje">
        <img src="../assets/fichaje.png" alt="Fichaje" />
        <span>Fichaje</span>
      </div>
      <div class="dashboard-item" @click="vacacionesEmployee">
        <img src="../assets/vacaciones.png" alt="Vacaciones" />
        <span>Vacaciones</span>
      </div>
      <div class="dashboard-item" @click="nominaE">
        <img src="../assets/nomina.png" alt="Nomina" />
        <span>Nòmina</span>
      </div>
      <div class="dashboard-item" @click="contratoE">
        <img src="../assets/contrato.png" alt="Contrato" />
        <span>Contrato</span>
      </div>
    </main>
  </div>
  <Footer />
</template>
