import axios from "axios";
const baseUrl = `https://data.nasa.gov/resource/y77d-th95.json?`;

const state = {
  meteorites: [],
  displayedMeteorites: [],
  searchTypes:["name", "id", "recclass", "mass"]
};
const mutations = {
  FETCH_METEORITES(state, meteorites) {
    return (state.meteorites = meteorites);
  },
  setMeteorites: (state, meteorites) => (state.meteorites = meteorites),
  CURRENT_METEORITES: (state, payload) => (state.displayedMeteorites = payload)
};


const actions = {
  async fetchMeteorites({ commit }) {
    await axios
      .get(baseUrl)
      .then((response) => {
        commit("FETCH_METEORITES", response.data);
      });
  },
  async filterMeteorites({ commit }, i) {

      const response = await axios.
      get(baseUrl + `$limit=${i}&$offset=0`);
      commit('setMeteorites', response.data);
  },
  async changeOffset({commit},i){
    let offset = i.filter * parseInt(i.page);
    if(offset > 1000){offset = 1000;}
    if(i.page == 1){offset = 0};
    console.log(offset);
    const response = await axios.get(baseUrl + `$limit=${i.filter}&$offset=${offset}`);
    commit('setMeteorites', response.data)
  },
  async currentMeteorites({commit, state}, index){
    let response = state.meteorites.slice(index.start, index.end);
    commit('CURRENT_METEORITES', response);
  }
};

const getters = {
  initialMeteorites: (state) => state.meteorites,
  displayedMeteorites: (state) => state.displayedMeteorites,
  meteoriteCount: (state) => state.meteorites.length

  };
  


export default {
  state,
  getters,
  actions,
  mutations,
};
