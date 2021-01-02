<template>
  <v-app-bar  color="primary"
             dark
             flat
             tile
             fixed
             app>


    <v-toolbar-title class="ml-2">
      <router-link to="/">
        <span class="white--text">Jor.sh</span>
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn to="/software" plain>
      <v-icon class="mr-1">mdi-laptop</v-icon>
      Software
    </v-btn>

    <v-btn to="/photography" plain>
      <v-icon class="mr-1">mdi-camera</v-icon>
      Photography
    </v-btn>


  </v-app-bar>
</template>
<script>

export default{
  name: 'page-navigation',
  data () {
    return {

    }
  },
}

</script>

<style>

</style>