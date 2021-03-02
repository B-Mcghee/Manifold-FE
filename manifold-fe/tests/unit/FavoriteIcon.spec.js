import {  createLocalVue, shallowMount, mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import FavoriteIcon from '@/components/UI/FavoriteIcon.vue';
import Vuex from 'vuex';


describe('FavoriteIcon.vue', () => {
    test('is a vue Instance', () => {
        const mock = {}
        const wrapper = mount(FavoriteIcon, {
            propsData:{
                favorite: 1
            }, 
            methods:{
                toggleFavorite() {
                    if (!this.favoriteArray.includes(this.favorite)) {
                      this.toggleFavorites();
                      this.addToFavorites(this.favorite);
                    } else {
                      this.removeFavorite(this.favorite);

                    }
                  },
            },
            computed:{
              
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
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    })
    
    

});