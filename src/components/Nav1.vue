<template>
  <nav>
    <v-toolbar dense flat color="white">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="display:flex;">
        <router-link to="/">
          <v-img width="2em" src="@/assets/logo.png"></v-img>
        </router-link>
        <p class="my-2 mx-2">Skippa</p>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn text>
        <router-link class="black--text" style="text-decoration:none;" to="/about">About</router-link>
      </v-btn>
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
                      <v-text-field
                        clearable
                        label="Search Skippa"
                        type="text"
                      >
                        <template v-slot:append>
                          <v-fade-transition leave-absolute>
                            <v-btn icon class="my-n2">
                              <v-icon>mdi-send</v-icon>
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
            <v-icon class="primary--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="primary--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Library",
          icon: "mdi-view-dashboard"
        },
        { title: "Profile", icon: "mdi-account" },
        { title: "Photos", icon: "mdi-image" },
        { title: "Videos", icon: "mdi-video" },
        { title: "About", icon: "mdi-help-box" },
        { title: "Logout", icon: "mdi-logout" }
      ],
      right: null
    };
  }
};
</script>