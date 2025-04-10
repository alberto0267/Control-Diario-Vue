<script setup>
import "../styles/suggets.css";
</script>

<template>
  <div class="form-container">
    <img src="../assets/Logo.png" alt="Logo" class="form-logo" />
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
</template>
