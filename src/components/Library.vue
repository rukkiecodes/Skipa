<template>
  <div class="library">
    <v-layout row wrap>
      <v-flex class="advert">
        <v-img class="white--text image" height="100%" src="@/assets/bg4.jpg">
          <div class="texts">
            <h1>Hey There !!</h1>
            <p class="p1">Upload your files for safe keeping</p>
          </div>
        </v-img>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex class="form">
        <v-form>
          <v-container>
            <v-text-field>
              <template v-slot:label>Search Skipa</template>
            </v-text-field>
          </v-container>
        </v-form>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex class="my-5" xs12 sm6 md3 lg3 xl3>
        <v-hover v-slot:default="{ hover }">
          <v-card max-width="250" class="mx-auto" :elevation="hover ? 12 : 2">
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

      <v-flex class="my-5" xs12 sm6 md3 lg3 xl3>
        <v-hover v-slot:default="{ hover }">
          <v-card max-width="250" class="mx-auto" :elevation="hover ? 12 : 2">
            <v-row class="py-4 pl-4">
              <v-col class="shrink">
                <v-img height="200" width="200" src="@/assets/add-folder.png">
                  <p>Add a Folder</p>
                </v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-flex>

      <v-flex class="my-5" xs12 sm6 md3 lg3 xl3>
        <v-hover v-slot:default="{ hover }">
          <v-card max-width="250" class="mx-auto" :elevation="hover ? 12 : 2">
            <v-row class="py-4 pl-4">
              <v-col class="shrink">
                <v-img height="200" width="200" src="@/assets/photo.png">
                  <p>Upload a Photo</p>
                </v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex class="my-5" xs12 sm6 md3 lg3 xl3>
        <v-hover v-slot:default="{ hover }">
          <v-card max-width="250" class="mx-auto" :elevation="hover ? 12 : 2">
            <v-row class="py-4 pl-4">
              <v-col class="shrink">
                <v-img height="200" width="200" src="@/assets/video.png">
                  <p>Upload a Video</p>
                </v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <Footer />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Footer from "./Footer";
export default {
  components: {
    Footer
  }
};
</script>

<style lang="scss" scoped>
.library {
  margin: 0;
  padding: 0;
  height: 110vh;

  .advert {
    .image {
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 80%,
        54% 80%,
        50% 86%,
        46% 80%,
        0 80%
      );

      .texts {
        margin: auto;
        display: block;
        padding: 5%;
        position: relative;
        top: 20%;
        letter-spacing: 0.1em;

        h1 {
          font-weight: lighter;
          font-size: 2.5em;
        }
        p {
          font-size: 1em;
        }
      }
    }
  }

  .form {
    max-width: 60%;
    margin: auto;
  }
}
</style>