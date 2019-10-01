<template>
  <v-container class="logout grey lighten-5">
    <v-layout row wrap>
      <v-flex>
        <v-card max-width="60%" max-height="auto" class="mx-auto my-10 py-5">
          <v-card-title class="justify-center">Logout</v-card-title>
          <v-img src="../assets/what.png"></v-img>

          <v-card-action>
            <v-layout style="display:flex;justify-content:space-around;margin:auto;margin-top:-2%;">
              <v-btn @click="stay" class="primary px-10">Stay</v-btn>
              <v-btn @click="leave()" class="primary px-10">Leave</v-btn>
            </v-layout>
          </v-card-action>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { fb } from "../firebaseConfig";
export default {
  methods:{
    leave(){
      fb.auth().signOut()
      .then(() => {
        this.$router.replace('/')
      })
      .catch(err => {
        console.log(err);
      })
    },
    stay(){
      this.$router.replace('./Library')
    }
  }
}
</script>