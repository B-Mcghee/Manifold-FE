<template>
  <div>
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
        <div
          :style="{
            maxHeight: ` ${height}px`,
            overflow: 'scroll',
          }"
        >
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
    <v-card class="darkPrimary bottom-0" absolute bottom width="100%">
      <!-- <v-footer height="100px" color="darkPrimary">
        <v-card class="white--text font-weight-medium"
          ><v-card-title>Items per page</v-card-title></v-card
        >
      </v-footer> -->
      <v-row
        class="mt-2 footer white--text darkPrimary "
        align="center"
        justify="center"
      >
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
    </v-card>
  </div>
</template>

<script>
// import MeteoriteListItem from "../components/MeteoriteListItem.vue";

export default {
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
      keys: ["id", "name", "recclass", "mass", "year", "reclong", "reclong"],
      height: undefined,
    };
  },
  // components: { MeteoriteListItem },
  mounted() {
    this.$nextTick(function() {
      this.getheight();
    });
  },
  created() {
    this.meteors = JSON.parse(JSON.stringify(this.meteorites));
  },
  computed: {
    meteorites: function() {
      const array = this.$store.getters.initialMeteorites.map(
        (meteorite) => meteorite
      );

      return array;
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
    overflowing: function() {
      // const height = document.body.scrollHeight;
      // console.log(height);
      var viewPort = 0;

      console.log(viewPort);
      return `${viewPort}px`;
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
    getheight() {
      // const height = document.body.scrollHeight;
      // console.log(height);

      const totalHeight = window.innerHeight;
      const heightToTop = this.$refs;
      console.log(heightToTop);
      this.height = totalHeight - (250 + 50);
      console.log(this.height);
      return this.height;
    },
  },
};
</script>

<style scoped>
.card {
  border: 3px solid red;
}
.footer {
  margin-bottom: 30px;
}
fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.overflow {
  height: 70vh;
  overflow: scroll;
}
.footer {
  padding: 4px 15px;
}
@media screen and (max-width: 1024px) {
  .overflow {
    height: 70vh;
    overflow: scroll;
  }
}
@media screen and (max-width: 800px) {
  .overflow {
    height: 73vh;
    overflow: scroll;
  }
}
@media screen and (max-width: 500px) {
  .overflow {
    height: 60vh;
    overflow: scroll;
  }
}
</style>
