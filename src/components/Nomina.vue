<script setup>
import { ref } from "vue";
import "../styles/nomina.css";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const nombre = ref(localStorage.getItem("nombre") || "Usuario");
const tienda = ref(localStorage.getItem("tienda") || "Sin tienda");

const nominaContenido = ref(
  `NÓMINA DE EMPLEADO

Empleado: ${nombre.value}
Tienda: ${tienda.value}

Este documento es válido a efectos legales internos de la empresa Control Diario.
`
);

const descargarNomina = () => {
  fetch("http://localhost:8000/api/nomina", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al descargar la nómina");
      }
      return response.blob();
    })
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `Nomina_${nombre.value}.pdf`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    })
    .catch((error) => {
      console.error("Error al descargar la nómina:", error);
      alert("Hubo un problema al descargar la nómina. Inténtalo de nuevo.");
    });
};
</script>

<template>
  <div class="dashboard">
    <Header :nombre="nombre" />

	<main class="nomina-content">
	<div class="nomina-box">
		<h2>Vista previa de la nómina</h2>
		<pre class="nomina-contenido">{{ nominaContenido }}</pre>
		<button class="descargar-btn" @click="descargarNomina">
		Descargar nómina
		</button>
	</div>
	</main>


    <Footer />
  </div>
</template>
