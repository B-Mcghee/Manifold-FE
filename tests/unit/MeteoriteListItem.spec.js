import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import BaseCard from "@/components/UI/BaseCard.vue";
import MeteoriteListItem from "@/views/Meteorite/MeteoriteListItem.vue";
import Vuex from 'vuex'
import router from 'vue-router'
import VueRouter from "vue-router";
const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(router)

describe("MeteoriteListItem.vue", () => {
  let wrapper;
  let vuetify;
  let store;
let getters;
let state;
let router;
let meteorite;
  beforeEach(() => {
     meteorite = {
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
      }

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
          favoriteMeteorites:[1,2,3],
          meteoriteComparison:[2,3]
      }
    store = new Vuex.Store({
        getters,
        state
    })
    vuetify = new Vuetify();
  });


  it("renders meteorite", () => {


     wrapper = mount(MeteoriteListItem, {
      localVue,
      vuetify,
        store,
      data() {
        return {
          favorite: false
        };
      },
      propsData: {
        meteorite
      },
          stubs:['router-link', 'router-view']
    });
    expect(wrapper.html()).toMatchSnapshot();

    const title = wrapper.find(".v-toolbar__title");

    expect(title.text()).toBe(meteorite.name);
  });

  it("renders meteorite", () => {

    const $route = {
        path: "/meteorites/properties/:property/value/:value",
    name: "Property",
    }
     wrapper = mount(MeteoriteListItem, {
      localVue,
      vuetify,
        store,
      data() {
        return {
          favorite: false
        };
      },
      stubs:['router-link', 'router-view'],
      propsData: {
       meteorite
      }
     
    });

    const title = wrapper.find(".v-toolbar__title");

    expect(title.text()).toBe(meteorite.name);
  });


});
