<script setup>
import "../styles/suggets.css";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goToIndex = () => router.push("/");
</script>

<template>
  <Header />
  <div class="form-container">
    <img
      src="../assets/Logo.png"
      alt="Logo"
      class="form-logo"
      @click="goToIndex"
    />
    <h2>Sugerencias</h2>
    <p>
      Las sugerencias pueden ser anonimas o con tu nombre, tus comentarios son
      valiosos para mejorar nuestra aplicacacion y facilitar aunque sea un poco
      tu trabajo.Gracias
    </p>
    <form class="form-box">
      <label>Nombre</label>
      <input type="text" placeholder="Nombre" />

      <label>Email</label>
      <input type="email" placeholder="Email" />

      <label for="">Sugerencias</label>
      <textarea name="Sugerencia" id="" rows="20"></textarea>

      <button type="submit">Enviar</button>
    </form>
  </div>
  <Footer />
</template>
