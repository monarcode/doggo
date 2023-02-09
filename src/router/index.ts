import { createRouter, createWebHistory } from "vue-router";
import LayoutVue from "../components/Layout.vue";
import HomeVue from "../views/Home.vue";
import ViewBreedVue from "../views/ViewBreed.vue";

const routes = [
  {
    path: "/",
    component: HomeVue,
    name: "home",
    meta: {
      layout: LayoutVue,
    },
  },
  {
    path: "/:breed",
    component: ViewBreedVue,
    name: "view-breed",
    meta: {
      layout: LayoutVue,
    },
  },
];

const history = createWebHistory();
const router = createRouter({ history, routes });

export default router;
