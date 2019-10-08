<template>
  <v-container>
    <v-layout>
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
                <!-- dialog for random file upload -->
                <v-dialog v-model="dialog1" persistent max-width="600px">
                  <template v-slot:activator="{ on }">
                    <v-btn dark v-on="on" tile color="white" text>
                      <v-icon color="grey darken-4">mdi-file</v-icon>
                      <p class="my-2 black--text">File</p>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Upload file</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-file-input
                              multiple
                              label="File input"
                              accept="image/*|audio/*|video/*"
                            ></v-file-input>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="files.randomName"
                              label="Name / Company Name*"
                              required
                            >
                              <v-icon slot="prepend">mdi-account</v-icon>
                            </v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-textarea
                              v-model="files.randomPreview"
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
                      <v-btn class="red--text" text @click="clearRandom">
                        <v-icon>mdi-cancel</v-icon>Cancel
                      </v-btn>
                      <v-btn class="green--text" text @click="uploadFile">
                        <v-icon>mdi-cloud-upload</v-icon>Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <!-- dialog for only image upload -->
                <v-dialog v-model="dialog2" persistent max-width="600px">
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" tile color="white" class="black--text" text>
                      <v-icon color="grey darken-4">mdi-image</v-icon>
                      <p class="my-2 black--text">Image</p>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Upload an Image</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-file-input multiple label="File input" accept="image/*"></v-file-input>
                          </v-col>
                          <v-col cols="12">
                            <!-- <v-text-field label="Name*" required></v-text-field> -->
                            <v-text-field label="Name / Company Name*" required>
                              <v-icon slot="prepend">mdi-account</v-icon>
                            </v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-textarea
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
                      <v-btn class="red--text" text @click="dialog2 = false">
                        <v-icon>mdi-cancel</v-icon>Cancel
                      </v-btn>
                      <v-btn class="green--text" text>
                        <v-icon>mdi-cloud-upload</v-icon>Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <!-- dialod for only video upload -->
                <v-dialog v-model="dialog3" persistent max-width="600px">
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" tile color="white" class="black--text" text>
                      <v-icon color="grey darken-4">mdi-video</v-icon>
                      <p class="my-2 black--text">Video</p>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Upload Video</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-file-input multiple label="File input" accept="video/*"></v-file-input>
                          </v-col>
                          <v-col cols="12">
                            <!-- <v-text-field label="Name*" required></v-text-field> -->
                            <v-text-field label="Name / Company Name*" required>
                              <v-icon slot="prepend">mdi-account</v-icon>
                            </v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-textarea
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
                      <v-btn class="red--text" text @click="dialog3 = false">
                        <v-icon>mdi-cancel</v-icon>Cancel
                      </v-btn>
                      <v-btn class="green--text" text>
                        <v-icon>mdi-cloud-upload</v-icon>Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </v-app-bar>
            <v-divider></v-divider>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>

    <!-- <v-layout row wrap>
      <v-row>
        <v-col>
          <v-flex v-for="card in cards" :key="card" class="my-5" xs12 sm6 md4 lg4 xl4>
            <v-card class="v-card" raised>
              <v-card-title class="pa-2 card-title">
                <v-layout>
                  <v-flex xs3 sm3 md3 lg3 xl3>
                    <v-avatar class="card-avatar">
                      <v-img width="1.2em" height="auto"></v-img>
                    </v-avatar>
                  </v-flex>

                  <v-flex xs7 sm7 md7 lg7 xl7>
                    <div class="title-texts mt-n1">
                      <p>{{ card.randomName }}</p>
                      <h6 class="mt-n8">{{card.randomPreview }}</h6>
                    </div>
                  </v-flex>

                  <v-flex xs3 sm3 md3 lg3 xl3>
                    <v-btn text icon color="grey darken-3">
                      <v-icon></v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-col>
      </v-row>
    </v-layout>-->
    <v-layout class="imgk">
      <v-layout row wrap class="imgs my-10">
        <v-flex v-for="card in cards" :key="card" class="my-5" xs12 sm6 md4 lg4 xl4>
          <v-card class="v-card" raised>
            <v-card-title class="pa-2 card-title">
              <v-layout>
                <v-flex xs3 sm3 md3 lg3 xl3>
                  <v-avatar class="card-avatar">
                    <v-img width="1.2em" height="auto"></v-img>
                  </v-avatar>
                </v-flex>

                <v-flex xs7 sm7 md7 lg7 xl7>
                  <div class="title-texts mt-n1">
                    <p>{{ card.randomName }}</p>
                    <h6 class="mt-n8">{{ card.randomPreview }}</h6>
                  </div>
                </v-flex>

                <v-flex xs3 sm3 md3 lg3 xl3>
                  <v-btn text icon color="grey darken-3">
                    <v-icon></v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-img height="auto"></v-img>

            <v-card-action>
              <v-row justify="space-around">
                <v-btn text icon color="red">
                  <v-icon></v-icon>
                </v-btn>
                <v-btn text icon color="grey darken-3">
                  <v-icon></v-icon>
                </v-btn>
              </v-row>
            </v-card-action>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import { fb, db } from "../firebaseConfig";
export default {
  data: () => ({
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
    collapseOnScroll: true,
    dialog1: false,
    dialog2: false,
    dialog3: false,
    cards: [],
    files: {
      //   randomFile: null,
      randomName: null,
      randomPreview: null
    }
  }),
  methods: {
    readData() {
      db.collection("Media")
        .get()
        .then(querySnapshot => {
          //   this.cards = querySnapshot;
          querySnapshot.forEach(doc => {
            console.log(doc.id, "=>", doc.data());
            this.cards.push(doc.data());
          });
        });
    },
    uploadFile() {
      db.collection("Media")
        .add(this.files)
        .then(docRef => {
          console.log("Document written with ID ", docRef.id);
          this.readData();
        })
        .catch(error => {
          console.error("Error adding document: ", error);
        });
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
    clearRandom() {
      this.randomFile = null;
      this.randomName = null;
      this.randomPreview = null;
      this.dialog1 = false;
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
</style>