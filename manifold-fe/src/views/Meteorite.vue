<template>
  <div>
    <div class="  d-flex justify-center text-h3 my-6 font-weight-light">
      Meteorites
    </div>
    <div class="list-container">
      <meteorite-list-item :meteorite="meteorite"></meteorite-list-item>
      <!-- <meteorite-list></meteorite-list> -->
    </div>
  </div>
</template>

<script>
// import MeteoriteList from "../components/MeteoriteList";
// import MeteoriteListItem from "../components/MeteoriteListItem";
import MeteoriteListItem from "../components/MeteoriteListItem";
export default {
  components: { MeteoriteListItem },
  data: () => ({
    meteorite: {
      name: "Aachen",
      id: "1",
      nametype: "Valid",
      recclass: "L5",
      mass: "21",
      fall: "Fell",
      year: "1880-01-01T00:00:00.000",
      reclat: "50.775000",
      reclong: "6.083330",
      geolocation: {
        type: "Point",
        coordinates: [6.08333, 50.775],
      },
    },
  }),
};
</script>

<style scoped lang="scss"></style>
