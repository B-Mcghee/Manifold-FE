import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const getters = {
    initialMeteorites: jest.fn().mockReturnValue([
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
        name: "Testing 2",
        id: "2",
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
      }])


}


  export const mutations = {
        FETCH_METEORITES:jest.fn(),
        SET_METEORITES: jest.fn(),
        CURRENT_METEORITES: jest.fn(),
        ADD_FAVORITE: jest.fn(),
        SET_FAVORITES: jest.fn(),
        SET_COMPARISON: jest.fn(),
      };

      export const actions = {
         fetchMeteorites : jest.fn(),
      
         filterMeteorites: jest.fn(),
         changeOffset: jest.fn(),
        
         currentMeteorites:jest.fn(),
      
         loadFavorites:jest.fn(),
         addToFavorites:jest.fn(),
         removeFavorite:jest.fn(),
         syncFavorites:jest.fn(),
         addComparison:jest.fn(),
         removeComparison:jest.fn(),
      };

      export const state = {
       meteorites: [ {
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
            name: "Testing 2",
            id: "2",
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
          }]
      }

      export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
        const mockGetters = Object.assign({}, getters, custom.getters);
        const mockMutations = Object.assign({}, mutations, custom.mutations);
        const mockActions = Object.assign({}, actions, custom.actions);
        const mockState = Object.assign({}, state, custom.state);

        return {
            getters: mockGetters,
            mutations: mockMutations,
            actions: mockActions,
            state: mockState,
            store: new Vuex.Store({
              getters: mockGetters,
              mutations: mockMutations,
              actions: mockActions,
              state: mockState,
            }),
          };
        }
        
        export const store = __createMocks().store;
