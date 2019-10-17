<template>
  <v-container class="about">
    <nav>
      <v-toolbar flat color="transparent">
        <v-toolbar-title style="display:flex;">
          <router-link to="/">
            <v-img width="2em" src="@/assets/logo.png"></v-img>
          </router-link>
          <p class="my-2 mx-2 white--text hidden-sm-and-down">Skippa</p>
        </v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-btn-toggle tile color="deep-purple accent-3" group>
          <v-btn value="right">
            <router-link class="grey--text text--darken-4" style="text-decoration:none;" to="/about">About</router-link>
          </v-btn>

          <v-btn class="rout-color" value="justify">
            <router-link class="grey--text text--darken-4" style="text-decoration:none;" to="/">Home</router-link>
          </v-btn>
        </v-btn-toggle>
      </v-toolbar>
    </nav>
    <AboutContent />
    <Footer class="footer" />
  </v-container>
</template>

<script>
import Nav1 from "./Nav1";
import AboutContent from "./AboutContent";
import Footer from "./Footer";
export default {
  components: {
    Nav1,
    AboutContent,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.about {
  background: #fff;

  .footer {
    width: 75%;
    margin: auto;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>