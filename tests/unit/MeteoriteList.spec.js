import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import "regenerator-runtime";

import Vuex from 'vuex'


import MeteoriteList from '@/views/Meteorite/MeteoriteList.vue'


const localVue = createLocalVue();
localVue.use(Vuex);


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
          meteoriteComparison:[2,3]
      }
    store = new Vuex.Store({
        getters,
        state
    })
    vuetify = new Vuetify();
  });
  it("renders meteorite",  () => {


    wrapper = shallowMount(MeteoriteList, {
     localVue,
     vuetify,
       store,
     data() {
       return {
         favorite: false
       };
     },
     propsData: {
       category
     },
         stubs:['router-link', 'router-view']
   });
   expect(wrapper.html()).toMatchSnapshot();
 });

it("renders meteorites from state, and getters",  () => {


    wrapper = shallowMount(MeteoriteList, {
     localVue,
     vuetify,
       store,

     data() {
       return {
         favorite: false
       };
     },
     propsData: {
       category
     },
         stubs:['router-link', 'router-view']
   });
   expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.vm.allMeteorites()).toBe(store.state.meteorites)




 });
 it("testing comparison list method to match up with state",  () => {


    wrapper = shallowMount(MeteoriteList, {
     localVue,
     vuetify,
       store,

     data() {
       return {
         favorite: false
       };
     },
     propsData: {
       category
     },
         stubs:['router-link', 'router-view']
   });
const compare = [];
store.getters.meteoriteComparison.forEach((m) => {
  store.getters.initialMeteorites.filter((meteorite) => {
    if (m == meteorite.id) {
      compare.push(meteorite);
    }
  });
})
expect(wrapper.vm.comparisonList()).toStrictEqual(compare)
})
it("testing comparisonList method",  () => {


    wrapper = shallowMount(MeteoriteList, {
     localVue,
     vuetify,
       store,

     data() {
       return {
         favorite: false
       };
     },
     propsData: {
       category
     },
         stubs:['router-link', 'router-view']
   });
const array = []; 
store.getters.favorites.forEach((m) => {
    store.getters.initialMeteorites.filter((meteorite) => {
      if (m == meteorite.id) {
        array.push(meteorite);
      }
    })
})

expect(wrapper.vm.favoriteList()).toStrictEqual(array)
});
})