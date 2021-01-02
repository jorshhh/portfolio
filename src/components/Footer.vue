<template>
  <v-footer
      dark
      padless
      app
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="accent">

        <router-link to="/about" class="secondary--text">About me</router-link>

        <v-spacer></v-spacer>

        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
            :href="icon.link"
            target="_blank"
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        Made with Vue.js + Vuetify | {{ new Date().getFullYear() }} — <strong>Jorge Rangel</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>

export default{
  name: 'page-footer',
  data: () => ({
    icons: [
      {
        icon:'mdi-email',
        link: "mailto:j.rangelm@me.com"
      },
      {
        icon:'mdi-twitter',
        link: "https://twitter.com/jorshhh"
      },
      {
        icon:'mdi-instagram',
        link: "https://instagram.com/jorshhh"
      },
      {
        icon:'mdi-linkedin',
        link: "https://www.linkedin.com/in/jorge-rangel-0b043035/"
      }
    ],
  }),
}

</script>