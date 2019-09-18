<template>
  <v-layout>
    <v-toolbar dark src="@/assets/bg4.jpg">
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-avatar width="8em" height="auto">
        <img src="@/assets/logo.png" alt="avatar" />
      </v-avatar>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app absolute temporary src="@/assets/bg4.jpg" v-model="drawer" app class="grey lighten-5">
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
        <v-list-item v-for="item in items" :key="item.title" router :to="item.route" link>
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
        { title: "Library", icon: "mdi-view-dashboard", route: "/dashboard" },
        { title: "Profile", icon: "mdi-account", route: "/dashboard/profile" },
        { title: "Photos", icon: "mdi-image", route: "/dashboard/photos" },
        { title: "Videos", icon: "mdi-video", route: "/dashboard/videos" },
        { title: "About", icon: "mdi-help-box", route: "/dashboard/about" },
        { title: "Logout", icon: "mdi-logout", route: "/dashboard/logout" }
      ],
      right: null
    };
  }
};
</script>