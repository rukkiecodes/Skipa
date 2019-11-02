<template>
  <v-container class="px-10">
    <v-layout justify-center row wrap>
      <v-flex class="my-0" xs12 sm12 md12 ld12 xl12>
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
        <v-btn left text>
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
                    <v-btn icon>
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
  </v-container>
</template>

<script>
export default {
  name: "profile",
  data: () => ({
    userInfo: [
      { info: "Name", answer: "Terry Ochuko", icon: "mdi-account" },
      { info: "Alias", answer: "Rukkie", icon: "mdi-account-badge" },
      { info: "Email Address", answer: "terryochuko112@gmail.com", icon:"mdi-email" },
      { info: "Phone", answer: "07011341999", icon:"mdi-phone" },
      { info: "Profesion", answer: "Software Developer", icon:"mdi-briefcase" },
      { info: "Works At", answer: "Primedsoft Limited", icon:"mdi-briefcase-account-outline" }
    ]
  })
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