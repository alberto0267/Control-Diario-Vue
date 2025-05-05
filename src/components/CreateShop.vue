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
      <label>Nombre del Jefe</label>
      <input type="text" class="fix" placeholder="Nombre del jefe" />

      <label>Apellidos del Jefe</label>
      <input type="text" class="fix" placeholder="Apellidos del jefe" />

      <label>Email</label>
      <input type="email" class="fix" placeholder="Email" />

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

      <label>Número de tienda</label>
      <input type="text" class="fix" placeholder="Número tienda" />

      <label>Password</label>
      <input type="password" class="fix" placeholder="Password" />

      <label>Re - Password</label>
      <input type="password" class="fix" placeholder="Re - Password" />
      <button class="send-button" type="submit">Enviar</button>
    </form>
  </div>
</template>
