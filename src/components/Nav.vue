<template>
  <nav class="py-2">
    <v-toolbar flat color="grey darken-4" class="mt-n2">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
      <v-toolbar-title style="display:flex;">
        <v-img width="2em" src="@/assets/logo.png"></v-img>
        <p class="my-2 mx-2 grey--text text--darken-3 hidden-sm-and-down">Skippa</p>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="grey darken-4">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="white--text caption">{{ email }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" router :to="item.route" link>
          <v-list-item-icon>
            <v-icon class="white--text font-weight-light">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text font-weight-light">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout" link>
          <v-list-item-icon>
            <v-icon class="white--text font-weight-light">mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text font-weight-light">Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { fb, db } from "@/firebaseConfig";
export default {
  data: () => ({
    menu: false,
    drawer: null,
    items: [
      { title: "Drive", icon: "mdi-desktop-mac-dashboard", route: "/dashboard/drive" },
      { title: "Profile", icon: "mdi-account", route: "/dashboard/profile" },
      { title: "About", icon: "mdi-account-question-outline", route: "/dashboard/aboutSkippa" }
    ],
    email: null
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
  },
  created(){
    var user = fb.auth().currentUser;
    this.email = user.email;
  }
};
</script>