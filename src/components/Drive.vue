<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-app-bar flat dense color="grey lighten-5" class="my-1 mt-n4 pa-0" max-width="100vw" dark>
          <v-row justify="space-around">
            <v-dialog
              :fullscreen="$vuetify.breakpoint.xsOnly"
              v-model="dialog1"
              persistent
              max-width="50vw"
            >
              <v-card>
                <v-card-title>
                  <span
                    class="headline grey--text text--darken-4"
                    v-if="dialog == 'new'"
                  >Upload file</span>
                  <span
                    class="headline grey--text text--darken-4"
                    v-if="dialog == 'edit'"
                  >Update file</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-layout row wrap>
                      <v-flex class="my-5" xs12 sm12 md12 lg12 xl12>
                        <input type="file" @change="uploadDocument" multiple />
                      </v-flex>
                      <v-flex class="my-5" xs12 sm12 md12 lg12 xl12>
                        <v-layout justify-center>
                          <v-progress-circular
                            :rotate="360"
                            :size="100"
                            :width="15"
                            :value="uploadPersentage"
                            class="indigo--text"
                            :color="colors"
                          >
                            <p class="mt-2" :hidden="showNum">{{ uploadPersentage }}%</p>
                            <p class="mt-2" :hidden="check" :transition="trans" :origin="origin">
                              <v-icon class="display-2">mdi-check</v-icon>
                            </p>
                          </v-progress-circular>
                        </v-layout>
                      </v-flex>

                      <v-flex xs12 sm12 md12 lg12 xl12>
                        <v-text-field
                          class="grey--text text--darken-4"
                          v-model="files.fileName"
                          label="Name / Company Name*"
                          :disabled="disabled"
                          required
                        >
                          <v-icon
                            :disabled="disabled"
                            class="grey--text text--darken-4"
                            slot="prepend"
                          >mdi-account-outline</v-icon>
                        </v-text-field>
                      </v-flex>

                      <v-flex xs12 sm12 md12 lg12 xl12>
                        <v-textarea
                          v-model="files.fileReview"
                          class="grey--text text--darken-4"
                          name="input-7-1"
                          label="Preview"
                          :disabled="disabled"
                          placeholder="Write a short preview"
                          hint="How would u like people to think about you work"
                        ></v-textarea>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-layout justify-space-around>
                    <v-btn color="grey darken-4" small depressed fab @click="clearFile">
                      <v-icon class="white--text">mdi-close</v-icon>
                    </v-btn>
                    <v-btn
                      @click="addFile"
                      color="grey darken-4"
                      depressed
                      small
                      :disabled="disabled"
                      fab
                      :loading="loading"
                    >
                      <v-icon class="white--text">mdi-cloud-upload</v-icon>
                    </v-btn>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-app-bar>
      </v-flex>
      <v-flex class="mt-n5">
        <template>
          <v-btn
            class="mt-2 ml-n5 uploadButton"
            @click="addNew"
            dark
            icon
            x-large
            depressed
            color="grey lighten-3"
          >
            <v-icon color="grey darken-4">mdi-cloud-upload</v-icon>
          </v-btn>
        </template>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex v-for="files in uploads" :key="files.fileName" xs12 sm12 md3 lg3 xl3>
        <v-card max-width="92%" class="mx-auto my-5">
          <v-list-item>
            <v-list-item-avatar>
              <img src="../assets/me.png" alt="John" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ files.fileName }}</v-list-item-title>
              <v-list-item-subtitle>{{ files.fileReview }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-flex v-for="image in files.images" :key="image.id">
            <v-img :src="image"></v-img>
          </v-flex>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="deleteFile(files)" class="mx-n3" text color="grey darken-3">
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { fb, db } from "@/firebaseConfig";
import { storage } from "firebase";
export default {
  data: () => ({
    uploads: [],
    isMobile: false,
    dialog1: false,
    dialog2: false,
    loading: false,
    disabled: true,
    colors: null,
    uploadPersentage: 0,
    check: true,
    showNum: false,
    trans: null,
    origin: null,
    files: {
      fileName: null,
      fileReview: null,
      images: [],
      userId: fb.auth().currentUser.uid
    },
    activeItem: null,
    dialog: null
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
      uploads: db.collection("media")
    };
  },
  methods: {
    uploadDocument(event) {
      let file = event.target.files[0];
      var storageRef = fb.storage().ref("images/" + file.name);
      let uploadTask = storageRef.put(file);
      uploadTask.on(
        "state_changed",
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          const math = Math.round(progress * 100) / 100;
          console.log("Upload is " + math + "% done");
          this.uploadPersentage = math;
          if (math >= 0 && math <= 25) {
            this.colors = "red accent-4";
          } else if (math > 25 && math <= 50) {
            this.colors = "amber darken-4";
          } else if (math > 50 && math <= 75) {
            this.colors = "amber";
          } else if (math == 100) {
            this.colors = "green darken-2";
            this.check = false;
            this.showNum = true;
            this.trans = "fade-transition";
            this.origin = "center center";
            this.disabled = false;
          }
        },
        error => {
          console.error(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(getDownloadURL => {
            this.files.images.push(getDownloadURL);
            console.log("file available at", getDownloadURL);
          });
        }
      );
    },
    updateFile() {
      // this.$firestore.uploads.doc(this.uploads.id).update(this.uploads);
      this.$firestore.uploads.doc(this.files.id).update(this.files);
    },
    reset() {
      this.files = {
        fileName: null,
        fileReview: null,
        fileImage: null,
        images: []
      };
    },
    editFile(files) {
      this.activeItem = files.id;
      this.dialog1 = true;
      this.files = files;
      this.dialog = "edit";
    },
    deleteFile(doc) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "red",
        cancelButtonColor: "blue",
        confirmButtonText: "Delete"
      }).then(result => {
        if (result.value) {
          this.$firestore.uploads.doc(doc[".key"]).delete();
          console.log(doc[".key"]);
          Swal.fire({
            type: "success",
            title: "Deleted  successfully"
          });
        }
      });
    },
    addFile() {
      const auth = fb.auth().currentUser;

      if (auth) {
        this.$firestore.uploads.add(this.files);
        console.log("Document successfully written!");
        this.dialog1 = false;
      }
    },
    addNew() {
      this.dialog1 = true;
      this.dialog = "new";
    },
    clearFile(files) {
      this.dialog1 = false;
      this.files.fileName = null;
      this.files.fileReview = null;
      this.files.fileImage = null;
    },
    clearFileUpdate() {
      this.dialog2 = false;
      this.files.fileName = null;
      this.files.fileReview = null;
      this.files.fileImage = null;
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;
    }
  },
  created() {
    // this.readData();
    console.log(fb.auth().currentUser.uid);
  }
};
</script>

<style lang="scss" scoped>
.succsess {
  background: green;
}
.v-sheet--offset {
  top: -24px;
  position: relative;
}
.statistics-card,
.upload-card {
  width: 70%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.uploadButton {
  position: fixed;
  z-index: 1;
}
</style>