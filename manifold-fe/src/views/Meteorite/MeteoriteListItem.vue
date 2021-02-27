<template>
  <div>
    <base-card class="mx-auto my-2">
      <template v-slot:header>
        <v-toolbar-title>{{ meteorite.name }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <h3>ID: {{ meteorite.id }}</h3>
      </template>
      <template v-slot:body>
        <v-container>
          <v-layout row>
            <v-flex xs12 class="pl-4 ">
              Mass:
              <span class="blue--text text--darken-3">
                {{ meteorite.mass }}(g)</span
              >
            </v-flex>
            <v-flex xs12 class="pl-4 mt-1">
              Reclat:
              <span class="blue--text text--darken-3"
                >({{ meteorite.reclat }})</span
              >
            </v-flex>
            <v-flex xs12 class="pl-4 mt-1">
              Reclong:
              <span class="blue--text text--darken-3"
                >({{ meteorite.reclong }})</span
              >
            </v-flex>
            <v-flex xs12 class="pl-4 mt-1">
              Nametype:
              <span class="blue--text text--darken-3">{{
                meteorite.nametype
              }}</span>
            </v-flex>
            <v-flex xs12 class="pl-4 mt-1">
              Fall:
              <span class="blue--text text--darken-3">{{
                meteorite.fall
              }}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </template>
      <template v-slot:footer>
        <v-layout block row class="py-3">
          <v-flex block xs12>
            <v-btn
              x-small
              outlined
              text
              width="100%"
              height="48px"
              class="text-subtitle-1"
            >
              <router-link
                :to="{
                  name: 'Recclass',
                  params: { recclass: meteorite.recclass },
                }"
                >Reclass: {{ meteorite.recclass }}</router-link
              >
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn
              x-small
              outlined
              text
              width="100%"
              height="48px"
              class="text-subtitle-1"
              ><router-link
                :to="{
                  name: 'Year',
                  params: { year: meteorite.year },
                }"
              >
                year:{{ meteorite.year | formatDate }}</router-link
              ></v-btn
            >
          </v-flex>

          <v-flex xs6 class="mt-1 mx-auto">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn width="100%" v-bind="attrs" v-on="on">
                  <favorite-icon
                    @toggleFavorite="toggleFavorite"
                    :favorite="JSON.parse(meteorite.id)"
                  ></favorite-icon>
                </v-btn>
              </template>
              <span>Favorite</span>
            </v-tooltip>
          </v-flex>
          <v-flex xs6 class="mt-1">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn width="100%" v-bind="attrs" v-on="on">
                  <compare-icon></compare-icon>
                </v-btn>
              </template>
              <span>Compare Meteorites</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </template>
    </base-card>

    <!-- <v-card
      raised
      color="deep-grey accent-2"
      elevation="4"
      class=" card mx-auto rounded-lg my-10"
      outlined
      max-width="250"
    >
      <v-list-item>
        <v-list-item-content>
          <div class="overline mb-3">id: {{ meteorite.id }}</div>
          <v-card-title class="headline mb-1">{{
            meteorite.name
          }}</v-card-title>
          <v-list-item-content class="my-2"
            >Mass: {{ meteorite.mass }} (g)</v-list-item-content
          >
          <v-list-item-subtitle
            >Geolocation: {{ meteorite | formatLocation }}</v-list-item-subtitle
          >
          <v-list-item-subtitle
            >Name Type: {{ meteorite.nametype }}</v-list-item-subtitle
          >
          <v-list-item-subtitle
            >Fall: {{ meteorite.fall }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider class="grey darken-6 my-3"></v-divider>
      <v-card-actions>
        <div class="d-flex flex-wrap">
          <v-btn x-small rounded outlined text class=" mx-1 my-1">
            <router-link
              :to="{
                name: 'Recclass',
                params: { recclass: meteorite.recclass },
              }"
              >Recclass: {{ meteorite.recclass }}</router-link
            >
          </v-btn>
          <v-btn x-small rounded outlined text class=" mx-1 my-1"
            ><router-link
              :to="{
                name: 'Year',
                params: { year: meteorite.year },
              }"
              >Year: {{ meteorite.year | formatDate }}</router-link
            ></v-btn
          >
          <button><favorite></favorite></button>
        </div>
      </v-card-actions>
    </v-card> -->
  </div>
</template>

<script>
import CompareIcon from "@/components/UI/CompareIcon.vue";
import FavoriteIcon from "@/components/UI/FavoriteIcon.vue";

// import Favorite from "./UI/Favorite";
export default {
  components: { FavoriteIcon, CompareIcon },
  props: {
    meteorite: Object,
  },
  data: () => ({
    favorite: false,
  }),
  methods: {
    resortChild(recclass) {
      console.log(recclass);
      this.$emit("resort", recclass);
    },
    toggleFavorite() {
      // console.log(payload);
      // console.log("bre");
      // // let id = JSON.parse(meteorite.id);
      // // const payload = id;
      // this.$store.dispatch("addToFavorites", payload);
    },
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
    },
    formatLocation: function(values) {
      if (values) {
        var x = JSON.parse(JSON.stringify(values));
        if (x.geolocation) {
          var geolocation = JSON.parse(JSON.stringify(x.geolocation));
          return geolocation.type + " [" + geolocation.coordinates + "]";
        }
      }
    },
  },
  computed: {
    isFavorite: function() {
      return "";
    },
  },
};
</script>

<style></style>
