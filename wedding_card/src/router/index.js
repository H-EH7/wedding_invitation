import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IntroView from "../views/IntroView.vue";
import MainView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/intro",
    name: "intro",
    component: IntroView,
    // 새로고침 시 img src의 경로에 /intro가 하나 더 붙는 문제 해결
    beforeEnter: (to, from, next) => {
      if (to.fullPath == "/intro/") next("/intro");
      else next();
    },
  },
  {
    path: "/main",
    name: "main",
    component: MainView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory("/wedding_invitation"),
  routes,
});

export default router;
