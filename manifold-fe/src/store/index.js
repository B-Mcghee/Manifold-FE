import Vue from "vue";
import Vuex from "vuex";
import meteorites from "./modules/meteorites";
import BaseCard from '../components/UI/BaseCard.vue';
import MeteoriteListItem from '../views/Meteorite/MeteoriteListItem.vue'

Vue.use(Vuex);


Vue.component('base-card',BaseCard);
Vue.component('meteorite-list-item', MeteoriteListItem)
// Vue.component('base-button',BaseButton);
// Vue.component('modal', PopupModal);

export default new Vuex.Store({
modules:{
  meteorites
}
});
