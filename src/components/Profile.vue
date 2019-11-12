<template>
  <v-container fluid class="content mt-10">
    <v-layout row wrap>
      <v-flex xs12 sm12 md4 lg4 xl4>
        <v-row align="center" justify="center">
          <v-col class="left-side" align-self="center">
            <v-img width="50%" height="auto" class="my-img mx-auto" src="../assets/me.png"></v-img>
            <br />
            <v-card color="transparent" flat class="mx-auto" max-width="300" tile>
              <v-list color="transparent" dense>
                <v-list-item-group color="grey darken-4">
                  <v-layout row wrap>
                    <v-row>
                      <v-list-item>
                        <v-flex class="mr-2" xs1 sm1 md1 lg1 xl1>
                          <v-list-item-icon>
                            <v-icon color="gery darken-4">mdi-account-outline</v-icon>
                          </v-list-item-icon>
                        </v-flex>

                        <v-flex xs3 sm3 md3 lg3 xl3>
                          <v-list-item-content>
                            <v-list-item-title class="grey--text text--darken-4">Name</v-list-item-title>
                          </v-list-item-content>
                        </v-flex>

                        <v-flex xs8 sm8 md8 lg8 xl8>
                          <v-list-item-content>
                            <v-list-item-title class="grey--text text--darken-4">{{ profile.name }}</v-list-item-title>
                          </v-list-item-content>
                        </v-flex>
                      </v-list-item>

                      <v-list-item>
                        <v-flex class="mr-2" xs1 sm1 md1 lg1 xl1>
                          <v-list-item-icon>
                            <v-icon color="gery darken-4">mdi-account-circle</v-icon>
                          </v-list-item-icon>
                        </v-flex>

                        <v-flex xs3 sm3 md3 lg3 xl3>
                          <v-list-item-content>
                            <v-list-item-title class="grey--text text--darken-4">Alias</v-list-item-title>
                          </v-list-item-content>
                        </v-flex>

                        <v-flex xs8 sm8 md8 lg8 xl8>
                          <v-list-item-content>
                            <v-list-item-title class="grey--text text--darken-4">{{ profile.alias }}</v-list-item-title>
                          </v-list-item-content>
                        </v-flex>
                      </v-list-item>

                      <v-list-item>
                        <v-flex class="mr-2" xs1 sm1 md1 lg1 xl1>
                          <v-list-item-icon>
                            <v-icon color="gery darken-4">mdi-email</v-icon>
                          </v-list-item-icon>
                        </v-flex>

                        <v-flex xs3 sm3 md3 lg3 xl3>
                          <v-list-item-content>
                            <v-list-item-title class="grey--text text--darken-4">Email</v-list-item-title>
                          </v-list-item-content>
                        </v-flex>

                        <v-flex xs8 sm8 md8 lg8 xl8>
                          <v-list-item-content>
                            <!-- <v-list-item-title
                              class="grey--text text--darken-4"
                            >terryochuko112@gmail.com</v-list-item-title>-->
                            <v-list-item-title class="grey--text text--darken-4">{{ email }}</v-list-item-title>
                          </v-list-item-content>
                        </v-flex>
                      </v-list-item>

                      <v-list-item>
                        <v-flex class="mr-2" xs1 sm1 md1 lg1 xl1>
                          <v-list-item-icon>
                            <v-icon color="gery darken-4">mdi-globe-model</v-icon>
                          </v-list-item-icon>
                        </v-flex>

                        <v-flex xs3 sm3 md3 lg3 xl3>
                          <v-list-item-content>
                            <v-list-item-title class="grey--text text--darken-4">Nationalty</v-list-item-title>
                          </v-list-item-content>
                        </v-flex>

                        <v-flex xs8 sm8 md8 lg8 xl8>
                          <v-list-item-content>
                            <v-list-item-title
                              class="grey--text text--darken-4"
                            >{{ profile.nationality }}</v-list-item-title>
                          </v-list-item-content>
                        </v-flex>
                      </v-list-item>

                      <v-list-item>
                        <v-flex class="mr-2" xs1 sm1 md1 lg1 xl1>
                          <v-list-item-icon>
                            <v-icon color="gery darken-4">mdi-account-heart-outline</v-icon>
                          </v-list-item-icon>
                        </v-flex>

                        <v-flex xs3 sm3 md3 lg3 xl3>
                          <v-list-item-content>
                            <v-list-item-title class="grey--text text--darken-4">Interests</v-list-item-title>
                          </v-list-item-content>
                        </v-flex>

                        <v-flex xs8 sm8 md8 lg8 xl8>
                          <v-list-item-content>
                            <v-list-item-title
                              class="grey--text text--darken-4"
                            >{{ profile.interests }}</v-list-item-title>
                          </v-list-item-content>
                        </v-flex>
                      </v-list-item>
                    </v-row>
                  </v-layout>
                </v-list-item-group>
                <!-- text--darken-1 -->
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-flex>

      <v-flex class="right-side px-4" xs12 sm12 md8 lg8 xl8>
        <v-row>
          <v-col>
            <v-card flat>
              <v-tabs centered color="grey darken-4">
                <v-tab>
                  <v-icon left>mdi-circle-edit-outline</v-icon>
                </v-tab>
                <v-tab>
                  <v-icon left>mdi-progress-wrench</v-icon>
                </v-tab>

                <!-- Edit Profile -->
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <v-layout>
                        <h1 class="display-2">Edit Profile</h1>
                      </v-layout>
                      <v-layout class="mt-10" row wrap>
                        <!-- Profile Name -->
                        <v-flex class="px-2" xs12 sm6 md6 lg6 xl6>
                          <v-text-field
                            v-model="profile.name"
                            class="grey--text text--darken-4"
                            label="Name"
                          >
                            <v-icon
                              class="grey--text text--darken-4"
                              slot="prepend-inner"
                            >mdi-account-outline</v-icon>
                          </v-text-field>
                        </v-flex>
                        <!-- Profile Alias -->
                        <v-flex class="px-2" xs12 sm6 md6 lg6 xl6>
                          <v-text-field
                            v-model="profile.alias"
                            class="grey--text text--darken-4"
                            label="Alias"
                          >
                            <v-icon
                              class="grey--text text--darken-4"
                              slot="prepend-inner"
                            >mdi-account-circle</v-icon>
                          </v-text-field>
                        </v-flex>
                        <!-- Profile email -->
                        <v-flex class="px-2" xs12 sm6 md6 lg6 xl6>
                          <v-text-field
                            v-model="profile.email"
                            class="grey--text text--darken-4"
                            label="Email"
                          >
                            <v-icon
                              class="grey--text text--darken-4"
                              slot="prepend-inner"
                            >mdi-email-outline</v-icon>
                          </v-text-field>
                        </v-flex>
                        <!-- Profile Nationality -->
                        <v-flex class="px-2" xs12 sm6 md6 lg6 xl6>
                          <v-text-field
                            v-model="profile.nationality"
                            class="grey--text text--darken-4"
                            label="Nationality"
                          >
                            <v-icon
                              class="grey--text text--darken-4"
                              slot="prepend-inner"
                            >mdi-globe-model</v-icon>
                          </v-text-field>
                        </v-flex>
                        <!-- Profile Interests -->
                        <v-flex class="px-2" xs12 sm12 md12 lg12 xl12>
                          <v-textarea
                            v-model="profile.interests"
                            class="grey--text text--darken-4"
                            name="input-7-1"
                            label="Interests"
                            placeholder="Write a short preview"
                            hint="Describe Youselve in three words"
                          >
                            <v-icon class="grey--text text--darken-4" slot="prepend-inner">mdi-pen</v-icon>
                          </v-textarea>
                        </v-flex>

                        <v-layout justify-center>
                          <v-btn @click="updateProfile()" small fab depressed color="grey darken-4">
                            <v-icon class="white--text">mdi-pencil</v-icon>
                          </v-btn>
                        </v-layout>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-tab-item>

                <!-- Account Settings -->
                <v-tab-item>
                  <v-card flat>
                    <v-card-text>
                      <v-layout>
                        <h1 class="display-2">Account Settings</h1>
                      </v-layout>
                      <v-layout class="mt-10" row wrap>
                          <v-flex xs12 sm6 md6 lg6 xl6>
                            <v-btn
                            @click="resetPassword"
                            class="mr-2"
                            rounded
                            depressed
                            color="grey darken-4"
                          >
                            <v-icon left class="white--text">mdi-lock</v-icon> <span class="white--text">Reset Password</span>
                          </v-btn>
                          </v-flex>
                      </v-layout>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { fb, db } from "@/firebaseConfig";
