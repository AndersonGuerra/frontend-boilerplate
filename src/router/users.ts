import { RouteRecordRaw } from "vue-router";
import NewUserView from "../views/NewUserView.vue";
import ListUserView from "../views/ListUserView.vue";
import DetailUserView from "../views/DetailUserView.vue";

const suburl = "/usuarios";

const routes: Array<RouteRecordRaw> = [
  {
    path: `${suburl}`,
    name: "Usuários",
    component: ListUserView,
  },
  {
    path: `${suburl}/:id`,
    name: "Detalhes do usuário",
    component: DetailUserView,
  },
  {
    path: `${suburl}/novo`,
    name: "Novo usuário",
    component: NewUserView,
  },
];

export default routes;
