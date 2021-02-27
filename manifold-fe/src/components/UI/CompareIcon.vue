<template>
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 109.3 106.45"
    :height="height"
    :width="width"
    @click="compareMeteorite"
  >
    <transition name="border">
      <rect
        id="border"
        v-if="animate"
        x="1"
        y="1"
        width="107"
        height="104"
        stroke="#000"
        stroke-miterlimit="10"
        :stroke-width="stroke"
        :fill="border"
      />
    </transition>

    <path
      d="M102.83,103.87a3.54,3.54,0,0,1-2.47-1L68.54,71.7a3.62,3.62,0,0,1-.07-5.09,3.51,3.51,0,0,1,5-.07L105.3,97.71a3.62,3.62,0,0,1,.07,5.08A3.49,3.49,0,0,1,102.83,103.87Z"
      transform="translate(0.92 0.58)"
    />
    <path
      d="M71,67.53a1.5,1.5,0,0,1,1.06.44L103.9,99.14a1.61,1.61,0,0,1,0,2.26,1.52,1.52,0,0,1-2.17,0L69.94,70.27a1.61,1.61,0,0,1,0-2.27,1.5,1.5,0,0,1,1.1-.47m0-4a5.52,5.52,0,0,0-4,1.69h0a5.61,5.61,0,0,0,.11,7.9L99,104.29a5.53,5.53,0,0,0,7.85-.11h0a5.63,5.63,0,0,0-.11-7.9L74.87,65.11A5.53,5.53,0,0,0,71,63.53Z"
      transform="translate(0.92 0.58)"
    />
    <path
      d="M3,40.59c.84,50.11,74.87,50.12,75.72,0C77.88-9.52,3.85-9.53,3,40.59Z"
      transform="translate(0.92 0.58)"
      fill="#c9fbff"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="6"
    />
  </svg>
</template>

<script>
export default {
  data: () => ({
    height: "1em",
    width: "1em",
    fill: "#fff",
    stroke: 2,
    animate: false,
  }),
  methods: {
    compareMeteorite() {
      this.animate = !this.animate;

      this.fill == "#fff" ? (this.fill = "#1b579e") : (this.fill = "#fff");
    },
  },
  computed: {
    border() {
      const fill = this.fill;
      return fill;
    },
  },
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
