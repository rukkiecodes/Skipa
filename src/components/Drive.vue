<template>
  <v-container>
    <v-layout row wrap>
      <v-row justify="center">
        <v-col align-self="center">
          <v-card flat class="overflow-hidden upload-card">
            <v-app-bar dense color="white" dark>
              <v-row justify="space-around">
                <!-- dialog for random file upload -->
                <v-dialog
                  :fullscreen="$vuetify.breakpoint.xsOnly"
                  v-model="dialog1"
                  persistent
                  max-width="50vw"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn dark v-on="on" tile color="white" text>
                      <v-icon color="grey darken-4">mdi-file</v-icon>
                      <p class="my-2 grey--text text--darken-4">File</p>
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
                            <v-text-field class="grey--text text--darken-4" v-model="fileName" label="Name / Company Name*" required>
                              <v-icon class="grey--text text--darken-4" slot="prepend">mdi-account</v-icon>
                            </v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-textarea
                              v-model="fileReview"
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
                        <v-icon>mdi-cancel</v-icon>Cancel
                      </v-btn>
                      <v-btn class="green--text" text>
                        <v-icon>mdi-cloud-upload</v-icon>Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <!-- dialog for only image upload -->
                <v-dialog
                  :fullscreen="$vuetify.breakpoint.xsOnly"
                  v-model="dialog2"
                  persistent
                  max-width="50vw"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" tile color="white" class="black--text" text>
                      <v-icon color="grey darken-4">mdi-image</v-icon>
                      <p class="my-2 grey--text text--darken-4">Image</p>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline grey--text text--darken-4">Upload an Image</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-file-input class="grey--text text--darken-4" multiple label="File input" accept="image/*"></v-file-input>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field class="grey--text text--darken-4" v-model="photoName" label="Name / Company Name*" required>
                              <v-icon class="grey--text text--darken-4" slot="prepend">mdi-account</v-icon>
                            </v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-textarea
                              name="input-7-1"
                              v-model="photoReview"
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
                      <v-btn class="red--text" text @click="clearPhotos">
                        <v-icon>mdi-cancel</v-icon>Cancel
                      </v-btn>
                      <v-btn class="green--text" text>
                        <v-icon>mdi-cloud-upload</v-icon>Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <!-- dialod for only video upload -->
                <v-dialog
                  :fullscreen="$vuetify.breakpoint.xsOnly"
                  v-model="dialog3"
                  persistent
                  max-width="50vw"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" tile color="white" class="black--text" text>
                      <v-icon color="grey darken-4">mdi-video</v-icon>
                      <p class="my-2 grey--text text--darken-4">Video</p>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline grey--text text--darken-4">Upload Video</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-file-input multiple label="File input" accept="video/*"></v-file-input>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field class="grey--text text--darken-4" v-model="videoName" label="Name / Company Name*" required>
                              <v-icon class="grey--text text--darken-4" slot="prepend">mdi-account</v-icon>
                            </v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-textarea
                            class="grey--text text--darken-4"
                              name="input-7-1"
                              v-model="videoReview"
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
                      <v-btn class="red--text" text @click="clearVideo">
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
export default {
  data: () => ({
    isMobile: false,
    dialog1: false,
    dialog2: false,
    dialog3: false,
    fileName: null,
    fileReview: null,
    photoName: null,
    photoReview: null,
    videoName: null,
    videoReview: null
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
    clearVideo() {
      this.dialog3 = false;
      this.videoName = null;
      this.videoReview = null;
    },
    clearPhotos() {
      this.dialog2 = false;
      this.photoName = null;
      this.photoReview = null;
    },
    clearFile() {
      this.dialog1 = false;
      this.fileName = null;
      this.fileReview = null;
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;
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
</style>