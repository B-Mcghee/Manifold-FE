<template>
  <div class="relative">
    <div class="  d-flex justify-center text-h3 my-8 font-weight-light">
      Meteorites
    </div>
    <div>
      <meteorite-list></meteorite-list>
      <!-- <meteorite-list-item :meteorite="meteorite"></meteorite-list-item> -->
      <!-- <meteorite-list></meteorite-list> -->
    </div>
  </div>
</template>

<script>
import MeteoriteList from "./MeteoriteList.vue";
// import MeteoriteList from "../components/MeteoriteList";
// import MeteoriteListItem from "../components/MeteoriteListItem";

export default {
  components: { MeteoriteList },
  data: () => ({
    meteorite: {
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
      },
    },
  }),
  methods: {
    onStorageUpdate(event) {
      if (event.key === "favoriteMeteorites") {
        this.$store.dispatch("syncFavorites", event.newValue);
        this.name = event.newValue;
      }
    },
  },
  mounted() {
    if (localStorage.favoriteMeteorites) {
      this.name = localStorage.favoriteMeteorites;
    }
    window.addEventListener("storage", this.onStorageUpdate);
  },
  beforeDestroy() {
    window.removeEventListener("storage", this.onStorageUpdate);
  },
  watch: {
    name(newName) {
      localStorage.favoriteMeteorites = newName;
    },
  },
};
</script>

<style scoped>
.relative {
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
