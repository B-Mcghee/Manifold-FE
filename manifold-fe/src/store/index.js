import Vue from "vue";
import Vuex from "vuex";
import meteorites from "./modules/meteorites";

Vue.use(Vuex);


export default new Vuex.Store({
modules:{
  meteorites
}
});
