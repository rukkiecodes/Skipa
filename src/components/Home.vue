<template>
  <v-card
    class="mx-auto"
    style="border-radious:0;"
  >
    <v-img
      class="white--text"
      height="100vh"
      src="@/assets/bg2.jpg"
    >
      <v-card-title style="margin-top: 25%;" class="align-center display-3">Welcome to Skipa
        <v-card-text>
          Where you can be free from limited storage
        </v-card-text>
        <Registration/>
      </v-card-title>
    </v-img>
  </v-card>
</template>

<script>
import Registration from "./Registration"
export default {
  data: () => ({
    
  }),
  components:{
    Registration
  }
};
</script>