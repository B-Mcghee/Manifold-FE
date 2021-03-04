import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/meteorites",
    name: "Meteorite",
    component: () =>
      import(
        /* webpackChunkName: "Meteorite" */ "../views/Meteorite/Meteorite.vue"
      ),
    alias: "/"
  },
  {
    path: "/meteorites/category/:category",
    name: "Category",
    component: () => import("@/views/Meteorite/Meteorite.vue")
  },

  {
    path: "/meteorites/properties/:property/value/:value",
    name: "Property",
    component: () => import("@/views/Meteorite/Meteorite.vue")
  },
  { path: "/404", component: () => import("@/views/Error") },
  { path: "*", redirect: "/404" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
