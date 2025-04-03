<script setup>
import logo from "../assets/logo3d.png";
import "../styles/login.css";
</script>

<template>
  <div class="login-container">
    <img :src="logo" alt="Logo" class="login-logo" />

    <form class="login-box">
      <div class="login">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Email" required />

        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" required />

        <a href="#" class="forgot-link">Olvide Contraseña</a>
      </div>
      <button class="login-button" type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>
