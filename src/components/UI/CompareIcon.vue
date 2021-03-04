<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        width="100%"
        @click.prevent="compareMeteorite"
        v-bind="attrs"
        v-on="on"
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 163 158.49"
          :height="height"
          :width="width"
        >
          <transition v-if="compare" name="border">
            <rect
              x="1"
              y="1"
              width="161"
              height="156.49"
              stroke="#000"
              stroke-miterlimit="10"
              :stroke-width="stroke"
              fill="#1b579e"
            />
          </transition>
          <transition v-else name="border">
            <rect
              x="1"
              y="1"
              width="161"
              height="156.49"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="0"
              fill="#fff"
            />
          </transition>
          <path
            d="M137.45,134.74a6.9,6.9,0,0,1-4.61-2.09l-45-44c-2.28-2.23-2.92-5.46-1.38-7.06a3.28,3.28,0,0,1,2.39-.91,6.9,6.9,0,0,1,4.61,2.09l45.05,44c2.28,2.23,2.91,5.46,1.38,7.05A3.26,3.26,0,0,1,137.45,134.74Z"
          />
          <path
            d="M88.81,82.65A4.89,4.89,0,0,1,92,84.17l45.05,44c1.68,1.64,1.91,3.63,1.33,4.24a1.35,1.35,0,0,1-1,.29,4.89,4.89,0,0,1-3.21-1.51l-45-44c-1.68-1.64-1.92-3.64-1.34-4.24a1.34,1.34,0,0,1,1-.3m0-4A5.19,5.19,0,0,0,85,80.18h0c-2.33,2.41-1.69,6.83,1.42,9.87l45,44a8.82,8.82,0,0,0,6,2.65,5.21,5.21,0,0,0,3.84-1.52h0c2.32-2.41,1.68-6.83-1.43-9.87l-45-44a8.81,8.81,0,0,0-6-2.66Z"
          />
          <path
            d="M19.92,53.66c.84,50.11,74.87,50.12,75.72,0C94.8,3.54,20.77,3.54,19.92,53.66Z"
            fill="#c9fbff"
            stroke="#000"
            stroke-miterlimit="10"
            stroke-width="6"
          /></svg
      ></v-btn>
    </template>
    <span>Compare Meteorites</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    compare: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    height: "2em",
    width: "2em",
    stroke: 2
  }),
  methods: {
    compareMeteorite() {
      this.$emit("compareMeteorite");
    }
  }
};
</script>

<style>
#border {
  animation-name: bookmark-complete;
  animation-duration: 1s;
  animation-iteration-count: 1;
}
.border-enter {
  opacity: 0;
  stroke-dasharray: 0;
}

.border-enter-active,
.border-leave-active {
  transition: all 0.5s ease-in-out;
}

.border-enter-from,
.border-leave-to {
  opacity: 0;
  stroke-dasharray: 0;
}
</style>
