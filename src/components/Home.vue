<template>
  <v-card class="mx-auto" style="border-radious:0;">
    <v-img class="white--text" height="100vh" src="@/assets/bg2.jpg">
      <v-toolbar color="transparent">
        <v-toolbar-title
          class="nav-skipa white--text"
          style="font-weight: lighter; font-size: 2em;"
        >Skipa</v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-toolbar-items>
          <v-btn text>
            <router-link
              to="/about"
              class="white--text"
              style="text-decoration: none; font-weight: lighter; font-size: 1.2em;"
            >About</router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-title
        style="margin-top: 25%; font-weight: lighter; letter-spacing: .1em;"
        class="align-center display-3"
      >
        Welcome to Skipa
        <v-card-text
          style="font-weight: lighter; font-size: .3em; letter-spacing: .1em;"
        >Where you can be free from limited storage</v-card-text>
        <Registration />
      </v-card-title>
    </v-img>
  </v-card>
</template>

<script>
import Registration from "./Registration";
export default {
  data: () => ({}),
  components: {
    Registration
  }
};
</script>