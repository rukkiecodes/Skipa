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
              <template v-slot:activator="{ on }">
                <v-btn large dark v-on="on" text color="indigo">
                  <v-icon color="indigo">mdi-cloud-upload</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline grey--text text--darken-4">Upload file</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-file-input
                          class="grey--text text--darken-4"
                          multiple
                          label="File input"
                          accept="image/*|audio/*|video/*"
                        ></v-file-input>
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
                  <v-btn @click="addFile" class="green--text" text>
                    <v-icon left>mdi-cloud-upload</v-icon>
                    <span>Save</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog
              :fullscreen="$vuetify.breakpoint.xsOnly"
              v-model="dialog2"
              persistent
              max-width="50vw"
            >
              <!-- <template v-slot:activator="{ on }">
                <v-btn large dark v-on="on" text color="indigo">
                  <v-icon color="indigo">mdi-cloud-upload</v-icon>
                </v-btn>
              </template> -->
              <v-card>
                <v-card-title>
                  <span class="headline grey--text text--darken-4">Update file</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-file-input
                          class="grey--text text--darken-4"
                          multiple
                          label="File input"
                          accept="image/*|audio/*|video/*"
                        ></v-file-input>
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
                  <v-btn class="red--text" text @click="clearFileUpdate">
                    <v-icon left>mdi-cancel</v-icon>
                    <span>Cancel</span>
                  </v-btn>
                  <v-btn @click="fileUpdate" class="green--text" text>
                    <v-icon left>mdi-cloud-upload</v-icon>
                    <span>Save</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-app-bar>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex>
        <table class="table">
          <tr v-for="(upload, id) in uploads" :key="id">
            <td>{{ upload.data().fileName }}</td>

            <td>{{ upload.data().fileReview }}</td>

            <td class="d-flex">
              <v-btn @click="editFile(upload)" class="mx-n3" text color="primary">
                <v-icon>mdi-grease-pencil</v-icon>
              </v-btn>
              <v-btn @click="deleteFile(upload.id)" class="mx-n3" text color="red">
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
            </td>
          </tr>
        </table>
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
      fileReview: null
    },
    activeItem: null
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
    watcher(){
      db.collection("media").onSnapshot(querySnapshot => {
        this.uploads = [];
        querySnapshot.forEach(doc => {
          this.uploads.push(doc);
        })
      })
    },
    fileUpdate(){
      db.collection("media").doc(this.activeItem).update(this.files)
      .then(() => {
        console.log("Document writen successfully!");
        this.watcher();
        this.dialog2 = false;
      }).catch(error => {
        console.error("Error updating document: ", error);
      })
    },
    editFile(files){
      this.dialog2 = true;
      this.files = files.data();
      this.activeItem = files.id;
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
          db.collection("media").doc(doc).delete()
          .then(() => {
            console.log("Document successfully deleted!");
          }).catch(error => {
            console.error("Error removing document: ", error);
          })
          Swal.fire({
            type: "success",
            title: "Deleted  successfully"
          });
        }
      });
    },
    readData() {
      db.collection("media").onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, " => ", doc.data());
          this.uploads.push(doc);
        });
      });
    },
    addFile() {
      db.collection("media").add(this.files);
      console.log("Document successfully written!");
      this.dialog1 = false;
      Swal.fire({
        type: "success",
        title: "Document created  successfully"
      });
      // this.readData();
    },
    clearFile(files) {
      this.dialog1 = false;
      this.files.fileName = null;
      this.files.fileReview = null;
    },
    clearFileUpdate(){
      this.dialog2 = false;
      this.files.fileName = null;
      this.files.fileReview = null;
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;
    }
  },
  created() {
    this.readData();
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
</style>