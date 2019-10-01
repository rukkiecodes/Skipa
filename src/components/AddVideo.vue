<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-flex>
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" class="mx-auto" v-on="on" :elevation="hover ? 12 : 2">
              <v-row class="py-4 pl-4">
                <v-col class="shrink">
                  <v-img height="200" width="200" src="@/assets/video.png">
                    <p>Add a Video</p>
                  </v-img>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-flex>
      </template>
      
      <v-card>
        <v-toolbar flat class="grey lighten-5">
          <v-btn class="primary--text" icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title class="primary--text">Upload a Video</v-toolbar-title>
          <div class="flex-grow-1"></div>
        </v-toolbar>

        <v-card flat class="my-10">
          <v-card-title class="headline"></v-card-title>
          <v-snackbar v-show="this.images.length > 5" v-model="errorSnack" timeout="4000" top color="red">
                <span class="white--text">Error!! You can not add more than 5 images</span>
                <v-btn class="ma-2 " outlined large fab color="white">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-snackbar>
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" class="mx-auto" height="250" max-width="250">
              <div
                id="my-strictly-unique-vue-upload-multiple-image"
                style="display: flex; justify-content: center;"
              >
                <vue-upload-multiple-image
                  @upload-success="uploadImageSuccess"
                  @before-remove="beforeRemove"
                  @edit-image="editImage"
                  @data-change="dataChange"
                  :data-images="images"
                ></vue-upload-multiple-image>
              </div>
            </v-card>
          </v-hover>
          <v-card-actions 
          style="display: flex; 
          justify-content: space-around; 
          width: 50%;
          margin:auto;">
            <v-btn @click="closeModal" class="ma-2" outlined large fab color="warning">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-btn @click="clearPreview" class="ma-2" outlined large fab color="red">
              <v-icon>mdi-cancel</v-icon>
            </v-btn>
            <v-btn class="ma-2" outlined large fab color="success">
              <v-icon>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";
export default {
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    imageData: null,
    images: [],
    errorSnack: false
  }),
  components: {
    VueUploadMultipleImage
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
    },

    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      } else {
      }
    },

    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },

    dataChange(data) {
      console.log(data);
    },

    clearPreview() {
      this.images = [];
    },

    closeModal() {
      this.dialog = false;
      this.images = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.addfile {
  margin: 0;
  padding: 0;

  #my-strictly-unique-vue-upload-multiple-image {
    // font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    height: 100%;
    // color: #2c3e50;
    // margin-top: 60px;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
}
</style>