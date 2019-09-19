<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
#app{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #fff;
}
</style>