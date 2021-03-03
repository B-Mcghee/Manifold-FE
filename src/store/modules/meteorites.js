import axios from "axios";

const baseUrl = `https://data.nasa.gov/resource/y77d-th95.json?`;

const state = {
  meteorites: [],
  displayedMeteorites: [],
  searchTypes: ["name", "id", "recclass", "mass"],
  favoriteMeteorites: [],
  meteoriteComparison: [],
  favoriteIds:[]
  
};
const mutations = {
  FETCH_METEORITES(state, meteorites) {
    return (state.meteorites = meteorites);
  },
  SET_METEORITES: (state, meteorites) => (state.meteorites = meteorites),
  CURRENT_METEORITES: (state, payload) => (state.displayedMeteorites = payload),
  ADD_FAVORITE: (state, payload) => {
    state.favoriteMeteorites = payload;
    window.localStorage.favoriteMeteorites = JSON.stringify(payload);
  },
  SET_FAVORITES: (state, payload) => {
    state.favoriteMeteorites = payload;
  },
  SET_COMPARISON: (state, payload) => (state.meteoriteComparison = payload)
};

const actions = {
  async fetchMeteorites({ commit }) {
    await axios.get(baseUrl).then(response => {
      commit("FETCH_METEORITES", response.data);
    });
  },

  async filterMeteorites({ commit }, i) {
    const response = await axios.get(baseUrl + `$limit=${i}&$offset=0`);
    commit("SET_METEORITES", response.data);
  },
  async changeOffset({ commit }, i) {
    let offset = i.filter * parseInt(i.page);
    if (offset > 1000) {
      offset = 1000;
    }
    if (i.page == 1) {
      offset = 0;
    }
    console.log(offset);
    const response = await axios.get(
      baseUrl + `$limit=${i.filter}&$offset=${offset}`
    );
    commit("SET_METEORITES", response.data);
  },
  async currentMeteorites({ commit, state }, index) {
    let response = state.meteorites.slice(index.start, index.end);
    commit("CURRENT_METEORITES", response);
  },

  async loadFavorites({ commit }) {
    commit("ADD_FAVORITE", JSON.parse(window.localStorage.favoriteMeteorites));
  },
  async addToFavorites({ commit }, payload) {
    if (!state.favoriteMeteorites.includes(payload)) {
      const favorites = state.favoriteMeteorites;
      favorites.push(payload);
      window.localStorage.favoriteMeteorites = JSON.stringify(favorites);
      commit("SET_FAVORITES", favorites);
    }
  },
  async removeFavorite({ commit }, payload) {
    let favorites = state.favoriteMeteorites;
    favorites.splice(favorites.indexOf(payload), 1);
    window.localStorage.favoriteMeteorites = JSON.stringify(favorites);
    commit("SET_FAVORITES", favorites);
  },
  async syncFavorites({ commit }, payload) {
    let favorites = JSON.parse(payload);
    commit("SET_FAVORITES", favorites);
  },
  async addComparison({ commit }, payload) {
    if (!state.meteoriteComparison.includes(payload)) {
      const meteorites = state.meteoriteComparison;
      meteorites.push(payload);
      commit("SET_COMPARISON", meteorites);
    }
  },
  async removeComparison({ commit }, payload) {
    let meteorites = state.meteoriteComparison;
    meteorites.splice(meteorites.indexOf(payload), 1);
    commit("SET_COMPARISON", meteorites);
  }
};

const getters = {
  initialMeteorites: state => state.meteorites,
  meteoriteCount: state => state.meteorites.length,
  favorites: state => state.favoriteMeteorites,
  meteoriteComparison: state => state.meteoriteComparison
};

export default {
  state,
  getters,
  actions,
  mutations
};
