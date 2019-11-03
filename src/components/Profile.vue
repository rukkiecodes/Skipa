<template>
  <v-container class="px-10">
    <v-layout class="mt-10" justify-center row wrap>
      <v-flex xs12 sm12 md12 ld12 xl12>
        <v-img width="100%" height="100%" src="../assets/poster.png">
          <v-avatar style="display: block; margin: auto;" width="50%" height="auto">
            <v-img width="100%" height="auto" src="../assets/me.png"></v-img>
          </v-avatar>
          <v-row>
            <v-col>
              <p style="text-align: center;" class="white--text headline">Terry Ochuko</p>
            </v-col>
          </v-row>
        </v-img>
      </v-flex>
    </v-layout>

    <v-layout class="my-2" row wrap>
      <v-flex xs3 sm3 md3 lg3 xl3>
        <v-btn @click="edidProfile" left text>
          <v-icon>mdi-account-edit</v-icon>
          <span class="text-capitalize">Edit Profile</span>
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn left text>
          <v-icon>mdi-account-settings</v-icon>
          <span class="text-capitalize">Account Settings</span>
        </v-btn>
      </v-flex>
    </v-layout>

    <hr class="grey lighten-4">

    <v-layout class="my-10" row wrap>
      <v-list-item-group color="grey">
        <v-layout row wrap>
          <v-row>
            <v-list-item dense v-for="data in userInfo" :key="data.info">
              <v-flex class="mr-2" xs1 sm1 md1 lg1 xl1>
                <v-list-item-icon>
                  <v-icon v-text="data.icon"></v-icon>
                </v-list-item-icon>
              </v-flex>

              <v-flex xs3 sm3 md3 lg3 xl3>
                <v-list-item-content>
                  <v-list-item-title v-text="data.info"></v-list-item-title>
                </v-list-item-content>
              </v-flex>

              <v-flex xs7 sm7 md7 lg7 xl7>
                <v-list-item-content>
                  <v-list-item-title v-text="data.answer"></v-list-item-title>
                </v-list-item-content>
              </v-flex>

              <v-flex xs1 sm1 md1 lg1 xl1>
                <v-list-item-content>
                  <v-list-item-title>
                    <v-btn @click="edidProfile" icon>
                      <v-icon>mdi-pen</v-icon>
                    </v-btn>
                  </v-list-item-title>
                </v-list-item-content>
              </v-flex>
            </v-list-item>
          </v-row>
        </v-layout>
      </v-list-item-group>
    </v-layout>

    <v-layout row wrap>
      <v-flex>
        <v-dialog class="dialog" fullscreen v-model="dialog" persistent>
          <v-card>
            <v-toolbar flat color="grey darken-4">
              <v-btn @click="dialog = false" color="white" icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title style="display:flex;"></v-toolbar-title>
              <v-card-title>
                <span class="headline white--text">Edit Profile</span>
              </v-card-title>
              <div class="flex-grow-1"></div>
            </v-toolbar>

            <v-card-text>
              <v-container>
                <v-layout row wrap>
                  <v-flex class="px-2 my-4" xs12 sm6 md6 lg6 xl6>
                    <input type="file">
                  </v-flex>
                  <v-flex class="px-2" xs12 sm12 md12 lg12 xl12>
                    <v-text-field label="Full Name"></v-text-field>
                  </v-flex>
                  <v-flex class="px-2" xs12 sm12 md12 lg12 xl12>
                    <v-text-field label="Alias"></v-text-field>
                  </v-flex>
                  <v-flex class="px-2" xs12 sm12 md12 lg12 xl12>
                    <v-text-field label="Email Address"></v-text-field>
                  </v-flex>
                  <v-flex class="px-2" xs12 sm12 md12 lg12 xl12>
                    <v-text-field label="Phone"></v-text-field>
                  </v-flex>
                  <v-flex class="px-2" xs12 sm12 md12 lg12 xl12>
                    <v-text-field label="Profesion"></v-text-field>
                  </v-flex>
                  <v-flex class="px-2" xs12 sm12 md12 lg12 xl12>
                    <v-text-field label="Were do you work"></v-text-field>
                  </v-flex>
                  <v-flex class="px-2" xs12 sm12 md12 lg12 xl12>
                    <v-text-field label="Position"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-row justify="center">
                  <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn dark color="red" class="white--text" text>
                      <v-icon left>mdi-close</v-icon>
                      <span>Cancel</span>
                    </v-btn>
                    <v-btn
                      dark
                      color="primary"
                      class="white--text"
                      text
                    >
                      <v-icon left>mdi-send</v-icon>
                      <span>Save Update</span>
                    </v-btn>
                  </v-card-actions>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "profile",
  data: () => ({
    dialog: false,
    userInfo: [
      { info: "Name", answer: "Terry Ochuko", icon: "mdi-account" },
      { info: "Alias", answer: "Rukkie", icon: "mdi-account-badge" },
      {
        info: "Email Address",
        answer: "terryochuko112@gmail.com",
        icon: "mdi-email"
      },
      { info: "Phone", answer: "07011341999", icon: "mdi-phone" },
      {
        info: "Profesion",
        answer: "Software Developer",
        icon: "mdi-briefcase"
      },
      {
        info: "Works At",
        answer: "Primedsoft Limited",
        icon: "mdi-briefcase-account-outline"
      },
      {
        info: "Position",
        answer: "Frontend Developer",
        icon: "mdi-file-star-outline"
      },
      {
        info: "Bio",
        answer: "I am a cold blooded hot headed programmer",
        icon: "mdi-passport"
      }
    ]
  }),

  methods:{
    edidProfile(){
      this.dialog = true;
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  height: auto;

  tr {
    td {
      border-bottom: 2px solid rgba(146, 97, 97, 0.4);
    }
    .td1 {
      width: 20%;
    }
  }
}
</style>