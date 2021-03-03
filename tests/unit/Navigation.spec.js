// import { createLocalVue, shallowMount } from "@vue/test-utils";
// import Vuetify from "vuetify";
// import {mapActions} from 'vuex'

// import Navigation from "@/components/layouts/Navigation.vue";

// shallowMount(Navigation, {
//   stubs: ["router-link", "router-view"]
// });
// const localVue = createLocalVue();
// let vuetify;
// describe("Navigation.vue", () => {

//   let wrapper;

//   beforeEach(() => {
   
//      vuetify = new Vuetify();

//   });


//   it("renders a vue instance", () => {
//     wrapper = shallowMount(Navigation, {
//       localVue,
//       vuetify, 
//       created(){
//         this.fetchMeteorites();
//       },

//       methods: mapActions(['fetchMeteorites'])
//     });

//     expect(wrapper.html()).toMatchSnapshot();
//   });

//   it("expects render", () => {
//     expect(wrapper.find('[data-testid="card"]').exists()).toBe(true);
//   });
// });
// // shallowMount(Navigation, { stubs: ['router-link', 'router-view']})

// //     test('should navigated to different pages listed', async () => {
// //       const wrapper = mount(Navigation)

// //       const tab = wrapper.find('v-tab')

// //       await tab.trigger('click')

// //       expect(tab.contains('meteorites'))
// //     })
