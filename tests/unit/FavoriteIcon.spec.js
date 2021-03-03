import {  createLocalVue, shallowMount, mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import BaseCard from '@/components/UI/BaseCard.vue';
import FavoriteIcon from '@/components/UI/FavoriteIcon.vue'
import Vuex from 'vuex';
import {__createMocks as createStoreMocks} from '@/store/mocks'
import store from '@/store'
import Vue from 'vue'


describe('FavoriteIcon', () => {
  test('renders item', () =>{
    const wrapper = mount(FavoriteIcon)
    expect(wrapper.vm.$el.textContent).toContain(' Favorite')
  })



})

// shallowMount(FavoriteIcon, {
//     stubs:['router-link', 'router-view']
// })
// jest.mock('@/store/mocks')
// const localVue = createLocalVue();
// localVue.use(Vuex);
// const $store = new Vuex.Store({
//  state :{
//     meteorites: [
//       {
//         name: "Aachen",
//         id: "1",
//         nametype: "Valid",
//         recclass: "L5",
//         mass: "21",
//         fall: "Fell",
//         year: "1880-01-01T00:00:00.000",
//         reclat: "50.775000",
//         reclong: "6.083330",
//         geolocation: {
//           type: "Point",
//           coordinates: [6.08333, 50.775]
//         }
//       }
//     ]
//   }
// })

  

// describe('FavoriteIcon.vue', () => {
//     let vuetify;
//     let wrapper;

//     beforeEach('should ', () => {
//         storeMocks = createStoreMocks();

//         vuetify = new Vuetify();

        
//     })
//         it('renders meteorites', () => {
//           wrapper = shallowMount(FavoriteIcon, {
//             mocks:{
//               $store
//             },
//               store: storeMocks.store,
//               localVue, vuetify
//           });
//             const localThis = {}
//         })
//         expect(wrapper.html()).toMatchSnapshot()
//         console.log(wrapper.html());

//     })


// import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
// import Vuetify from "vuetify";
// import FavoriteIcon from "@/components/UI/FavoriteIcon.vue";
// import Vuex, { mapState } from "vuex";
// import store from "@/store/index.js";
// import meteorites from "../../src/store/modules/meteorites";

// describe("FavoriteIcon.vue", () => {
//   let vuetify;
//   const localVue = createLocalVue();
//   localVue.use(Vuex);
//   let wrapper;
//   beforeEach(() => {
//     vuetify = new Vuetify();

//     const state = {
//       meteorites: [
//         {
//           name: "Aachen",
//           id: "1",
//           nametype: "Valid",
//           recclass: "L5",
//           mass: "21",
//           fall: "Fell",
//           year: "1880-01-01T00:00:00.000",
//           reclat: "50.775000",
//           reclong: "6.083330",
//           geolocation: {
//             type: "Point",
//             coordinates: [6.08333, 50.775]
//           }
//         }
//       ]
//     };

//     store = new Vuex.Store({});
//   });

//   it("emit event when action is clicked", () => {
//     wrapper = shallowMount(FavoriteIcon, {
//       localVue,
//       mocks: {
//         store
//       },
//       vuetify,
//       propsData: {
//         favorite: 1
//       },
//       data: () => ({
//         height: "2em",
//         width: "2em",
//         starFill: "#fff",
//         backgroundFill: "#fff",

//         name: "",
//         favoriteIds: [1, 2]
//       })
//     });

//     console.log(store);
//     expect(wrapper.html()).toMatchSnapshot();

//     expect(wrapper.find("#favorite-icon").exists()).toBeTruthy();
//     const toggleFavorite = jest.fn();

//     wrapper.setMethods({
//       toggleFavorite: toggleFavorite
//     });

//     wrapper.find("#favorite-icon").trigger("click");
//     wrapper.vm.$on("#favorite-icon", toggleFavorite);
//     expect(wrapper.findComponent({ name: "v-btn" }).exists()).toBe(true);
//     console.log(wrapper.vm.starFill);
//     wrapper.findComponent({ name: "v-btn" }).trigger("click");
//     expect(toggleFavorite).toHaveBeenCalled();

//     console.log(wrapper.vm.starFill);
//   });
// });
//   it("returns favorites array", () => {
// const $store ={
//   state:{
//     meteorites: [
//             {
//               name: "Aachen",
//               id: "1",
//               nametype: "Valid",
//               recclass: "L5",
//               mass: "21",
//               fall: "Fell",
//               year: "1880-01-01T00:00:00.000",
//               reclat: "50.775000",
//               reclong: "6.083330",
//               geolocation: {
//                 type: "Point",
//                 coordinates: [6.08333, 50.775],
//               },
//             },
//           ]
//   }
// }

//     wrapper = shallowMount(FavoriteIcon, {
//       localVue,
//       mocks:{
//         $store
//       },
//       vuetify,
//       propsData:{
//         favorite:1
//       },
//       data:() => ({
//         height: "2em",
//     width: "2em",
//     starFill: "#fff",
//     backgroundFill: "#fff",

//     name: "",
//         favoriteIds:[1,2]
//       }),
//       computed:{
//         isFavorite(){
//           return true;
//         }
//       }

//     });

//     const localFavorite ={favorite:1}

//     expect(FavoriteIcon.computed.isFavorite.call(localFavorite)).toBe(true);
//   });
