<template>
  <nav class="py-2">
    <v-toolbar flat color="indigo" class="mt-n2">
      <v-toolbar-title style="display:flex;">
        <v-img width="2em" src="@/assets/logo.png"></v-img>
        <p class="my-2 mx-2 grey--text text--darken-3 hidden-sm-and-down">Skippa</p>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn value="right" text>
        <router-link class="white--text" style="text-decoration:none;" to="/dashboard/drive">Drive</router-link>
      </v-btn>
      <v-btn value="right" text>
        <router-link class="white--text" style="text-decoration:none;" to="/dashboard/aboutSkippa">About</router-link>
      </v-btn>

      <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text color="white" fab dark v-on="on">
            <v-avatar>
              <img src="../assets/me.png" alt="John" />
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="grey--text text--darken-3">John Doe</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item class="py-n5" @click="logout">
              <v-list-item-action>
                <v-btn class="px-7" color="width" fab text>
                  <v-icon class="grey--text text--darken-3">mdi-export-variant</v-icon>
                </v-btn>
              </v-list-item-action>
              <v-list-item-title @click="menu = false" class="grey--text text--darken-3">Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar>
  </nav>
</template>

<script>
import { fb } from "../firebaseConfig";
export default {
  data: () => ({
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