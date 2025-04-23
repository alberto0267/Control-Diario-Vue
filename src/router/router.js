import { createRouter, createWebHistory } from "vue-router";
import Index from "../components/index.vue";
import Login from "../components/Login.vue";
import CreateAccount from "../components/CreateAccount.vue";
import CreateShop from "../components/CreateShop.vue";

import DashboardAdmin from "../components/DashboardAdmin.vue";
import DashboardEmployee from "../components/DashboardEmployee.vue";
import DashboardManager from "../components/DashboardManager.vue";

import FlujoCaja from "../components/FlujoCaja.vue";
import Fichaje from "../components/Fichaje.vue";
import Vacaciones from "../components/Vacaciones.vue";
// import Nomina from "../components/Nomina.vue";
// import Contrato from "../components/Contrato.vue";
import Ventas from "../components/VentasDiarias.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/login", component: Login },
  { path: "/register", component: CreateAccount },
  { path: "/create", component: CreateShop },
  { path: "/admin", component: DashboardAdmin },
  { path: "/employee", component: DashboardEmployee },
  { path: "/manager", component: DashboardManager },
  { path: "/caja", component: FlujoCaja },
  { path: "/fichaje", component: Fichaje },
  { path: "/vacaciones", component: Vacaciones },
  // { path: "/nomina", component: Nomina },
  // { path: "/contrato", component: Contrato },
  { path: "/ventas", component: Ventas },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
