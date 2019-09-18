<template>
  <v-layout>
    <v-toolbar dark src="@/assets/bg4.jpg">
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- <v-toolbar-title>Skipa</v-toolbar-title> -->
      <v-avatar width="8em" height="auto">
        <img src="@/assets/logo.png" alt="avatar" />
      </v-avatar>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer src="@/assets/bg4.jpg" v-model="drawer" app class="grey lighten-5">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <div class="text-center">
              <v-avatar>
                  <img src="@/assets/icon.png" alt="avatar" />
              </v-avatar>
              <!-- <h1 class="white--text">Skipa</h1> -->
            </div>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
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
        { title: "Videos", icon: "mdi-video" },
        { title: "About", icon: "mdi-help-box" },
        { title: "Logout", icon: "mdi-logout" }
      ],
      right: null
    };
  }
};
</script>