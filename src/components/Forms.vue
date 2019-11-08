<template>
  <div class="form">
    <v-row justify="center">
      <v-btn text class="white--text" dark @click="dialog = true">Sign Up</v-btn>
      <v-dialog
        class="dialog1"
        width="40vw"
        :fullscreen="$vuetify.breakpoint.xsOnly"
        v-model="dialog"
        persistent
      >
        <v-card>
          <v-card-title>
            <span class="headline grey--text text--darken-3">Sign Up</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="name" label="Name*" required>
                    <v-icon
                      class="grey--text text--darken-4"
                      slot="prepend-inner"
                    >mdi-account-outline</v-icon>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="email" label="Email*" required>
                    <v-icon class="grey--text text--darken-4" slot="prepend-inner">mdi-email-outline</v-icon>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="password" label="Password*" type="password" required>
                    <v-icon class="grey--text text--darken-4" slot="prepend-inner">mdi-lock-outline</v-icon>
                  </v-text-field>
                  <br />
                  <div>
                    <p
                      @click="openDialog2"
                      class="grey--text text--darken-3"
                      style="cursor: pointer;"
                    >
                      Already have an account?
                      <b>Sign In Here!</b>
                    </p>
                  </div>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn dark color="grey darken-4" fab small @click="closeDialog1">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-btn dark color="grey darken-4" fab small @click="signup" :loading="loading1">
                    <v-icon>mdi-location-enter</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog width="40vw" :fullscreen="$vuetify.breakpoint.xsOnly" v-model="dialog2" persistent>
        <v-card class="dialog-card">
          <v-card-title>
            <span class="headline grey--text text--darken-3">Login</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="signinEmail" label="Email*">
                    <v-icon class="grey--text text--darken-4" slot="prepend-inner">mdi-email-outline</v-icon>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="signinPassword" label="Password*" type="password" required>
                    <v-icon class="grey--text text--darken-4" slot="prepend-inner">mdi-lock-outline</v-icon>
                  </v-text-field>
                  <div>
                    <p
                      @click="openDialog1"
                      class="grey--text text--darken-3"
                      style="cursor: pointer;"
                    >
                      Don't have an account?
                      <b>Sign Up Here!</b>
                    </p>
                  </div>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn dark color="grey darken-4" small fab @click="closeDialog2">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-btn dark color="grey darken-4" fab small @click="login" :loading="loading2">
                    <v-icon>mdi-login</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { fb, db } from "../firebaseConfig";
export default {
  data: () => ({
    dialog: false,
    dialog2: false,
    isMobile: false,
    name: null,
    email: null,
    password: null,
    signinEmail: null,
    signinPassword: null,
    loading1: false,
    loading2: false
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
  methods: {
    login() {
      this.loading2 = true;
      fb.auth()
        .signInWithEmailAndPassword(this.signinEmail, this.signinPassword)
        .then(user => {
          this.$router.replace("/dashboard/profile");
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.loading2 = false;
          if (errorCode == "auth/wrong-password") {
            alert("wrong Password");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },

    signup() {
      this.loading1 = true;
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          db.collection("profiles")
            .doc(user.user.uid)
            .set({
              name: this.name
            })
            .then(() => {
              console.log("document writen successfully!");
            this.$router.replace("/dashboard/profile");
            })
            .catch(error => {
              console.error("Error writing document:", error);
            });
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.loading1 = false;
          if (errorCode === "auth/week-password") {
            alert("Sorry Your password is week");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
    closeDialog1() {
      this.dialog = false;
      this.companyName = null;
      this.signupEmail = null;
      this.signupPassword = null;
    },
    closeDialog2() {
      this.dialog2 = false;
      this.signinEmail = null;
      this.signinPassword = null;
    },
    openDialog2() {
      this.dialog = false;
      this.dialog2 = true;
    },
    openDialog1() {
      this.dialog2 = false;
      this.dialog = true;
    }
  }
};
</script>