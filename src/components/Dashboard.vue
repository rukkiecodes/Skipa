<template>
  <div>
    <v-layout>
      <v-flex>
        <Nav />
      </v-flex>
    </v-layout>
    <router-view />
  </div>
</template>

<script>
import Nav from "./Nav";
export default {
  components: {
    Nav
  }
};
</script>