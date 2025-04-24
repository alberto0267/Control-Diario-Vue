<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// import
import "../styles/create.css";

const nombre = ref("");
const email = ref("");
const numeroEmpleado = ref("");
const tipoTienda = ref("");
const numeroTienda = ref("");
const password = ref("");
const rePassword = ref("");

const otros = ref("");

const router = useRouter();
/* redirigir
::IMPORT  */
const goToIndex = () => router.push("/");

function enviarForm(e) {
  e.preventDefault();

  if (password.value !== rePassword.value) {
    //FIXME:
    //Aqui el alert se debe pintar con un cuadro alrededor  rojo que no permita avanzar un alert es feo.
    alert("Las contraseñas no coinciden");
    return;
  } else {
    const tipoFinal =
      tipoTienda.value === "otros" ? otros.value : tipoTienda.value;
    fetch("http://localhost:8000/api/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre.value,
        email: email.value,
        numero_empleado: parseInt(numeroEmpleado.value),
        numero_tienda: parseInt(numeroTienda.value),
        tipo_de_tienda: tipoFinal,
        password: password.value,
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Algo falló");
        return response.json();
      })
      .then((data) => {
        console.log("mensaje del servidor", data);
        localStorage.setItem("token", data.token);
        router.push("/");
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }
}
</script>

<template>
  <div class="form-container">
    <img
      src="../assets/Logo.png"
      alt="Logo"
      class="form-logo"
      @click="goToIndex"
    />

    <form class="form-box" @submit.prevent="enviarForm">
      <label>Nombre</label>
      <input type="nombre" placeholder="Nombre" v-model="nombre" />

      <label>Email</label>
      <input type="email" placeholder="Email" v-model="email" />

      <label>Número de empleado</label>
      <input
        type="text"
        placeholder="Número empleado"
        v-model="numeroEmpleado"
      />

      <label>Tipo de tienda que trabajas</label>
      <select id="tipoTienda" v-model="tipoTienda">
        <option value="farmacia">Farmacia</option>
        <option value="supermercado">Supermercado</option>
        <option value="abasto">Abasto</option>
        <option value="otros">Otros</option>
      </select>
      <div v-if="tipoTienda === 'otros'" class="other-shop">
        <label>Especifica el tipo de tienda</label>
        <input
          type="text"
          placeholder="Especificar..."
          id="otros"
          v-model="otros"
        />
      </div>
      <label>Número de tienda</label>
      <input type="text" placeholder="Número tienda" v-model="numeroTienda" />

      <label>Password</label>
      <input type="password" placeholder="Password" v-model="password" />

      <label>Re - Password</label>
      <input type="password" placeholder="Re - Password" v-model="rePassword" />
      <button class="send-button" type="submit">Enviar</button>
    </form>
  </div>
</template>
