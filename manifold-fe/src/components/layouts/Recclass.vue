<template>
  <div>
    <v-container>
      <h2 class="text-h4 text-sm-h2 d-flex justify-center my-10">
        <router-link :to="{ name: 'Meteorite' }">All Meteorites</router-link
        ><span>/</span>{{ recclass }}
      </h2>
      <v-layout row>
        <v-flex
          xs12
          sm6
          md4
          v-for="(meteorite, index) in meteorites"
          :key="index"
          class="my-5 mx-auto"
        >
          <meteorite-list-item :meteorite="meteorite"></meteorite-list-item>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recclass: this.$route.params.recclass,
    };
  },
  computed: {
    meteorites: function() {
      let value = this.recclass;
      console.log(value);
      return this.$store.getters.initialMeteorites.filter(
        (meteorite) => meteorite.recclass == value
      );
    },
  },
};
</script>

<style></style>
