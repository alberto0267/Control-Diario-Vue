import { createApp } from "vue";
import App from "./App.vue";
import VCalendar from "v-calendar";
import "v-calendar/style.css";
import "./styles/tailwind.css";
import router from "./router/router.js";

createApp(App).use(VCalendar, {}).use(router).mount("#app");
