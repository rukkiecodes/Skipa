<template>
  <v-container class="px-10">
    <v-layout justify-center class="mt-10" row wrap>
      <v-flex class="my-10" xs12 sm6 md6 ld6 xl6>
        <h1>Profile settings</h1>
        <p>Change your profile settings here</p>
      </v-flex>
      <v-flex xs12 sm6 md6 ld6 xl6>
        <v-img src="../assets/me.png" width="25vw"></v-img>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex>
        <v-btn-toggle v-model="toggle_exclusive" mandatory>
          <v-btn>Profile</v-btn>
          <v-btn>Account Settings</v-btn>
        </v-btn-toggle>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex>
        <v-card v-model="settings" class="overflow-hidden" color="grey darken-3" dark>
          <v-toolbar flat color="grey darken-3">
            <v-icon>mdi-account</v-icon>
            <v-toolbar-title class="font-weight-light">User Profile</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="indigo" fab small @click="isEditing = !isEditing">
              <v-icon v-if="isEditing">mdi-close</v-icon>
              <v-icon v-else>mdi-pencil</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-layout row wrap>
              <v-flex class="px-2" xs12 sm6 md6 lg6 xl6>
                <v-text-field
                  v-model="profile.name"
                  :disabled="!isEditing"
                  color="white"
                  label="Full name"
                ></v-text-field>
              </v-flex>
              <v-flex class="px-2" xs12 sm6 md6 lg6 xl6>
                <v-text-field
                  v-model="profile.phone"
                  :disabled="!isEditing"
                  color="white"
                  label="Phone"
                ></v-text-field>
              </v-flex>
              <v-flex class="px-2" xs12 sm12 md12 lg12 xl12>
                <v-text-field
                  v-model="profile.address"
                  :disabled="!isEditing"
                  color="white"
                  label="Address"
                ></v-text-field>
              </v-flex>
              <v-flex class="px-2" xs12 sm9 md9 lg9 xl9>
                <v-text-field
                  v-model="profile.postcode"
                  :disabled="!isEditing"
                  color="white"
                  label="Postcode"
                ></v-text-field>
              </v-flex>
              <v-flex class="my-3 px-2" xs12 sm3 md3 lg3 xl3>
                <v-btn :disabled="!isEditing" color="success" @click="save">Save</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-snackbar
            v-model="hasSaved"
            :timeout="2000"
            absolute
            bottom
            left
          >Your profile has been updated</v-snackbar>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { fb, db } from "@/firebaseConfig";
export default {
  name: "profile",
  data: () => ({
    hasSaved: false,
    isEditing: null,
    model: null,
    states: [
      { name: "Florida", abbr: "FL", id: 1 },
      { name: "Georgia", abbr: "GA", id: 2 },
      { name: "Nebraska", abbr: "NE", id: 3 },
      { name: "California", abbr: "CA", id: 4 },
      { name: "New York", abbr: "NY", id: 5 }
    ],
    profile: {
      name: null,
      phone: null,
      address: null,
      postcode: null
    }
  }),
  firestore() {
    const user = fb.auth().curentUser;
    return {
      profile: db.collection("profiles").doc(user.uid)
    };
  },
  methods: {
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },

    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    }
  }
};
</script>