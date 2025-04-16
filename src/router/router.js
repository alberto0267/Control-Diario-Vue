import { createRouter, createWebHistory } from "vue-router";
import Index from "../components/index.vue";
import Login from "../components/Login.vue";
import CreateAccount from "../components/CreateAccount.vue";
import CreateShop from "../components/CreateShop.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/login", component: Login },
  { path: "/register", component: CreateAccount },
  { path: "/create", component: CreateShop },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
