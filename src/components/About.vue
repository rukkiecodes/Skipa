<template>
  <v-container class="about">
    <v-layout>
      <v-flex>
        <Nav1 />
      </v-flex>
    </v-layout>
    <AboutContent/>
    <Footer />
  </v-container>
</template>

<script>
import Nav1 from "./Nav1";
import AboutContent from "./AboutContent"
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

  
}
</style>