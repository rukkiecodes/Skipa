<template>
  <v-container class="home" fluid>
    <v-layout wrap row>
      <video poster="../assets/poster.png" class="myVideo" muted autoplay loop>
        <source src="../assets/vid.mp4" type="video/mp4" />
      </video>
      <v-layout>
        <v-flex>
          <Nav1 />
          <v-container class="fill-height advert">
            <v-row class="mt-10">
              <v-col class="pa-10">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content class="bounce">
                    <v-list-item-title class="display-4">Skippa</v-list-item-title>
                    <v-list-item-subtitle class="headline">Powered by creators everywhere</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
      </v-layout>
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
.home {
  margin: 0;
  padding: 0;

  .myVideo {
    position: fixed;

    @media (min-aspect-ratiio: 16/9) {
      width: 100%;
      height: auto;
    }

    @media (max-aspect-ratiio: 16/9) {
      width: auto;
      height: 100%;
    }
  }

  .advert {
    @media (max-width: 768px) {
      margin-top: 30vh;
    }
    @media (min-width: 768px) {
      margin-top: 25vh;
    }
    .bounce {
      animation: bounce 1s infinite alternate;
    }
    @keyframes bounce {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-15px);
      }
    }
  }
}
</style>
