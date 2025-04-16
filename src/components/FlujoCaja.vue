<script setup>
import { ref, computed } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import "../styles/flujoCaja.css";

const ventaTPV = ref(0);

// Descuentos porcentuales
const descuentos = ref([
  { concepto: "Provisión de pérdida", porcentaje: 3 },
  { concepto: "Royalties", porcentaje: 2 },
  { concepto: "Serv.DIA SR9", porcentaje: 3 },
]);

const variables = ref({
  escalones: 0,
  almacen: 0,
  auxiliar: 0,
});

const calcularImporte = (porcentaje) => {
  return parseFloat(((ventaTPV.value * porcentaje) / 100).toFixed(2));
};

const total = computed(() => {
  const porcentuales = descuentos.value.reduce(
    (sum, descuentos) => sum + calcularImporte(descuentos.porcentaje),
    0
  );
  const extras =
    Number(variables.value.escalones) +
    Number(variables.value.almacen) +
    Number(variables.value.auxiliar);
  return ventaTPV.value - (porcentuales + extras);
});
</script>

<template>
  <Header />
  <div class="contenedor">
    <h1 class="titulo">Control de Descuentos</h1>

    <div class="campo">
      <label for="tpv">Venta TPV (€):</label>
      <input id="tpv" type="number" v-model.number="ventaTPV" />
    </div>

    <table class="tabla">
      <thead>
        <tr>
          <th>Concepto</th>
          <th>% Descuento</th>
          <th>Importe (€)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in descuentos" :key="index">
          <td>{{ item.concepto }}</td>
          <td>
            <input type="number" v-model.number="item.porcentaje" />
          </td>
          <td class="minus">
            {{ calcularImporte(item.porcentaje).toFixed(2) }}
          </td>
        </tr>
        <tr class="separador">
          <td colspan="3"><strong>Descuentos variables</strong></td>
        </tr>
        <tr>
          <td>Descuento por Escalones</td>
          <td colspan="2">
            <input
              class="minus"
              type="number"
              v-model.number="variables.escalones"
            />
          </td>
        </tr>
        <tr>
          <td>Pedido Almacén</td>
          <td colspan="2">
            <input
              class="minus"
              type="number"
              v-model.number="variables.almacen"
            />
          </td>
        </tr>
        <tr>
          <td>Material Auxiliar</td>
          <td colspan="2">
            <input
              class="minus"
              type="number"
              v-model.number="variables.auxiliar"
            />
          </td>
        </tr>
        <tr class="total">
          <td>Total</td>
          <td colspan="2">
            <strong>{{ total }} €</strong>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="botonera">
      <button @click="ventaTPV = 0">Resetear TPV</button>
    </div>
  </div>
  <Footer />
</template>

<style scoped></style>
