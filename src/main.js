import { createApp } from "vue";
import App from "./App.vue";
import VCalendar from "v-calendar";
import "v-calendar/style.css";

createApp(App).use(VCalendar, {}).mount("#app");
