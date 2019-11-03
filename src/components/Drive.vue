<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex>
        <v-app-bar flat dense color="white" class="my-1 mt-n4 pa-0" max-width="100vw" dark>
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
                    <v-row>
                      <v-col cols="12">
                        <!-- <v-file-input
                        @change="uploadDocument"
                          class="grey--text text--darken-4"
                          multiple
                          label="File input"
                          accept="image/*|audio/*|video/*"
                        ></v-file-input>-->
                        <input type="file" @change="uploadDocument" />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          class="grey--text text--darken-4"
                          v-model="files.fileName"
                          label="Name / Company Name*"
                          required
                        >
                          <v-icon class="grey--text text--darken-4" slot="prepend">mdi-account</v-icon>
                        </v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          v-model="files.fileReview"
                          class="grey--text text--darken-4"
                          name="input-7-1"
                          label="Preview"
                          placeholder="Write a short preview"
                          hint="How would u like people to think about you work"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn class="red--text" text @click="clearFile">
                    <v-icon left>mdi-cancel</v-icon>
                    <span>Cancel</span>
                  </v-btn>
                  <v-btn @click="addFile" class="indigo--text" text v-if="dialog == 'new'">
                    <v-icon left>mdi-cloud-upload</v-icon>
                    <span>Save</span>
                  </v-btn>
                  <v-btn @click="updateFile()" class="indigo--text" text v-if="dialog == 'edit'">
                    <v-icon left>mdi-cloud-upload</v-icon>
                    <span>Save Changes</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-app-bar>
      </v-flex>
      <v-flex>
        <template>
          <v-btn
            class="mt-3 ml-n10 uploadButton"
            height="8vh"
            @click="addNew"
            dark
            color="grey darken-4"
          >
            <v-icon color="white">mdi-cloud-upload</v-icon>
          </v-btn>
        </template>
      </v-flex>
    </v-layout>

    <v-layout class="mt-10">
      <v-flex>
        <p
          class="text-capitalize grey--text text--darken-4 font-weight-light headline my-5 py-4"
          style="text-align:center; border-bottom: 1px solid rgba(0,0,0,0.4);"
        >Upload Documents to your Drive</p>
      </v-flex>
    </v-layout>

    <v-layout class="mt-n10" row wrap>
      <v-flex>
        <v-img class="mx-auto" color="red" src="../assets/graphic.svg" width="80%" height="auto"></v-img>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex>
        <p class="headline text-capitalize grey--text text--darken-4 font-weight-light my-5 py-4" style="text-align:center; border-bottom: 1px solid rgba(0,0,0,0.4);">Your Uploads</p>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex v-for="files in uploads" :key="files.fileName" xs12 sm12 md3 lg3 xl4>
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

          <!-- <v-flex v-for="image in files.images" :key="image.id">
            <v-img :src="image"></v-img>
          </v-flex>-->
          <v-flex v-for="image in files.images" :key="image.id">
            <v-img :src="image"></v-img>
          </v-flex>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">Read</v-btn>
            <v-btn text color="deep-purple accent-4">Bookmark</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="editFile(files)" class="mx-n3" text color="grey darken-3">
              <v-icon>mdi-grease-pencil</v-icon>
            </v-btn>
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
    files: {
      fileName: null,
      fileReview: null,
      fileImage: null,
      images: []
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
    return {
      uploads: db.collection("media")
    };
  },
  methods: {
    uploadDocument(event) {
      let file = event.target.files[0];

      var storageRef = fb.storage().ref("images/" + file.name);

      let uploadTask = storageRef.put(file);

      // console.log(event.target.files[0]);

      uploadTask.on(
        "state_changed",
        snapshot => {},
        error => {
          console.error(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(getDownloadURL => {
            this.files.images.push(getDownloadURL);
            onUploadProgress: uploadEvent => {
              console.log(
                "Upload Progress: " +
                  Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                  "%"
              );
            };
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
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
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
    readData() {},
    addFile() {
      // db.collection("media").add(this.files);
      this.$firestore.uploads.add(this.files);
      console.log("Document successfully written!");
      this.dialog1 = false;
      // this.readData();
    },
    addNew() {
      this.dialog1 = true;
      this.dialog = "new";
      // this.reset();
    },
    clearFile(files) {
      this.dialog1 = false;
      // this.files.fileName = null;
      // this.files.fileReview = null;
    },
    clearFileUpdate() {
      this.dialog2 = false;
      // this.files.fileName = null;
      // this.files.fileReview = null;
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;
    }
  },
  created() {
    // this.readData();
  }
};
</script>

<style lang="scss" scoped>
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