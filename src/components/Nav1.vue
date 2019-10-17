<template>
  <nav>
    <v-toolbar app dense flat color="white">
      <v-app-bar-nav-icon color="grey--text text--darken-3" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="display:flex;">
        <router-link to="/">
          <v-img width="2em" src="@/assets/logo.png"></v-img>
        </router-link>
        <p class="my-2 mx-2 grey--text text--darken-3 hidden-sm-and-down">Skippa</p>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn-toggle tile color="deep-purple accent-3" group>
        <v-btn value="right">
          <router-link class="grey--text text--darken-3" style="text-decoration:none;" to="/about">About</router-link>
        </v-btn>

        <v-btn class="rout-color" value="justify">
          <Forms  @errorMessage="snackbar = true"/>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="white">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <div class="text-center">
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field clearable label="Search Skippa" type="text">
                        <template v-slot:append>
                          <v-fade-transition leave-absolute>
                            <v-btn icon class="my-n2">
                              <v-icon class="grey--text text--darken-3">mdi-send</v-icon>
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
import Forms from "./Forms";
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-home", route: "/" },
      { title: "About", icon: "mdi-help", route: "/about" }
    ],
    right: null,
    panel: false,
  }),
  components: {
    Forms
  }
};
</script>