export default {
  name: "Profile",
  data: () => ({
    isMobile: false,
    dialog: null,
    email: null,
    files: {
      fileName: null,
      fileReview: null,
      fileImage: null,
      images: [],
      uploads: []
    },
    profile: {
      name: null,
      alias: null,
      email: null,
      nationality: null,
      interests: null
    },
    activeItem: null
  }),
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, {
        passive: true
      });
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, {
      passive: true
    });
  },
  firestore() {
    const user = fb.auth().currentUser;
    return {
      uploads: db.collection("media"),
      profile: db.collection("profiles").doc(user.uid)
    };
  },
  methods: {
    resetPassword() {
      const auth = fb.auth();

      console.log(auth.currentUser);

      auth
        .sendPasswordResetEmail(auth.currentUser.email)
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Email Sent',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(error => {
          console.log(error);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error Sending Mail',
            showConfirmButton: false,
            timer: 1500
          })
        });
    },
    updateProfile() {
      this.$firestore.profile.set(this.profile);
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;
    }
  },
  created() {
    var user = fb.auth().currentUser;
    this.email = user.email;
  }
};
</script>



<style lang="scss" scoped>
.content {
  margin: 0;
  padding: 0;
  overflow: hidden !important;
  z-index: 10;

  .left-side {
    .my-img {
      margin: auto;
      display: flex;
    }
  }

  .right-side {
    overflow-y: scroll;
    overflow-x: hidden;
    @media (min-width: 1025px) {
      overflow: scroll !important;
      overflow-x: hidden !important;
      height: 90vh;
    }

    &::-webkit-scrollbar {
      border-radius: 10px;
      height: 10px;
      width: 1px;
    }

    &::-webkit-scrollbar-thumb {
      background: #fff;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: transparent;
    }
  }
}
</style>