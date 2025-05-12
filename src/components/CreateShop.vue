<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import "../styles/create.css";

const tipo_de_tienda = ref("");
const otros = ref("");
const nombre_tienda = ref("");
const responsable = ref("");
const email = ref("");
const numero_tienda = ref("");
const password = ref("");
const rePassword = ref("");

const router = useRouter();

const goToIndex = () => router.push("/");

function enviarForm(e) {
  e.preventDefault();

  if (password.value !== rePassword.value) {
    //FIXME:
    //Aqui el alert se debe pintar con un cuadro alrededor  rojo que no permita avanzar un alert es feo.
    alert("Las contraseñas no coinciden");
    return;
  } else {
    const tipoTiendaFinal =
      tipo_de_tienda.value === "otros" ? otros.value : tipo_de_tienda.value;

    fetch("http://localhost:8000/api/registroStore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        nombre_tienda: nombre_tienda.value,
        responsable: responsable.value,
        email: email.value,
        tipo_de_tienda: tipoTiendaFinal,
        numero_tienda: parseInt(numero_tienda.value),
        password: password.value,
      }),
    })
      /* este es el mejor fecth porque muestra el error verdadero */
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Errores del backend:", errorData.errors); // 👈 aquí verás el problema real
          throw new Error("Algo falló");
        }
        return response.json();
      })
      .then((data) => {
        console.log("mensaje del servidor", data);
        localStorage.setItem("token", data.token);
        router.push("/");
      })
      .catch((error) => {
        console.error("error: ", error);
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
      <label>Nombre de tienda</label>
      <input
        type="text"
        placeholder="Nombre del jefe"
        v-model="nombre_tienda"
        @submit.prevent="enviarForm"
      />

      <label>Responsable</label>
      <input
        type="text"
        placeholder="Nombre y apellido del jefe"
        v-model="responsable"
      />

      <label>Email</label>
      <input type="email" placeholder="Email de Empresa" v-model="email" />

      <label>Tipo de tienda que trabajas</label>
      <select id="tipoTienda" v-model="tipo_de_tienda">
        <option value="farmacia">Farmacia</option>
        <option value="supermercado">Supermercado</option>
        <option value="abasto">Abasto</option>
        <option value="otros">Otros</option>
      </select>
      <div v-if="tipo_de_tienda === 'otros'" class="other-shop">
        <label>Especifica el tipo de tienda</label>
        <input
          type="text"
          placeholder="Especificar..."
          id="otros"
          v-model="otros"
        />
      </div>


      <label>Número de tienda (si aplica)</label>
      <input type="text" placeholder="Número tienda" v-model="numero_tienda" />

      <label>Password</label>
      <input type="password" placeholder="Password" v-model="password" />

      <label>Re - Password</label>
      <input type="password" placeholder="Re - Password" v-model="rePassword" />
      <button class="send-button" type="submit">Enviar</button>
    </form>
  </div>
</template>
