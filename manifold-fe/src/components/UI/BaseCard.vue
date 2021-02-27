<template>
  <v-card raised max-width="250" shaped>
    <v-toolbar dense width="100%" color="#1b579e" class="white--text">
      <slot name="header"></slot>
    </v-toolbar>
    <div class="grey--text text--darken-5 my-4">
      <slot name="body"></slot>
    </div>
    <v-footer class="white--text blue-grey lighten-5">
      <slot name="footer"></slot>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>
