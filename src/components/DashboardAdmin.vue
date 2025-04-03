<script setup>
import "../styles/dashboardAdmin.css";
</script>

<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <img src="../assets/logo3d.png" alt="Logo" class="logo" />
      <div class="user-info">
        <span>Hola, Fulano</span>
        <img src="../assets/googleIcon.png" alt="User" class="user-icon" />
      </div>
    </header>

    <main class="dashboard-grid">
      <div class="dashboard-item">
        <img src="../assets/1.png" alt="Flujo" />
        <span>Flujo de caja</span>
      </div>
      <div class="dashboard-item">
        <img src="../assets/2.png" alt="Fichaje" />
        <span>Fichaje</span>
      </div>
      <div class="dashboard-item">
        <img src="../assets/3.png" alt="Vacaciones" />
        <span>Vacaciones</span>
      </div>
      <div class="dashboard-item">
        <img src="../assets/4.png" alt="Nómina" />
        <span>Nómina</span>
      </div>
      <div class="dashboard-item">
        <img src="../assets/5.png" alt="Contrato" />
        <span>Contrato</span>
      </div>
      <div class="dashboard-item">
        <img src="../assets/6.png" alt="Ventas" />
        <span>Ventas</span>
      </div>
    </main>
  </div>
</template>
