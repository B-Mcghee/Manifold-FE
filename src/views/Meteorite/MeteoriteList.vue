<template>
  <div>
    <div
      class="  d-flex justify-center text-h5  pb-4 font-weight-bold primary--text text-lg-h4"
    >
      <h1 v-if="!year">{{ title }}</h1>
      <h1 v-else>{{ title }}</h1>
    </div>

    <meteorite-loader :meteorites="loadMeteorites"></meteorite-loader>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MeteoriteLoader from "@/components/MeteoriteLoader.vue";
export default {
  props: {
    category: {
      type: Object
    }
  },
  components: { MeteoriteLoader },
  data() {
    return {
      year: false,
      title: "Meteorites"
    };
  },
  methods: {
    allMeteorites() {
      return this.initialMeteorites;
    },
    favoriteList() {
      const array = [];
      this.favorites.forEach(m => {
        this.initialMeteorites.filter(meteorite => {
          if (m == meteorite.id) {
            array.push(meteorite);
          }
        });
      });
      return array;
    },
    comparisonList() {
      const array = [];
      this.meteoriteComparison.forEach(m => {
        this.initialMeteorites.filter(meteorite => {
          if (m == meteorite.id) {
            array.push(meteorite);
          }
        });
      });
      return array;
    },
    propertyList(value) {
      value === "year"
        ? this.alteredTitle(`${this.category.value.substring(0, 4)} /`)
        : this.alteredTitle(`${this.category.value} /`);

      const array = this.initialMeteorites.filter(
        meteorite =>
          meteorite[`${this.category.property}`] == this.category.value
      );
      return array;
    },
    alteredTitle(value) {
      this.title = value + " Meteorites";
    }
  },

  computed: {
    ...mapGetters(["favorites", "initialMeteorites", "meteoriteComparison"]),
    loadMeteorites: function() {
      if (this.category.category) {
        switch (this.category.category) {
          case "Compare":
            this.alteredTitle("Compare");
            return this.comparisonList();
          case "Favorites":
            this.alteredTitle("Favorite");
            return this.favoriteList();
          default:
            break;
        }
      } else if (this.category.property) {
        return this.propertyList(this.category.property);
      }
      this.alteredTitle("All");
      return this.allMeteorites();
    }
  },
  filters: {}
};
</script>

<style></style>
