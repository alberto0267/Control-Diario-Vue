<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import "../styles/create.css";

const tipoTienda = ref("");
const otros = ref(false);

const router = useRouter();

const goToIndex = () => router.push("/");
</script>

<template>
  <div class="form-container">
    <img
      src="../assets/Logo.png"
      alt="Logo"
      class="form-logo"
      @click="goToIndex"
    />

    <form class="form-box">
      <label>Nombre de tienda</label>
      <input type="text" placeholder="Nombre del jefe" />

      <label>Responsable</label>
      <input type="text" placeholder="Apellidos del jefe" />

      <label>Email</label>
      <input type="email" placeholder="Email de Empresa" />

      <label>Tipo de tienda que trabajas</label>
      <select id="tipoTienda" v-model="tipoTienda">
        <option value="farmacia">Farmacia</option>
        <option value="supermercado">Supermercado</option>
        <option value="abasto">Abasto</option>
        <option value="otros">Otros</option>
      </select>
      <div v-if="tipoTienda === 'otros'" class="other-shop">
        <label>Especifica el tipo de tienda</label>
        <input type="text" placeholder="Especificar..." id="otros" />
      </div>

      <label>Número de tienda (si aplica)</label>
      <input type="text" placeholder="Número tienda" />

      <label>Password</label>
      <input type="password" placeholder="Password" />

      <label>Re - Password</label>
      <input type="password" placeholder="Re - Password" />
      <button class="send-button" type="submit">Enviar</button>
    </form>
  </div>
</template>
