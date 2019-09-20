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

    <v-layout>
      <v-flex>
        
      </v-flex>
    </v-layout>
  </div>
</template>

<style lang="scss" scoped>
.library {
  margin: 0;
  padding: 0;

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

      .texts{
        margin: auto;
        display: block;
        padding: 5%;
        position: relative;
        top: 20%;
        letter-spacing: .1em;

        h1{
          font-weight: lighter;
          font-size: 2.5em;
        }
        p{
          font-size: 1em;
        }
      }
    }
  }
}
</style>