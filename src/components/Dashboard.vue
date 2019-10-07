<template>
  <div class="dashboard">
    <v-layout>
      <v-flex>
        <Nav2 />
      </v-flex>
    </v-layout>
    <router-view />
  </div>
</template>

<script>
import Nav2 from "./Nav2";
export default {
  components: {
    Nav2
  }
};
</script>