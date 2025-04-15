<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import "../styles/ventasDiarias.css";
import { ref, reactive, onMounted } from "vue";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import "tabulator-tables/dist/css/tabulator.min.css";

const table = ref(null);
const tabulator = ref(null);

// Datos de prueba (puedes cambiarlos)
const tableData = reactive([
  { nom: "Rosita", met: 77, tpv: 20 },
  { nom: "Danni", met: 137.21, tpv: 15 },
]);

onMounted(() => {
  tabulator.value = new Tabulator(table.value, {
    data: tableData,
    reactiveData: true,
    layout: "fitColumns",
    columns: [
      { title: "Nom", field: "nom", editor: "input" },
      { title: "Met", field: "met", editor: "number" },
      { title: "Tpv", field: "tpv", editor: "number" },
      { title: "Reti", field: "retiradas", editor: "number" },
      {
        title: "Total",
        field: "total",
        mutator: (value, data) => (data.efectivo + data.tarjeta).toFixed(2),
      },
    ],
  });
});
</script>
<template>
  <Header />
  <div class="layout">
    <main class="main-content">
      <div ref="table" class="tabla"></div>
    </main>
  </div>
  <Footer />
</template>
