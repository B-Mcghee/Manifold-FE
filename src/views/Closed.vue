<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="350">
      <v-card>
        <v-card-title class="headline">
          No Meteorites Chosen
        </v-card-title>
        <v-card-text
          >Select meteorites and come back to visit this page!</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="darkPrimary white--text"
            @click.prevent="
              goBack();
              $router.go(-1);
            "
          >
            Go Back
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
  methods: {
    goBack() {
      this.dialog = false;
    },
  },
};
</script>

<style></style>
