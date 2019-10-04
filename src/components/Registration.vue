<template>
  <v-row class="reg">
    <v-dialog v-model="dialog1" persistent max-width="400px">
      <!-- <template v-slot:activator="{ on }">
        <v-btn style="margin-right: 2%;" color="primary text-capitalize subtitle-1" dark v-on="on">
          Login
          <i class="text-right fas fa-sign-in-alt"></i>
        </v-btn>
      </template>-->
      <v-card>
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="email" :rules="emailRules" label="Email*"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="dialog1 = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2" persistent max-width="400px">
      <!-- <template v-slot:activator="{ on }">
        <v-btn text class="black--text" v-on="on">
          Sign Up
          <i class="text-right fas fa-user"></i>
        </v-btn>
      </template> -->
      <v-card>
        <v-card-title>
          <span class="headline">Sign Up</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="signupName" :rules="nameRules" label="Compary Name*"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="signupEmail" :rules="emailRules" label="Email*"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="signupPassword"
                  :rules="passwordRules"
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
                <br />
                <div>
                  <p @click="openModal" style="cursor: pointer;">
                    Don't have an account?
                    <b>Sign In Now</b>
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="closeSignup">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="signup" :loading="loading">Sign Up</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog1: false,
    dialog2: false,
    valid: false,
    email: "",
    password: "",
    signupEmail: "",
    signupPassword: "",
    signupName: "",
    loading: false,
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    passwordRules: [
      v => v.length >= 6 || "Minimum length is 6 characters"
      // v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    nameRules: [v => v.length >= 3 || "Minimum length is 3 characters"]
  }),
  methods: {
    openModal() {},
    closeSignup() {
      this.signupName = "";
      this.signupEmail = "";
      this.signupPassword = "";
      this.dialog2 = false;
    },
    signup() {},
    login() {}
  }
};
</script>

<style lang="scss" scoped>
.reg {
  padding: 2% 4%;
}
</style>