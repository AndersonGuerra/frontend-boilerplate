import { RouteRecordRaw } from "vue-router";
import LoginView from "../views/LoginView.vue";

const suburl = "/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: `${suburl}/login`,
    name: "Login",
    component: LoginView,
  },
];

export default routes;
