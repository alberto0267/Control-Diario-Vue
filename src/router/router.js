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
import HistorialFichaje from "../components/HistorialFichaje.vue";
// import VacacionesAdmin from "../components/Vacaciones.vue";
import VentasDiarias from "../components/VentasDiarias.vue";
import Suggets from "../components/Suggets.vue";
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
  { path: "/historial-fichaje", component: HistorialFichaje },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
