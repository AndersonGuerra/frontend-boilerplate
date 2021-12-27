import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import authRoutes from "./auth";
import userRoutes from "./users";
import MenuView from "../views/MenuView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Menu",
    component: MenuView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

routes.push(...authRoutes, ...userRoutes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
