<template>
  <div class="relative">
    <div
      class="  d-flex justify-center text-h3 my-2 pb-4 font-weight-bold primary--text text-lg-h3"
    >
      Meteorites
    </div>
    <div>
      <v-container>
        <meteorite-list></meteorite-list>
      </v-container>

      <!-- <meteorite-list-item :meteorite="meteorite"></meteorite-list-item> -->
      <!-- <meteorite-list></meteorite-list> -->
    </div>
  </div>
</template>

<script>
import MeteoriteList from "./MeteoriteList.vue";

export default {
  components: { MeteoriteList },
  data: () => ({}),
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
