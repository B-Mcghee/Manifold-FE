<template>
  <v-btn width="50px">
    <slot></slot>
  </v-btn>
</template>

<script>
import { VBtn } from "vuetify-lib";
export default {
  props: ["size"]
};
</script>

<style></style>
