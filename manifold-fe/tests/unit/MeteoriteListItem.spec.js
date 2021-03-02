import {  createLocalVue, shallowMount, mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import BaseCard from '@/components/UI/BaseCard.vue';
import MeteoriteListItem from '@/views/Meteorite/MeteoriteListItem.vue'
import {mapState} from 'vuex'





describe('MeteoriteListItem.vue', () => {
    let wrapper;
    const localVue = createLocalVue();
    let Vuetify
    beforeEach('should ', () => {
        vuetify = new Vuetify();
       

it('renders meteorite', () => {
    const wrapper = mount(MeteoriteListItem, {
        localVue,
        vuetify,
        
        data(){
            return{
                favorite:false
            }

        },
        propsData:{
            meteorite:{
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
                  coordinates: [6.08333, 50.775],
                }
            }
        },
        mocks:{

            BaseCard,
  
        },
        stubs:['router-link', 'router-view', 'favorite-icon'],
        
    }  

)
expect(wrapper.html()).toMatchSnapshot()
})
// console.log(shallowWrapper.html());
it('renders meteorite', () => {
    const wrapper = mount(MeteoriteListItem, {
        data(){
            return{
                favorite:false
            }

        },
        propsData:{
            meteorite:$store.state.meteorites[0]
        },
        mocks:{
            $store,
            BaseCard,
  
        },
        stubs:['router-link', 'router-view', 'favorite-icon'],
        computed:{
            ...mapState(['favoriteMeteorites']),
        isFavorite(){
            return true;
        }, 
        favoriteArray(){
            return [
                {
                    name: "favorite",
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
                      coordinates: [6.08333, 50.775],
                    }
                }
            ]
        }}
        // methods:{
        //     favoriteArray() {
        //         const array = $store.state.meteorites.favoriteMeteorites.map(
        //           (e) => e
        //         );
        //         return array;
        //       }
        // }
    })


    console.log(wrapper)
})



        // expect(wrapper).toMatchSnapshot()
        // console.log(wrapper.html());

    // })
    
    });
})
