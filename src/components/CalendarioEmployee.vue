<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import "../styles/calendario.css";
</script>

<template>
  <Header />
  <main>
    <div class="container">
      <VCalendar class="calendario" :rows="2" />
      <div class="container-info">
        <h2>Vacaciones 🌄</h2>
        <ol>
          Mes
          <li>Fecha inicio:</li>
          <li>Fecha Fin:</li>
        </ol>
      </div>
    </div>
  </main>
  <Footer />
</template>
