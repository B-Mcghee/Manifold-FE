<template>
  <div>
    <h2 class="text-h4 text-sm-h2 d-flex justify-center my-10">
      <router-link :to="{ name: 'Meteorite' }">All Meteorites</router-link
      ><span>/</span>{{ year | formatDate }}
    </h2>
    <v-layout row>
      <v-flex
        xs12
        sm6
        md4
        lg3
        v-for="(meteorite, index) in meteorites"
        :key="index"
        class="my-5 mx-auto"
      >
        <meteorite-list-item :meteorite="meteorite"></meteorite-list-item>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: this.$route.params.year
    };
  },
  computed: {
    meteorites: function() {
      let value = this.year;
      console.log(value);
      return this.$store.getters.initialMeteorites.filter(
        meteorite => meteorite.year == value
      );
    }
  },
  filters: {
    formatDate: function(value) {
      if (value) {
        var date = new Date(value);
        var parsedDate = date.getFullYear();
        return parsedDate;
      } else {
        return "N/A";
      }
    }
  }
};
</script>

<style></style>
