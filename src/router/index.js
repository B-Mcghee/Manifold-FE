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
    path: "/meteorites",
    name: "Meteorite",
    component: () =>
      import(
        /* webpackChunkName: "Meteorite" */ "../views/Meteorite/Meteorite.vue"
      ),
      // children: [
      //   {path: '/category/:category', component: () => import("@/views/Meteorite/MeteoriteList.vue") }
      // ]
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

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
