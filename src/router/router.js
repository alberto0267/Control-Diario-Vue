import { createRouter, createWebHistory } from "vue-router";
import Index from "../components/index.vue";
import Login from "../components/Login.vue";
import CreateAccount from "../components/CreateAccount.vue";
import CreateShop from "../components/CreateShop.vue";

import DashboardAdmin from "../components/DashboardAdmin.vue";
import DashboardManager from "../components/DashboardManager.vue";
import DashboardEmployee from "../components/DashboardEmployee.vue";
import VacacionesAdmin from "../components/CalendarioAdmin.vue";
import VacacionesEmployee from "../components/CalendarioEmployee.vue";
import Fichaje from "../components/Fichaje.vue";
import FlujoCaja from "../components/FlujoCaja.vue";
// import VacacionesAdmin from "../components/Vacaciones.vue";
import VentasDiarias from "../components/VentasDiarias.vue";
import Suggets from "../components/Suggets.vue";
import Contrato from "../components/Contrato.vue";
import Nomina from "../components/Nomina.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/login", component: Login },
  { path: "/register", component: CreateAccount },
  { path: "/create", component: CreateShop },

  { path: "/dashboard-admin", component: DashboardAdmin },
  { path: "/dashboard-manager", component: DashboardManager },
  { path: "/dashboard-employee", component: DashboardEmployee },
  { path: "/vacaciones-admin", component: VacacionesAdmin },
  { path: "/vacaciones-employee", component: VacacionesEmployee },
  { path: "/fichaje", component: Fichaje },
  { path: "/flujo-caja", component: FlujoCaja },
  // { path: "/vacaciones", component: Vacaciones },
  { path: "/ventas-diarias", component: VentasDiarias },
  { path: "/sugerencias", component: Suggets },
  { path: "/contrato", component: Contrato },
  { path: "/nomina", component: Nomina },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NO PUEDO PROBARLO PQ NO ME VA LA BASE DE DATOS, LUEGO PRUEBALO AVR SI FUNCIONA

/* router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  const rutasProtegidas = [
    "/dashboard-admin",
    "/dashboard-manager",
    "/dashboard-employee",
    "/vacaciones-admin",
    "/vacaciones-employee",
    "/fichaje",
    "/flujo-caja",
    "/ventas-diarias",
    "/sugerencias",
  ];

  if (rutasProtegidas.includes(to.path) && !token) {
    next("/");
  } else {
    next();
  }
});
*/

export default router;
