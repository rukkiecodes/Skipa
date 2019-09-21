<template>
  <div class="addfile">
    <v-row justify="center">
      <v-dialog dark v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-flex>
            <v-hover v-slot:default="{ hover }">
              <v-card max-width="250" class="mx-auto" v-on="on" :elevation="hover ? 12 : 2">
                <v-row class="py-4 pl-4">
                  <v-col class="shrink">
                    <v-img height="200" width="200" src="@/assets/add-file.png">
                      <p>Add a File</p>
                    </v-img>
                  </v-col>
                </v-row>
              </v-card>
            </v-hover>
          </v-flex>
        </template>

        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Upload A File</v-toolbar-title>
            <div class="flex-grow-1"></div>
          </v-toolbar>

          <v-layout class="displayimage my-8" wrap row>
            <v-flex class="myflex" xs12 sm12 md6 lg6 xl6>
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="250" max-width="250">
                  <div
                    class="image-input"
                    style="display: block;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    background-size: cover;
                    background-position: center center;"
                    :style="{ 'background-image': `url(${imageData})` }"
                    @click="chooseImage"
                  >
                    <span
                      v-if="!imageData"
                      class="placeholder"
                      style="background: #f0f0f0;
                      width: 100%;
                      height: 100%;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      color: #333;
                      font-size: 18px;
                      font-family: Helvetica;"
                    >Choose an Image</span>
                    <input
                      class="file-input"
                      ref="fileInput"
                      type="file"
                      style="display: none;"
                      @input="onSelectFile"
                    />
                  </div>
                  <v-card-actions>
                    <v-btn
                      color="red"
                      class="white--text"
                      @click="clearPreview"
                    >
                      Cancel
                      <v-icon right dark>mdi-cancel</v-icon>
                    </v-btn>

                    <v-btn
                      color="primary"
                      class="white--text"
                    >
                      Upload
                      <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    imageData: null
  }),
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  },
  methods: {
    chooseImage() {
      this.$refs.fileInput.click();
    },

    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },

    clearPreview(){
      this.imageData = null
    }
  }
};
</script>

<style lang="scss" scoped>
.addfile {
  margin: 0;
  padding: 0;
}
</style>