import { createRouter, createWebHistory } from "vue-router";
import Menu from "../views/home/menu.vue";

const routes = [
  {
    path: "/",
    component: Menu
  }
];

const router = createRouter({
  history: createWebHistory(), //localhost:8080
  routes
});

export default router;
