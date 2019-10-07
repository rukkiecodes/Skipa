<template>
  <div class="about">
    <v-layout>
      <v-col>
        <About />
      </v-col>
    </v-layout>
    <v-layout class="footer">
      <v-col>
        <Footer />
      </v-col>
    </v-layout>
  </div>
</template>

<script>
import Footer from "./Footer";
import About from "./AboutContent";
export default {
  components: {
    About,
    Footer
  }
};
</script>

<style lang="scss" scoped>
.footer{
  width: 85%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>