<template>
  <v-app>
    <navigation></navigation>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Navigation from "./components/layouts/Navigation.vue";

export default {
  name: "App",

  components: {
    Navigation,
  },

  data: () => ({
    //
  }),
};
</script>
