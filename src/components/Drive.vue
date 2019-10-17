<template>
  <v-container>
    <v-layout row wrap>
      <v-row justify="center">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" class="statistics-card mt-4 mx-auto">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="indigo"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="labels"
                :value="value"
                color="white"
                line-width="2"
                padding="16"
              ></v-sparkline>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2">Storage Readings</div>
              <div class="subheading font-weight-light grey--text">Last Upload Performance</div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small>mdi-clock</v-icon>
              <span class="caption grey--text font-weight-light">last upload 26 minutes ago</span>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-row>
    </v-layout>

    <v-layout row wrap>
      <v-row justify="center">
        <v-col align-self="center">
          <v-card flat class="overflow-hidden upload-card">
            <v-card-title>
              <v-card-text>Upload Options</v-card-text>
            </v-card-title>
            <v-app-bar dense color="white" dark>
              <v-row justify="space-around">
                <v-dialog
                  :fullscreen="$vuetify.breakpoint.xsOnly"
                  v-model="dialog1"
                  persistent
                  max-width="30%"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn dark v-on="on" tile color="white" text>
                      <v-icon color="grey darken-4">mdi-file</v-icon>
                      <p class="my-2 black--text">File</p>
                    </v-btn>
                  </template>
                  <v-card class="dialog-card">
                    <v-card-title>
                      <span class="headline grey--text text--darken-3">Upload Files</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <input type="file" @change="uploadFiles" multiple />
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="files.fileName"
                              label="Name / Company Name*"
                              required
                              prepend-icon="mdi-account"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-textarea
                              v-model="files.filePreview"
                              name="input-7-1"
                              label="Preview"
                              placeholder="Write a short review"
                              hint="What would you like people to think about you work"
                              prepend-icon="mdi-pencil"
                            ></v-textarea>
                          </v-col>
                        </v-row>

                        <v-row justify="center">
                          <v-card-actions>
                            <div class="flex-grow-1"></div>
                            <v-btn dark color="red" class="white--text" text @click="clearRandom">
                              <v-icon left>mdi-cancel</v-icon>
                              <span>Cancel</span>
                            </v-btn>
                            <v-btn dark color="primary" class="white--text" text @click="uploadFile">
                              <v-icon left>mdi-cloud-upload</v-icon>
                              <span>Sign Up</span>
                            </v-btn>
                          </v-card-actions>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-row>
            </v-app-bar>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>

    <v-layout class="imgk">
      <v-layout row wrap class="imgs my-10">
        <v-flex v-for="(card, id) in cards" :key="id" class="my-5" xs12 sm6 md4 lg4 xl4>
          <v-card class="v-card">
            <v-card-title class="pa-2 card-title">
              <v-layout>
                <v-flex xs3 sm3 md3 lg3 xl3>
                  <v-avatar class="card-avatar">
                    <v-img width="1.2em" height="auto"></v-img>
                  </v-avatar>
                </v-flex>

                <v-flex xs7 sm7 md7 lg7 xl7>
                  <div class="title-texts mt-n1">
                    <p>{{ card.fileName }}</p>
                    <h6 class="mt-n8">{{ card.filePreview }}</h6>
                  </div>
                </v-flex>

                <v-flex xs1 sm1 md1 lg1 xl1>
                  <v-btn text icon color="grey darken-3">
                    <v-icon>{{ files.buttons.download }}</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs1 sm1 md1 lg1 xl1>
                  <v-btn text icon color="primary">
                    <v-icon>{{ files.buttons.pen }}</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs1 sm1 md1 lg1 xl1>
                  <v-btn text icon color="primary">
                    <v-icon>{{ files.buttons.bin }}</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-row v-for="fileImage in files.fileImages" :key="fileImage">
              <v-col>
                <img :src="files.fileImages" />
              </v-col>
            </v-row>
            <v-card-actions>
              <v-row justify="space-around">
                <v-btn text icon color="red">
                  <v-icon>{{ files.buttons.heart }}</v-icon>
                </v-btn>
                <v-btn @click="deleteFile(location.id)" text icon color="grey darken-3">
                  <v-icon>{{ files.buttons.eye }}</v-icon>
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import { fb, db } from "../firebaseConfig";
import { storage } from "../firebaseConfig";
export default {
  data: () => ({
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [200, 675, 400, 390, 310, 460, 250, 240],
    collapseOnScroll: true,
    dialog1: false,
    cards: [],
    files: {
      fileImages: [],
      fileName: null,
      filePreview: null,
      buttons: {
        heart: "mdi-heart",
        eye: "mdi-eye",
        download: "mdi-download",
        pen: "mdi-pencil",
        bin: "mdi-trash-can"
      }
    }
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
    uploadFiles(e) {
      let file = e.target.files[0];

      var storageRef = fb.storage().ref("images/" + file.name);

      let uploadTask = storageRef.put(file);

      uploadTask.on(
        "state_changed",
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        error => {},
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            // this.img = getDownloadURL;
            this.files.fileImages.push(downloadURL);
            console.log("File available at", downloadURL);
          });
        }
      );
      console.log(e.target.files[0]);
    },
    readData() {
      db.collection("Media")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc.id, " => ", doc.data());
            this.cards.push(doc.data());
          });
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
    },
    readStorage() {},
    uploadFile() {
      db.collection("Media")
        .add(this.files)
        .then(docRef => {
          console.log("Document written with ID ", docRef.id);
          this.readData();
          this.dialog1 = false;
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    clearRandom() {
      this.files.fileImages = [];
      this.files.fileName = null;
      this.filePreview = null;
      this.dialog1 = false;
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
.toolbar-title {
  color: rgba(0, 0, 0, 0.8);
}
.imgk {
  width: 90%;
  margin: auto;

  .imgs {
    justify-content: space-around;
    display: flex;

    .v-card {
      width: 90%;

      .card-title {
        .title-texts {
          // margin-top: 5%;
          p {
            font-size: 0.6em;
          }
          h6 {
            font-size: 0.5em;
            font-weight: 400;
          }
        }
      }
    }
  }
}
</style>