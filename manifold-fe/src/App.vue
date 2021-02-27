<template>
  <v-app>
    <navigation class="width"></navigation>
    <v-main class="mt-16">
      <router-view></router-view>
    </v-main>
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
