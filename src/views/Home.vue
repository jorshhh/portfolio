<template>
  <v-container class="mt-16 text-center" >
    <v-flex>
      <v-card class="grey rounded-0" > jorsh@jor.sh: ~</v-card>
      <v-card class="pb-16 pt-16 pl-5 pr-5 rounded-0" color="black" dark>

        <v-card-text class="home-title font-weight-bold white--text">Jorge Rangel</v-card-text>
        <v-card-text class="home-subtitle green-text"> $ Full stack dev
          <v-icon class="green-text rotate cursor"  v-if="blinkTik">mdi-rectangle</v-icon>
          <v-icon class="green-text rotate cursor" v-else>mdi-rectangle-outline</v-icon>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      blinkTik: false
    }
  },
  created() {
    this.interval = setInterval(() => this.blinkTik = !this.blinkTik, 500);
  },
}
</script>

<style lang="scss">

.transparent {
  background-color: transparent!important;
  border-color: transparent!important;
}

.home-title{
  font-size: 2.5em !important;
}

.home-subtitle{
  font-size: 1.5em !important;
}

.green-text{
  color: green !important;
}

.rotate {
  transform: rotate(-90deg);
  margin-left: -10px;
  margin-top: -2px;
}

</style>