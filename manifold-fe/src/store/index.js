import Vue from "vue";
import Vuex from "vuex";
import meteorites from "./modules/meteorites";
import BaseCard from '../components/UI/BaseCard.vue';

Vue.use(Vuex);


Vue.component('base-card',BaseCard);
// Vue.component('base-button',BaseButton);
// Vue.component('modal', PopupModal);

export default new Vuex.Store({
modules:{
  meteorites
}
});
