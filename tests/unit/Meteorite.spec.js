import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meteorite from '@/views/Meteorite/Meteorite.vue'

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe("MeteoriteList.vue",  () => {

  let wrapper;
  let vuetify;
  let store;
let getters;
let state;
let router;
let category;

  beforeEach(() => {
    category = {property:'recclass', value: 'L5'}
      getters = {
            favorites: (state) => state.favoriteMeteorites,
            initialMeteorites: (state) => state.meteorites,
         meteoriteComparison: (state) => state.meteoriteComparison
      }
      state = {
          meteorites:[
            {
                name: "Aachen",
                id: "1",
                nametype: "Valid",
                recclass: "L5",
                mass: "21",
                fall: "Fell",
                year: "1880-01-01T00:00:00.000",
                reclat: "50.775000",
                reclong: "6.083330",
                geolocation: {
                  type: "Point",
                  coordinates: [6.08333, 50.775]
                }
              },
              {
                name: "Abee",
                id: "6",
                nametype: "Valid",
                recclass: "EH4",
                mass: "107000",
                fall: "Fell",
                year: "1952-01-01T00:00:00.000",
                reclat: "54.216670",
                reclong: "-113.000000",
                geolocation: {
                  Type: "Point",
                  coordinates: [
                    -113,
                    54.21667
                  ]
                }
              }
          ],
          favoriteMeteorites:[1],
          meteoriteComparison:[2,3], 

      }
      router = new VueRouter()
    store = new Vuex.Store({
        getters,
        state
    })
    vuetify = new Vuetify();
  });

  test('rending component', () => {
      const wrapper = shallowMount(Meteorite,{
          localVue, 
          vuetify, 
          store,
          router
      })

      expect(wrapper.html()).toMatchSnapshot(); 
  })
})