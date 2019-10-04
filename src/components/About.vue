<template>
  <v-container>
    <v-layout>
      <v-flex>
        <Nav1 />
      </v-flex>
    </v-layout>

    <v-layout class="caption">
      <v-row justify="center">
        <p class="text-center my-10">We Don’t Just Store Photos And Videos — It’s How We Improve Art</p>
      </v-row>
    </v-layout>

    <v-layout>
      <v-row justify="center">
        <v-img
          src="../assets/bg7.jpg"
          width="100"
          height="50vh"
          gradient="190deg, rgba(0,0,0,.2), rgba(0,0,0,.9)"
          class="pa-10"
        >
          <v-row align="start" class="fill-height">
            <p class="white--text headline" style="max-width:20%;">"Skippa is bible of art storage."</p>
          </v-row>
          <p class="white--text">Skippa</p>
        </v-img>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import Nav1 from "./Nav1";
export default {
  components: {
    Nav1
  }
};
</script>

<style lang="scss" scoped>
.caption {
  width: 70%;
  text-align: center;
  margin: auto;
  @media (max-width: 600px) {
    width: 100%;
  }

  p {
    font-size: 4em;
    line-height: 1em;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
    @media (max-width: 768px) {
      font-size: 2em;
    }
  }
}
</style>