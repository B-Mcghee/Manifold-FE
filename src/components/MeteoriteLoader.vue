<template>
  <div class="mt-10">
    <div v-if="meteorites.length == 0"><closed></closed></div>
    <v-data-iterator
      v-else
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
        <v-toolbar
          dark
          color="darkPrimary"
          class="mb-1 fixed"
          height="52px"
          ref="listContainer"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            dense
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
            placeholder="Search"
            class="mr-3 fixed"
            fixed
          >
          </v-text-field>
          <template v-if="$vuetify.breakpoint.smAndUp">
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              dense
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            >
            </v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory class="ml-3" shaped>
              <v-btn dense color="focus" :value="true">
                <v-icon color="white">mdi-arrow-down</v-icon></v-btn
              >
              <v-btn depressed color="focus" :value="false">
                <v-icon color="white">mdi-arrow-up</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <div class="list-container overflow">
          <v-row>
            <v-col
              align-center
              v-for="item in props.items"
              :key="item.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <meteorite-list-item :meteorite="item"></meteorite-list-item>
            </v-col>
          </v-row>
        </div>
      </template>
    </v-data-iterator>
    <v-card
      v-if="meteorites.length !== 0"
      class="darkPrimary mb-12"
      absolute
      bottom
    >
      <v-footer fixed height="50px " class="white--text darkPrimary ">
        <v-row class="mt-2  " align="center" justify="center">
          <span class="font-weight-bold ">Items per page</span>
          <v-menu offset-y v-model="showCaret">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="white "
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
            white--text font-weight-medium "
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="white"
            height="2em"
            width="2em"
            @click="formerPage"
          >
            <v-icon color="primary">mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="white"
            class=" mr-2"
            height="2em"
            width="2em"
            @click="nextPage"
          >
            <v-icon color="primary">mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </v-footer>
    </v-card>
  </div>
</template>

<script>
import Closed from "../views/Closed.vue";
// import MeteoriteListItem from "../components/MeteoriteListItem.vue";

export default {
  components: { Closed },
  props: {
    meteorites: {
      type: Array,
    },
  },
  data() {
    return {
      showCaret: false,
      softDesc: false,

      meteorClass: null,
      search1: "",
      itemsPerPageArray: [25, 50, 100],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 25,
      sortBy: "name",
      keys: ["id", "name", "recclass", "mass", "year", "reclong", "reclong"],
      height: undefined,
      isMobile: false,
      padless: false,
      variant: "fixed",
    };
  },
  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
    numberOfPages() {
      return Math.ceil(this.meteorites.length / this.itemsPerPage);
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
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },
};
</script>

<style scoped>
.card {
  border: 3px solid red;
}

.overflow {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
