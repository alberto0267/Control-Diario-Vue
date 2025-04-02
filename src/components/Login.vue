<script setup>
import logo from "../assets/logo3d.png";
import "../styles/login.css";
</script>

<template>
  <div class="login-container">
    <img :src="logo" alt="Logo" class="login-logo" />

    <div class="login-box">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Value" />

      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Value" />

      <a href="#" class="forgot-link">Olvide Contraseña</a>
    </div>

    <button class="login-button">Iniciar sesión</button>
  </div>
</template>
