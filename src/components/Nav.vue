<template>
  <v-layout>
    <v-toolbar dark src="@/assets/bg2.jpg">
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vuetify</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="grey lighten-5">
      <!-- <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              <div class="text-center">
                <v-avatar>
                  <img src="@/assets/logo.png" alt="avatar" />
                </v-avatar>
              </div>
            </v-list-item-title>
          </v-list-item-content>
      </v-list-item>-->

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon class="primary--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],
      right: null
    };
  }
};
</script>