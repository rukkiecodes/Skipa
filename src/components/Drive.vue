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
    files: {
    //   randomFile: null,
      randomName: null,
      randomPreview: null
    }
  }),
  methods: {
    uploadFile() {
      db.collection("Media").add(this.files)
      .then(docRef => {
          console.log("Document written with ID ", docRef.id);
          this.reset();
      })
      .catch(error => {
          console.error("Error adding document: ", error);
      });
    },
    reset(){
        Object.assign(this.$data, this.$options.data.apply(this));
    },
    clearRandom() {
      this.randomFile = null;
      this.randomName = null;
      this.randomPreview = null;
      this.dialog1 = false;
    }
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
</style>