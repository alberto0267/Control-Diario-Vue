<script setup>
import "../styles/create.css";

import { ref } from "vue";

const tipoTienda = ref("");

const otros = ref(false);
</script>

<template>
  <div class="form-container">
    <img src="../assets/Logo.png" alt="Logo" class="form-logo" />

    <form class="form-box">
      <label>Email</label>
      <input type="email" placeholder="Email" />

      <label>Número de empleado</label>
      <input type="text" placeholder="Número empleado" />

      <label>Tipo de tienda que trabajas</label>
      <select id="tipoTienda" v-model="tipoTienda">
        <option value="farmacia">Farmacia</option>
        <option value="supermercado">Supermercado</option>
        <option value="abasto">Abasto</option>
        <option value="otros">Otros</option>
      </select>
      <div v-if="tipoTienda === 'otros'">
        <label>Especifica el tipo de tienda</label>
        <input type="text" placeholder="Especificar..." id="otros" />
      </div>
      <label>Número de tienda</label>
      <input type="text" placeholder="Número tienda" />

      <label>Password</label>
      <input type="password" placeholder="Password" />

      <label>Re - Password</label>
      <input type="password" placeholder="Re - Password" />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>
