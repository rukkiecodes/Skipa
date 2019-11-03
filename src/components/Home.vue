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
              <v-col class="pa-2">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content class="myBounce animated slideInLeft">
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
  height: 100vh;
  overflow: hidden;

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
      margin-top: 40%;
    }
    @media (min-width: 768px) {
      margin-top: 20%;
    }
    .myBounce {
      animation: bouncer 1s infinite alternate;
    }
    @keyframes bouncer {
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
