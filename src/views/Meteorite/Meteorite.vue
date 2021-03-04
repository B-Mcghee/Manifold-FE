<template>
  <div class="relative">
    <div>
      <v-container fluid>
        <meteorite-list :category="categoryRoute"></meteorite-list>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import MeteoriteList from "./MeteoriteList.vue";
export default {
  components: { MeteoriteList },
  data() {
    return {
      category: undefined
    };
  },
  methods: {
    onStorageUpdate(event) {
      if (event.key === "favoriteMeteorites") {
        this.$store.dispatch("syncFavorites", event.newValue);
        this.name = event.newValue;
      }
    }
  },
  mounted() {
    this.category = "Meteorites";
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
    }
  },
  computed: {
    ...mapGetters(["favorites", "initialMeteorites", "meteoriteComparison"]),
    categoryRoute: function() {
      return this.$route.params;
    }
  }
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
