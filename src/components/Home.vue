<template>
  <v-container class="home" fluid>
    <v-layout wrap row>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card class="mx-auto" max-width="100%" height="100vh" tile>
          <v-img height="100%" src="../assets/bg2.jpg">
          <Nav1 />
            <v-row align="end" class="fill-height mt-n10">
              <v-col class="pa-10">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content class="bounce">
                    <v-list-item-title class="display-3">Skippa</v-list-item-title>
                    <v-list-item-subtitle class="body-1">Powered by creators everywhere</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Nav1 from "./Nav1"
export default {
  components: {
    Nav1
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0;
  padding: 0;

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
</style>
