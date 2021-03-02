<template>
  <div>
    <base-card class="mx-auto my-2" data-testid="base-card">
      <template v-slot:header>
        <v-tooltip v-if="meteorite.name.length > 13" top>
          <template v-slot:activator="{ on, attrs }">
            <v-toolbar-title v-bind="attrs" v-on="on" data-testid="toolbar">{{
              meteorite.name | formatName
            }}</v-toolbar-title>
          </template>
          <span>{{ meteorite.name }}</span>
        </v-tooltip>
        <v-toolbar-title v-else>{{
          meteorite.name | formatName
        }}</v-toolbar-title>

        <v-spacer></v-spacer>
        <h3 class="text-h6">ID: {{ meteorite.id }}</h3>
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

          <v-flex xs6 class="mt-1 mx-auto ">
            <favorite-icon
              :favorite="JSON.parse(meteorite.id)"
              ref="icon"
            ></favorite-icon>
          </v-flex>
          <v-flex xs6 class="mt-1">
            <compare-icon :meteorite="JSON.parse(meteorite.id)"></compare-icon>
          </v-flex>
        </v-layout>
      </template>
    </base-card>
  </div>
</template>

<script>
import CompareIcon from "@/components/UI/CompareIcon.vue";
import FavoriteIcon from "@/components/UI/FavoriteIcon.vue";
import BaseCard from "@/components/UI/BaseCard.vue";
export default {
  components: { FavoriteIcon, CompareIcon, BaseCard },
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
    toggle() {},
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
    formatName: function(value) {
      if (value.length > 15) {
        return value.substring(0, 15);
      }
      return value;
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

<style>
a {
  text-decoration: none;
}
</style>
