<template>
  <div class="form">
    <v-row justify="center">
      <v-btn text color="black" dark @click="dialog = true">Sign Up</v-btn>
      <v-dialog
        class="dialog1"
        max-width="50%"
        :fullscreen="$vuetify.breakpoint.xsOnly"
        v-model="dialog"
        persistent
        scrollable
      >
        <v-card>
          <v-card-title>
            <span class="headline">Sign Up</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="companyName" label="Compary Name*"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="signupEmail" label="Email*"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="signupPassword" label="Password*" type="password" required></v-text-field>
                  <br />
                  <div>
                    <p @click="openDialog2" style="cursor: pointer;">
                      Already have an account?
                      <b>Sign In Here!</b>
                    </p>
                  </div>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn color="black" text @click="closeDialog1">Cancel</v-btn>
                  <v-btn color="black" text>Sign Up</v-btn>
                </v-card-actions>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog max-width="50%" :fullscreen="$vuetify.breakpoint.xsOnly" v-model="dialog2" persistent>
        <v-card>
          <v-card-title>
            <span class="headline">Login</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field v-model="signinEmail" label="Email*"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="signinPassword" label="Password*" type="password" required></v-text-field>
                  <br />
                  <div>
                    <p @click="openDialog1" style="cursor: pointer;">
                      Don't have an account?
                      <b>Sign Up Here!</b>
                    </p>
                  </div>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn color="black" text @click="closeDialog2">Cancel</v-btn>
                  <v-btn color="black" text>Login</v-btn>
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
export default {
  data: () => ({
    dialog: true,
    dialog2: false,
    isMobile: false,
    companyName: null,
    signupEmail: null,
    signupPassword: null,
    signinEmail: null,
    signinPassword: null
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
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
    closeDialog1(){
        this.dialog = false;
        this.companyName = null;
        this.signupEmail = null;
        this.signupPassword = null;
    },
    closeDialog2(){
        this.dialog2 = false;
        this.signinEmail = null;
        this.signinPassword = null;
    },
    openDialog2(){
        this.dialog = false;
        this.dialog2 = true;
    },
    openDialog1(){
        this.dialog2 = false;
        this.dialog = true;
    }
  }
};
</script>
