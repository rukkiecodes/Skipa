<template>
  <nav>
    <v-toolbar dark flat class="grey lighten-5">
      <v-app-bar-nav-icon class="primary--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-avatar width="5em" height="auto">
          <img src="@/assets/logo.png" alt="avatar" />
        </v-avatar>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <p class="primary--text mx-2 my-auto">John Doe</p>
    </v-toolbar>

    <v-navigation-drawer
      app
      absolute
      temporary
      color="#fff"
      v-model="drawer"
      class="grey lighten-5"
    >
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
      drawer: false,
      items: [
        {
          title: "Library",
          icon: "mdi-view-dashboard",
          route: "/dashboard/library"
        },
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