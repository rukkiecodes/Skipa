<template>
  <div class="footer">
    <v-card raised>
      <v-footer raised :padless="padless">
        <v-card flat tile width="100%" class="white text-center">
          <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4 primary--text" icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="primary--text">
            {{ new Date().getFullYear() }}
            <strong class="subtitle-1">Skipa</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-email", "mdi-twitter", "mdi-instagram"],
    items: ["default", "absolute", "fixed"],
    padless: true,
    variant: "default"
  })
};
</script>