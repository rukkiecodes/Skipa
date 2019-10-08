<template>
  <nav class="py-2">
    <v-toolbar dense flat color="white">
      <v-app-bar-nav-icon color="grey darken-3" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="display:flex;">
        <v-img width="2em" src="@/assets/logo.png"></v-img>
        <p class="my-2 mx-2">Skippa</p>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
        <template v-slot:activator="{ on }">
          <v-btn text color="white" fab dark v-on="on">
            <v-avatar>
              <img src="../assets/av1.jpg" alt="John" />
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="../assets/av1.jpg" alt="John" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>John Doe</v-list-item-title>
                <!-- <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle> -->
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-btn @click="logout" class="px-7" color="width" fab text>
                  <v-icon>mdi-export-variant</v-icon>
                </v-btn>
              </v-list-item-action>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <div class="flex-grow-1"></div>

            <v-row align="center" justify="center">
              <v-col align-self="center">
                <v-btn text @click="menu = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-toolbar>

    <v-navigation-drawer app absolute temporary color="#fff" v-model="drawer" class="white">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <div class="text-center">
              <v-avatar>
                <img src="@/assets/logo.png" alt="avatar" />
              </v-avatar>

              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field clearable label="Search Skippa" type="text">
                        <template v-slot:append>
                          <v-fade-transition leave-absolute>
                            <v-btn icon class="my-n2">
                              <v-icon class="black--text">mdi-send</v-icon>
                            </v-btn>
                          </v-fade-transition>
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" router :to="item.route" link>
          <v-list-item-icon>
            <v-icon class="icon-color">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="item-title">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { fb } from "../firebaseConfig";
export default {
  data: () => ({
    drawer: false,
    items: [
      {
        title: "Drive",
        icon: "mdi-cloud-upload",
        route: "/dashboard/drive"
      },
      {
        title: "Photos",
        icon: "mdi-image",
        route: "/dashboard/photo"
      },
      {
        title: "Videos",
        icon: "mdi-video",
        route: "/dashboard/video"
      },
      {
        title: "About",
        icon: "mdi-help",
        route: "/dashboard/about"
      }
    ],
    menu: false
  }),
  methods: {
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.rout-color,
.icon-color,
.item-title {
  color: rgba(0, 0, 0, 0.8);
}
</style>
