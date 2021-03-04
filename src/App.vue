<template>
  <v-app>
    <navigation class="width"></navigation>
    <transition name="slide" mode="out-in">
      <v-main class=" mt-10">
        <router-view></router-view>
      </v-main>
    </transition>
  </v-app>
</template>

<script>
import Navigation from "./components/layouts/Navigation.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",

  components: {
    Navigation,
  },
  methods: {
    ...mapActions(["fetchMeteorites", "loadFavorites"]),
  },
  computed: {
    ...mapGetters(["initialMeteorites"]),
  },
  created() {
    this.fetchMeteorites();
    this.loadFavorites();
  },
};
</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
