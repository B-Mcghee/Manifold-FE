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
        <template $vuetify.breakpoint.smAndUp>
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
              :to="{ name: tab.name }"
              :value="tab.name"
              href="`${tab.name}`"
              class="white--text mb-1"
              >{{ tab.tabName
              }}<v-icon size="30" v-text="tab.icon" color="white"></v-icon
            ></v-tab>
          </v-tabs>
        </template>
        <template class="d-">
          <v-btn
            icon
            x-small
            v-for="(tab, i) in tabs"
            :key="i"
            :to="{ name: tab.name }"
            :value="tab.name"
            class="mx-2"
            ><v-icon color="white" v-text="tab.icon" size="20"></v-icon
          ></v-btn>
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
        name: "Favorite",
        icon: "mdi-star-shooting-outline",
        tabName: "Favorites",
      },
      {
        name: "Compare",
        icon: "mdi-scale-balance",
        tabName: "Compare",
      },
    ],
  }),
  mounted() {},
};
</script>

<style></style>
