import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#105bd8",
        darkPrimary: "#0b3d91",
        darkestPrimary: "#061f4a",
        base: "#212121",
        darkGray: "#323a45",
        lightGray: "#aeb0b5",
        white: "#fff",
        altPrimary: "#02bfe7",
        darkAltPrimary: "#046b99",
        darkestAltPrimary: "#00a6d2",
        secondary: "#dd361c",
        darkSecondary: "#c62d1f",
        darkestSecondary: "#99231b",
        lightSecondary: "#e59892",
        visited: "#4c2c92",
        focus: "#aeb0b5",
        warning: "#ff9d1e",

        error: colors.red.accent3
      },
      dark: {
        primary: "#105bd8",
        darkPrimary: "#0b3d91",
        darkestPrimary: "#061f4a",
        base: "#212121",
        darkGray: "#323a45",
        lightGray: "#aeb0b5",
        white: "#fff",
        altPrimary: "#02bfe7",
        darkAltPrimary: "#046b99",
        darkestAltPrimary: "#00a6d2",
        secondary: "#dd361c",
        darkSecondary: "#c62d1f",
        darkestSecondary: "#99231b",
        lightSecondary: "#e59892",
        visited: "#4c2c92",
        focus: "#aeb0b5",
        warning: "#ff9d1e"
      }
    }
  }
});

export default vuetify;
