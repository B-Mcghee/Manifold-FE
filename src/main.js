import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "regenerator-runtime";
import BaseCard from "@/components/UI/BaseCard.vue";
import MeteoriteListItem from "@/views/Meteorite/MeteoriteListItem.vue";

Vue.component("base-card", BaseCard);
Vue.component("meteorite-list-item", MeteoriteListItem);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
