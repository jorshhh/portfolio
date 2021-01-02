<template>
  <v-app>
    <page-navigation></page-navigation>

    <!-- Sizes your content based upon application components -->
    <v-main class="secondary">

      <router-view></router-view>

    </v-main>
    <page-footer></page-footer>
  </v-app>
</template>

<script>

import PageFooter from "@/components/Footer";
import PageNavigation from "@/components/Navigation";

export default {
  name: 'App',
  components: {PageNavigation, PageFooter},
  data: () => ({
    //
  }),
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Inconsolata|Oswald');
#app {
  font-family: 'Inconsolata', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.v-application .text-h3{
  font-family: 'Inconsolata', sans-serif !important;
}

</style>
