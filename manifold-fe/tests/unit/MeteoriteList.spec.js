// import {  createLocalVue, shallowMount, mount } from '@vue/test-utils';
// import Vuetify from 'vuetify';
// import BaseCard from '@/components/UI/BaseCard.vue';
// import MeteoriteList from '@/views/Meteorite/MeteoriteList.vue'


// shallowMount(MeteoriteList, {
//     stubs:['router-link', 'router-view']
// })


// describe('MeteoriteList.vue', () => {
//     let wrapper;
    
//     beforeEach('should ', () => {
//         const $store = {
//             state:{
//                 meteorites:[
//                     {
//                         name: "Aachen",
//                         id: "1",
//                         nametype: "Valid",
//                         recclass: "L5",
//                         mass: "21",
//                         fall: "Fell",
//                         year: "1880-01-01T00:00:00.000",
//                         reclat: "50.775000",
//                         reclong: "6.083330",
//                         geolocation: {
//                           type: "Point",
//                           coordinates: [6.08333, 50.775],
//                         }
//                     }
//                 ]
//             },
//             getters:{
//                 initialMeteorites: (state) => state.meteorites,
//             }
//         }

//         const localVue = createLocalVue()
//         const vuetify = new Vuetify();
//         localVue.use(vuetify)
//         localVue.use(BaseCard);
//         const shallowWrapper = shallowMount(MeteoriteList, {
//             localVue, BaseCard
//         });
// console.log(shallowWrapper.html());
//         const wrapper = mount(MeteoriteList, {
//             mocks:{
//                 $store,
//                 BaseCard,
//                 propsData:{
//                     met
//                 }
//             }
//         })
//         it('renders meteorites', () => {
//             const localThis = {}
//         })
//         expect(wrapper).toMatchSnapshot()
//         console.log(wrapper.html());

//     })
// });