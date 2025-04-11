<script setup>
import "../styles/dashboardAdmin.css";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="dashboard">
    <Header />
    <main class="dashboard-grid">
      <div class="dashboard-item">
        <img src="../assets/cajaDiaria.png" alt="cajaDiaria" />
        <span>Flujo de caja</span>
      </div>
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
      <div class="dashboard-item">
        <img src="../assets/VentasGeneral.png" alt="Ventas" />
        <span>Ventas</span>
      </div>
    </main>
  </div>
  <Footer />
</template>
<!-- <style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
}

.dashboard-header {
  background-color: #7b7e7e53;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 40px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 3rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  justify-items: center;
}

.dashboard-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.dashboard-item img {
  width: 60px;
  height: 60px;
  margin-bottom: 0.5rem;
  filter: brightness(0) invert(1);
}

.dashboard-item span {
  font-size: 0.9rem;
}

.dashboard-item:hover {
  transform: scale(1.05);
}
</style> -->
