<template>
  <v-container>
    <h1 class="text-center text-h3 blue--text text--darken-3 my-2 pb-2">
      Your Favorite Meteorites
    </h1>
    <v-layout row>
      <v-flex
        xs12
        sm6
        md4
        v-for="(item, index) in favoriteMeteorites"
        :key="index"
        class="my-5"
      >
        <meteorite-list-item :meteorite="item"></meteorite-list-item>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meteoriteIds: function() {
      return this.$store.state.meteorites.favoriteMeteorites.map(m => m);
    },
    favoriteMeteorites() {
      const array = this.$store.state.meteorites.meteorites.filter(
        meteorite => {
          if (this.meteoriteIds.find(e => e == meteorite.id)) {
            return true;
          }
        }
      );
      console.log(array);
      return array;
    }
  }
};
</script>

<style></style>
