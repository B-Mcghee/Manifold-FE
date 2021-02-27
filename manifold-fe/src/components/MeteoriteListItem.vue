<template>
  <div>
    <base-card>
      <template v-slot:header>
        <v-toolbar-title>{{ meteorite.name }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <h3>ID: {{ meteorite.id }}</h3>
      </template>
      <template v-slot:body>
        <v-container>
          <v-layout row>
            <v-flex xs12 class="pl-4">
              Mass: <span> {{ meteorite.mass }}(g)</span>
            </v-flex>
            <v-flex xs12 class="pl-4">
              Reclat:
              <span>({{ meteorite.reclat }})</span>
            </v-flex>
            <v-flex xs12 class="pl-4">
              Reclong:
              <span>({{ meteorite.reclong }})</span>
            </v-flex>
            <v-flex xs12 class="pl-4">
              Nametype:
              <span>{{ meteorite.nametype }}</span>
            </v-flex>
          </v-layout>
        </v-container>

        <!-- <v-list-item>
          <v-list-item-content>
            <div class="overline mb-3">id: {{ meteorite.id }}</div>
            <v-list-item-content class="my-2"
              >Mass: {{ meteorite.mass }} (g)</v-list-item-content
            >
            <v-list-item-subtitle
              >Geolocation:
              {{ meteorite | formatLocation }}</v-list-item-subtitle
            >
            <v-list-item-subtitle
              >Name Type: {{ meteorite.nametype }}</v-list-item-subtitle
            >
            <v-list-item-subtitle
              >Fall: {{ meteorite.fall }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item> -->
      </template>
      <template v-slot:footer>
        <v-layout>
          <v-flex xs6>
            <v-btn x-small outlined text>
              <router-link
                :to="{
                  name: 'Recclass',
                  params: { recclass: meteorite.recclass },
                }"
                >Recclass: {{ meteorite.recclass }}</router-link
              >
            </v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn x-small outlined text
              ><router-link
                :to="{
                  name: 'Year',
                  params: { year: meteorite.year },
                }"
                >Year: {{ meteorite.year | formatDate }}</router-link
              ></v-btn
            >
          </v-flex>
          <v-flex>
            <div><favorite-icon></favorite-icon></div>
          </v-flex>
          <v-flex xs6
            ><div><compare-icon></compare-icon></div>
          </v-flex>
          <v-flex xs12
            ><v-flex xs6 class="d-inline">
              <v-flex xs12> </v-flex>
              <v-flex xs12 class="d-inline "> </v-flex>
            </v-flex>
            <v-flex xs6 class="d-flex">
              <v-flex xs6 class="m-0 d-inline"></v-flex> </v-flex
          ></v-flex>
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
import BaseCard from "./UI/BaseCard.vue";
import CompareIcon from "./UI/CompareIcon.vue";
import FavoriteIcon from "./UI/FavoriteIcon.vue";

// import Favorite from "./UI/Favorite";
export default {
  components: { BaseCard, FavoriteIcon, CompareIcon },
  props: {
    meteorite: Object,
  },
  methods: {
    resortChild(recclass) {
      console.log(recclass);
      this.$emit("resort", recclass);
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
};
</script>

<style></style>
