<template>
  <nav>
    <v-toolbar flat class="pa-2" color="transparent">
      <v-toolbar-title style="display:flex;">
        <router-link to="/">
          <v-img width="2em" src="@/assets/logo.png"></v-img>
        </router-link>
        <p class="my-2 mx-2 white--text hidden-sm-and-down">Skippa</p>
      </v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn-toggle tile color="deep-purple accent-3" group>
        <v-btn value="right">
          <router-link class="white--text" style="text-decoration:none;" to="/about">About</router-link>
        </v-btn>

        <v-btn class="rout-color" value="justify">
          <Forms  @errorMessage="snackbar = true"/>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>
  </nav>
</template>

<script>
import Forms from "./Forms";
export default {
  data: () => ({
  }),
  components: {
    Forms
  }
};
</script>