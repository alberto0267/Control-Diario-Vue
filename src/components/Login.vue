<script setup>
import logo from "../assets/logo3d.png";
import "../styles/login.css";
import { useRouter } from "vue-router";
import { ref } from "vue";

/* Hay que importar los routers  */

const router = useRouter();

const goToIndex = () => router.push("/");

const email = ref("");
const password = ref("");

function enviarForm(e) {
  e.preventDefault();

  fetch("http://localhost:8000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Errores de backend", errorData.errors); //IMportante
        throw new Error("Algo falla");
      }
      return response.json();
    })

    .then((data) => {
      console.log("mensaje del servidor", data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("nombre", data.user.nombre);
      const user = data.user;

      if (user.admin) {
        /* debe ser comop lo puse en routes*/
        router.push("/dashboard-admin");
      } else if (user.subadmin) {
        router.push("/dashboard-manager");
      } else {
        router.push("/dashboard-employee");
      }
    })
    .catch((error) => {
      console.error("error: ", error);
    });
}
</script>

<template>
  <div class="login-wrapper">
    <div class="login-container">
      <img :src="logo" alt="Logo" class="login-logo" @click="goToIndex" />

      <form class="login-box" @submit.prevent="enviarForm">
        <div class="login">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            v-model="email"
          />

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="password"
            required
          />

          <div class="forgot-password">
            <a href="#" class="forgot-link">¿Has olvidado la contraseña?</a>
          </div>
        </div>
        <button class="login-button" type="submit">Iniciar sesión</button>
      </form>
    </div>
  </div>
</template>

<!-- <style scoped>
/* .login-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #1c4a50, #2d7078);
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
}

.login-logo {
  width: 18rem;
}

.login-box {
  width: 100%;
  max-width: 300px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-box label {
  color: #ddd;
  font-size: 0.9rem;
}

.login-box input {
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: white;
  color: black;
  font-weight: bold;
}

.forgot-link {
  color: #c4c4c4;
  font-size: 0.85rem;
  text-decoration: none;
  margin-top: 0.5rem;
}

.login-button {
  width: 100%;
  padding: 0.8rem;
  background-color: #1a1a1a;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #333;
}

.login {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
} */
</style> -->
