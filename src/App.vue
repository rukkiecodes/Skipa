<template>
  <v-app id="app">
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss" scoped>
#app{
  background: #fff;
}
</style>