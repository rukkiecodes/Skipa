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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
    value: [200, 675, 410, 390, 310, 460, 250, 240]
  })
};
</script>

<style lang="scss" scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
.statistics-card {
  width: 70%;
  margin: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>