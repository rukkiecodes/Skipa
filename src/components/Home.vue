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

    <v-layout class="imgk mx-auto" row wrap>
      <v-layout row wrap class="imgs my-10">
        <v-flex v-for="(homeCard, id) in homeCards" :key="id" class="my-5" xs12 sm6 md4 lg4 xl4>
          <v-card class="v-card mx-auto" raised>
            <v-card-title class="pa-2 card-title">
              <v-layout>
                <v-flex xs3 sm3 md3 lg3 xl3>
                  <v-avatar class="card-avatar">
                    <v-img :src="homeCard.avatar" width="1.2em" height="auto"></v-img>
                  </v-avatar>
                </v-flex>

                <v-flex xs7 sm7 md7 lg7 xl7>
                  <div class="title-texts mt-n1">
                    <p>{{ homeCard.title }}</p>
                    <h6 class="mt-n8">{{ homeCard.review }}</h6>
                  </div>
                </v-flex>

                <v-flex xs3 sm3 md3 lg3 xl3>
                  <v-btn text icon color="grey darken-3">
                <v-icon>{{ homeCard.buttons.download }}</v-icon>
              </v-btn>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-img :src="homeCard.img" height="auto"></v-img>

            <v-card-actions>
              <v-row justify="space-around">
                <v-btn text icon color="red">
                  <v-icon>{{ homeCard.buttons.heart }}</v-icon>
                </v-btn>
                <v-btn text icon color="grey darken-3">
                  <v-icon>{{ homeCard.buttons.eye }}</v-icon>
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>

    <Footer />
  </v-container>
</template>

<script>
import Nav1 from "./Nav1";
import Footer from "./Footer";
import { mapState } from "vuex"
export default {
  data: () => ({
    
  }),
  components: {
    Nav1,
    Footer
  },
  computed:{
    ...mapState([
      'homeCards'
    ])
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0;
  padding: 0;

  .imgk {
    .imgs {
      .v-card {
        width: 85%;

        .card-title {
          .title-texts{
            p{
              font-size: .6em;
            }
            h6{
              font-size: .5em;
              font-weight: 400;
            }
          }
        }
      }
    }
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
</style>