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
        <v-card class="py-10">
          <v-card-title>
            <span class="headline">Sign Up</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Compary Name*"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Password*" type="password" required></v-text-field>
                  <br />
                  <div>
                    <p @click="dialog2 = !dialog2" style="cursor: pointer;">
                      Don't have an account?
                      <b>Sign In Now</b>
                    </p>
                  </div>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn color="black" text @click="dialog = false">Cancel</v-btn>
                  <v-btn color="black" text>Sign Up</v-btn>
                </v-card-actions>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog max-width="50%" :fullscreen="$vuetify.breakpoint.xsOnly" v-model="dialog2">
        <v-card class="py-10">
          <v-card-title>
            <span class="headline">Login</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Email*"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Password*" type="password" required></v-text-field>
                  <br />
                  <div>
                    <p @click="dialog2 = !dialog2" style="cursor: pointer;">
                      Don't have an account?
                      <b>Sign In Now</b>
                    </p>
                  </div>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn color="black" text @click="dialog2 = false">Cancel</v-btn>
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
    isMobile: false
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

    if(this.dialog == true){
        this.dialog2 = false
    }
    if(this.dialog2 == true){
        this.dialog = false
    }
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600;
    }
  }
};
</script>
