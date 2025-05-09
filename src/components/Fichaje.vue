<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import { ref, onMounted, onUnmounted } from "vue";
import "../styles/fichaje.css";

const getHora = () => String(new Date().getHours()).padStart(2, "0");

// Devuelve los minutos actuales con 2 dígitos (por ejemplo, "05")
const getMinutos = () => String(new Date().getMinutes()).padStart(2, "0");

const getSegundos = () => String(new Date().getSeconds()).padStart(2, "0");

const getHoraCompleta = () => `${getHora()}:${getMinutos()}:${getSegundos()}`;

const tiempo = ref("");

const horas = ref("");
const minutos = ref("");
const segundos = ref("");

const actualizarHoras = () => {
  const now = new Date();
  horas.value = getHora();
};

const actualizarMinutos = () => {
  const now = new Date();
  minutos.value = getMinutos();
};

const actualizarSegundos = () => {
  const now = new Date();
  segundos.value = getSegundos();

  segundos.value = String(now.getSeconds()).padStart(2, "0");
};
const actualizarTiempo = () => {
  const now = new Date();
  tiempo.value = getHoraCompleta();
};

let intervalos;
let intervalosH;
let intervalosM;
let intervalosS;

/* Esto se usa en vez de settiemOut porque  el time out lo llama una vez a menos que sea recursiva */
onMounted(() => {
  actualizarTiempo();
  actualizarHoras();
  actualizarMinutos();
  actualizarSegundos();

  intervalosS = setInterval(actualizarSegundos, 1000);
  intervalosH = setInterval(actualizarHoras, 1000);
  intervalosM = setInterval(actualizarMinutos, 1000);
  intervalos = setInterval(actualizarTiempo, 1000);
});

onUnmounted(() => {
  clearInterval(intervalos);
  clearInterval(intervalosH);
  clearInterval(intervalosM);
  clearInterval(intervalosS);
});

const tipo = ref("");
const entrada = "entrada";
const salida = "salida";
const descanso = "descanso";
const user_id = parseInt(localStorage.getItem("user_id"));
const token = localStorage.getItem("token");

function enviarFichaje(e) {
  // e.preventDefault();
  tipo.value = e;
  console.log("El tipo seleccionado es", tipo.value);

  const horaActual = tiempo.value;
  const fechaActual = new Date().toLocaleDateString("en-CA");

  const datos = {
    user_id: user_id,
    tipo: tipo.value,
    fecha: fechaActual,
  };

  if (tipo.value === "entrada") {
    datos.hora_entrada = horaActual;
  } else if (tipo.value === "salida") {
    datos.hora_salida = horaActual;
  } else {
    datos.hora_descanso = horaActual;
  }

  fetch("http://localhost:8000/api/fichajes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(datos),
  })
    .then(async (response) => {
      if (response.status === 409) {
        const msg = await response.json();
        console.log("⚠️ Ya fichaste: " + msg.error);
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Errores del backend:", errorData);
        throw new Error("Algo falló");
      }

      return response.json();
    })
    .then((data) => {
      console.log("mensaje del servidor", data);
      // localStorage.setItem("token", data.access_token);
    })
    .catch((error) => {
      console.error("error: ", error);
    });
}
</script>
<template>
  <div class="dashboard">
    <Header />
    <main class="main-container">
      <div class="clock">
        <span class="hours">{{ horas }}:</span>

        <span class="minutos">{{ minutos }}:</span>
        <!-- <span>:</span> -->
        <span class="segundos">{{ segundos }}</span>
      </div>

      <div class="action-buttons buttonsTop">
        <button class="icon-button">
          <img
            src="../assets/fichajeEntrada.png"
            alt="Entrada"
            @click="enviarFichaje(entrada)"
          />
        </button>
        <button class="icon-button selected">
          <img
            src="../assets/fichajeSalida.png"
            alt="Salida"
            @click="enviarFichaje(salida)"
          />
        </button>
      </div>

      <div class="action-buttonsBottom">
        <button class="icon-button">
          <img
            src="../assets/descanso.png"
            alt="Descanso"
            @click="enviarFichaje(descanso)"
          />
        </button>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
