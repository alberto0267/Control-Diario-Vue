<script setup>
import "../styles/historialFichaje.css";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

function descargarFichaje() {
  fetch("http://localhost:8000/api/pdf-fichajes", {
    method: "GET",
    headers: {
      Accept: "application/pdf",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("No se pudo generar el PDF.");
      }

      //Blob se usara para pdf.
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "fichajes.pdf");

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error("Error al descargar el PDF:", error);
    });
}
</script>

<template>
  <div class="dashboard">
    <Header />

    <main>
      <button @click="descargarFichaje">
        📄 Descargar historial de fichajes (PDF)
      </button>
    </main>
  </div>
  <Footer />
</template>
