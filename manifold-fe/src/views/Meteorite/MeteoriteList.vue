<template>
  <v-data-iterator
    :items="meteorites"
    :items-per-page.sync="itemsPerPage"
    :page.sync="page"
    :search="search"
    :sort-by="sortBy.toLowerCase()"
    :sort-desc="sortDesc"
    hide-default-footer
    class="relative"
  >
    <!-- <template v-slot:header></template> -->
    <template v-slot:header>
      <v-toolbar dark color="#1b579e" class="mb-1 fixed" height="50px">
        <v-text-field
          v-model="search"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="mr-3 fixed"
          fixed
        >
        </v-text-field>
        <template v-if="$vuetify.breakpoint.smAndUp">
          <v-select
            v-model="sortBy"
            flat
            solo-inverted
            hide-details
            :items="keys"
            prepend-inner-icon="mdi-magnify"
            label="Sort by"
          >
          </v-select>
          <v-spacer></v-spacer>
          <v-btn-toggle v-model="sortDesc" mandatory>
            <v-btn large depressed color="#1b579e" :value="true">
              <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
            <v-btn large depressed color="#1b579e" :value="false">
              <v-icon>mdi-arrow-down</v-icon></v-btn
            >
          </v-btn-toggle>
        </template>
      </v-toolbar>
    </template>

    <template v-slot:default="props">
      <div class="overflow">
        <v-row>
          <v-col
            align-center
            v-for="item in props.items"
            :key="item.id"
            cols="12"
            sm="6"
            md="3"
            lg="3"
          >
            <meteorite-list-item :meteorite="item"></meteorite-list-item>
          </v-col>
        </v-row>
      </div>
    </template>

    <template v-slot:footer>
      <v-row
        class="mt-2 footer blue--text text--darken-2 blue-grey lighten-5"
        align="center"
        justify="center"
      >
        <span class="">Items per page</span>
        <v-menu offset-y v-model="showCaret">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              text
              color="primary"
              class="ml-4"
              v-bind="attrs"
              v-on="on"
            >
              {{ itemsPerPage }}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(number, index) in itemsPerPageArray"
              :key="index"
              @click="updateItemsPerPage(number)"
            >
              <v-list-item-title>{{ number }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>

        <span
          class="mr-3
            grey--text"
        >
          Page {{ page }} of {{ numberOfPages }}
        </span>
        <v-btn
          fab
          dark
          color="blue darken-3"
          class="mr-3"
          height="2em"
          width="2em"
          @click="formerPage"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          color="blue darken-3"
          class=" mr-2"
          height="2em"
          width="2em"
          @click="nextPage"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
    </template>
  </v-data-iterator>
</template>

<script>
// import MeteoriteListItem from "../components/MeteoriteListItem.vue";
import MeteoriteListItem from "./MeteoriteListItem.vue";
export default {
  components: { MeteoriteListItem },
  data() {
    return {
      showCaret: false,
      softDesc: false,
      meteors: null,
      meteorClass: null,
      search1: "",
      itemsPerPageArray: [25, 50, 100],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 25,
      sortBy: "name",
      keys: [
        "id",
        "name",
        "nametype",
        "recclass",
        "mass",
        "fall",
        "year",
        "reclat",
        "reclong",
        "geolocation",
      ],
    };
  },
  // components: { MeteoriteListItem },

  created() {
    this.meteors = JSON.parse(JSON.stringify(this.meteorites));
  },
  computed: {
    meteorites: function() {
      const array = this.$store.getters.initialMeteorites.map(
        (meteorite) => meteorite
      );

      return array.slice(0, 5);
    },
    numberOfPages() {
      return Math.ceil(this.meteorites.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
    filteredMeteors() {
      if (this.search1.length < 1)
        return this.$store.getters.initialMeteorites.map(
          (meteorite) => meteorite
        );

      return this.meteorites.filter((meteor) =>
        meteor.name.toLowerCase().includes(this.search1.toLowerCase())
      );
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    resort(recclass) {
      console.log("resort");
      this.meteors = JSON.parse(JSON.stringify(this.meteorites));
      this.meteorClass = this.meteors.filter(
        (meteor) => meteor.recclass == recclass
      );
    },
  },
};
</script>

<style>
.card {
  border: 3px solid red;
}
fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.overflow {
  height: 65vh;
  overflow: scroll;
}
.footer {
  padding: 4px 15px;
}
@media screen and (max-width: 1024px) {
  .overflow {
    height: 62vh;
    overflow: scroll;
  }
}
@media screen and (max-width: 1800px) {
  .overflow {
    height: 70vh;
    overflow: scroll;
  }
}
</style>
