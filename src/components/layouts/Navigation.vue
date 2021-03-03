<template>
  <v-card data-testid="card">
    <v-toolbar flat color="darkSecondary white--text">
      <v-toolbar-title
        class="text-subtitle-1 text-sm-h6 text-md-h4 font-weight-medium font-weight-light font-italic"
      >
        Earth Meteorite Landings
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div>
        <template v-if="isMobile">
          <v-btn
            icon
            x-small
            v-for="(tab, i) in tabs"
            :key="i"
            :to="{ name: tab.name, params: { category: tab.tabName } }"
            :value="tab.name"
            class="mx-2"
            ><v-icon color="white" v-text="tab.icon" size="20"></v-icon
          ></v-btn>
        </template>
        <template v-else>
          <v-tabs
            height="100%"
            v-model="tab"
            icons-and-text
            color="primary"
            background-color="darkSecondary"
          >
            <v-tabs-slider color="white"></v-tabs-slider>
            <v-tab
              v-for="(tab, i) in tabs"
              :key="i"
              :to="{ name: tab.name, params: { category: tab.tabName } }"
              :value="tab.name"
              href="`${tab.name}`"
              class="white--text mb-1"
              >{{ tab.tabName
              }}<v-icon size="30" v-text="tab.icon" color="white"></v-icon
            ></v-tab>
          </v-tabs>
        </template>
      </div>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    tabs: [
      {
        name: "Meteorite",
        icon: "mdi-meteor",
        tabName: "Meteorites",
      },
      {
        name: "Category",
        icon: "mdi-star-shooting-outline",
        tabName: "Favorites",
      },
      {
        name: "Category",
        icon: "mdi-scale-balance",
        tabName: "Compare",
      },
    ],
    isMobile: false,
  }),

  beforeDestroy() {
    if (typeof window === "undefined") return;

    window.removeEventListener("resize", this.onResize, { passive: true });
  },

  mounted() {
    this.onResize();

    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>

<style></style>
