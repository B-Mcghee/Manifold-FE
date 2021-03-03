// import { createLocalVue, shallowMount, mount } from "@vue/test-utils";
// import Vuetify from "vuetify";
// import BaseCard from "@/components/UI/BaseCard.vue";
// import MeteoriteListItem from "@/views/Meteorite/MeteoriteListItem.vue";
// import { mapState } from "vuex";

// describe("MeteoriteListItem.vue", () => {
//   let wrapper;
//   let vuetify;
//   const localVue = createLocalVue();
//   beforeEach(() => {
//     vuetify = new Vuetify();
//   });
//   it("renders meteorite", () => {
//     localVue.use(vuetify);
//     const wrapper = mount(MeteoriteListItem, {
//       localVue,
//       vuetify,

//       data() {
//         return {
//           favorite: false
//         };
//       },
//       propsData: {
//         meteorite: {
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
//       },
//       mocks: {
//         BaseCard
//       },
//       stubs: ["router-link", "router-view", "favorite-icon", 'base-card']
//     });
//     expect(wrapper.html()).toMatchSnapshot();

//     const title = wrapper.find(".v-toolbar__title");

//     expect(title.text()).toBe("Aachen");
//   });

//   // console.log(shallowWrapper.html());

//   // expect(wrapper).toMatchSnapshot()
//   // console.log(wrapper.html());

//   // })
// });
