<script setup>
import { ref } from "vue";
import "../styles/contrato.css";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const nombre = ref(localStorage.getItem("nombre") || "Usuario");
const tienda = ref(localStorage.getItem("tienda") || "Sin tienda");

const contratoContenido = ref(
  `CONTRATO DE EMPLEO

Este contrato certifica que el usuario ${nombre.value} está empleado en la tienda ${tienda.value}.

Este documento es válido a efectos legales internos de la empresa Control Diario.
`
);

const descargarContrato = () => {
  fetch("http://localhost:8000/api/contrato", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al descargar el contrato");
      }
      return response.blob();
    })
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `Contrato_${nombre.value}.pdf`;
      link.click();
      URL.revokeObjectURL(link.href);
    })
    .catch((error) => {
      console.error("Error al descargar el contrato:", error);
      alert("Hubo un problema al descargar el contrato. Inténtalo de nuevo.");
    });
};
</script>

<template>
  <div class="dashboard">
    <Header :nombre="nombre" />

    <main class="contrato-box">
      <h2>Descargar contrato</h2>
      <pre class="contrato-contenido">{{ contratoContenido }}</pre>
      <button class="descargar-btn" @click="descargarContrato">
        Descargar contrato
      </button>
    </main>

    <Footer />
  </div>
</template>
