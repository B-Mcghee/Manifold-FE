import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/meteorites",
    name: "Meteorite",
    component: () => import(/* webpackChunkName: "Meteorite" */'../views/Meteorite/Meteorite.vue')
  },
  {
    path:"/favorites",
    name: "Favorite",
    component: () => import('../components/layouts/FavoriteList.vue')
  },
  {
    path:"/comparison",
    name: "Compare",
    component: () => import('../components/layouts/CompareList.vue')
  },
  {
    path: "/recclass/:recclass",
    name: "Recclass",
    component: () => import('../components/layouts/Recclass.vue'),
  },
  {
    path: "/year/:year?",
    name: "Year",
    component: () => import('../components/layouts/Year.vue'),
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
