<template>
  <v-container>
      <v-layout>
          <v-flex>
              <Nav />
          </v-flex>
      </v-layout>
      <router-view/>
  </v-container>
</template>

<script>
import Nav from "./Nav"
export default {
    components:{
        Nav
    }
}
</script>