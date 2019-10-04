<template>
  <v-container class="home" fluid>
    <v-layout row wrap>
      <v-col>
        <Nav1 />
      </v-col>
    </v-layout>

    <v-layout wrap row>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-card class="mx-auto" max-width="100%" height="80vh" tile>
          <v-img height="100%" src="../assets/bg2.jpg">
            <v-row align="end" class="fill-height">
              <v-col class="pa-10">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
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
import Nav1 from "./Nav1";
export default {
  data: () => ({
    
  }),
  components: {
    Nav1
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0;
  padding: 0;
}
</style>