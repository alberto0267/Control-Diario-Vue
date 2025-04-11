import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Dashboard from "../components/DashboardAdmin.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/dashboardadmin", component: DashboardAdmin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
