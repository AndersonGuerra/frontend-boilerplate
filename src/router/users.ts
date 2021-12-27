import { RouteRecordRaw } from "vue-router";
import NewAccountView from "../views/NewAccountView.vue";

const suburl = "/usuario";

const routes: Array<RouteRecordRaw> = [
  {
    path: `${suburl}/novo`,
    name: "Novo usuário",
    component: NewAccountView,
  },
];

export default routes;
