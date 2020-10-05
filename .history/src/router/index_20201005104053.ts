import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/home/index.vue";

const routes = [
  {
    path: "/",
    component: Index
  }
];

const router = createRouter({
  history: createWebHistory(), //localhost:8080
  routes
});

export default router;
