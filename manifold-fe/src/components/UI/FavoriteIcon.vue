<template>
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 111 197.29"
    :height="height"
    :width="width"
    @click="toggleFavorite"
  >
    <transition v-if="isFavorite" name="bookmark">
      <polygon
        id="background"
        points="109.5 193.5 56.02 136.52 1.5 193.5 1.5 1.5 109.5 1.5 109.5 193.5"
        fill="#1b579e"
        stroke="#000"
        stroke-miterlimit="10"
        stroke-width="3"
      />
    </transition>
    <transition v-else name="bookmark">
      <polygon
        id="background"
        points="109.5 193.5 56.02 136.52 1.5 193.5 1.5 1.5 109.5 1.5 109.5 193.5"
        :fill="bookmark"
        stroke="#000"
        stroke-miterlimit="10"
        stroke-width="3"
      />
    </transition>
    <transition v-if="isFavorite" name="star">
      <polygon
        id="star"
        points="78.31 91.9 55 80.53 31.54 91.57 36.16 67.86 17.35 50.91 43.52 47.63 55.35 26.11 66.9 47.79 93.03 51.44 74 68.13 78.31 91.9"
        fill="#f9ff00"
        stroke="#000"
        stroke-miterlimit="10"
        stroke-width="3"
      />
    </transition>
    <transition name="star">
      <polygon
        id="star"
        points="78.31 91.9 55 80.53 31.54 91.57 36.16 67.86 17.35 50.91 43.52 47.63 55.35 26.11 66.9 47.79 93.03 51.44 74 68.13 78.31 91.9"
        :fill="star"
        stroke="#000"
        stroke-miterlimit="10"
        stroke-width="3"
      />
    </transition>
  </svg>
</template>

<script>
export default {
  props: ["favorite"],
  data: () => ({
    height: "2em",
    width: "2em",
    starFill: "#fff",
    gold: "#ffd700",
    backgroundFill: "#fff",
    favoriteIds: [],
    name: "",
  }),
  methods: {
    toggleFavorites() {
      this.starFill == "#fff"
        ? (this.starFill = "#f9ff00")
        : (this.starFill = "#fff");
      this.backgroundFill == "#fff"
        ? (this.backgroundFill = "#1b579e")
        : (this.backgroundFill = "#fff");
    },
    toggleFavorite() {
      if (!this.favoriteArray.includes(this.favorite)) {
        console.log("crumbs");
        this.$store.dispatch("addToFavorites", this.favorite);
      } else {
        this.$store.dispatch("removeFavorite", this.favorite);
      }
    },
  },
  mounted() {
    this.favoriteIds = [...this.favoriteArray];
  },
  computed: {
    star() {
      const fill = this.starFill;
      return fill;
    },
    bookmark() {
      const fill = this.backgroundFill;
      return fill;
    },
    isFavorite() {
      if (this.favoriteArray.includes(this.favorite)) {
        return true;
      }
      return false;
    },
    favoriteArray() {
      const array = this.$store.state.meteorites.favoriteMeteorites.map(
        (e) => e
      );
      return array;
    },
  },
};
</script>

<style>
#bookmark {
  animation-name: bookmark-complete;
  animation-duration: 1s;
  animation-iteration-count: 1;
}
#star {
  animation: star-complete;
  animation-duration: 1s;
  animation-iteration-count: 1;
}
.bookmark-enter {
  opacity: 0;
  stroke-dasharray: 0;
}

.bookmark-enter-active,
.bookmark-leave-active {
  transition: all 0.5s ease-in-out;
}

.bookmark-enter-from,
.bookmark-leave-to {
  opacity: 0;
  stroke-dasharray: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
