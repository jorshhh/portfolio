<template>
  <section class="mt-10 mb-10">
    <v-card
        v-for="item in items"
        :key="item.name"
        class="mx-auto mb-6 pa-8"
        max-width="600"
    >
      <v-img
          contain
          :src="item.logo"
      ></v-img>

      <v-card-title>
        <strong>{{item.name}}</strong>
      </v-card-title>

      <v-card-subtitle>
        {{item.description}}
      </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            text
            target="_blank"
            :href="item.link"
        >
          Visit
        </v-btn>


      </v-card-actions>

    </v-card>
  </section>
</template>

<script>
  export default {
    data: function (){
      return {
        items:[
          {
            name: "around.to",
            description: "The largest network of workspaces on flexible terms. For founders, from founders.",
            link: "https://around.to",
            logo: "/img/around_logo.png"
          },
          {
            name: "Bonnus",
            description: "Bonnus is a reward platform that allows publishers to monetize their apps or websites through moments or actions of the users.",
            link: "https://bonnus.me",
            logo: "/img/Bonnus.png"
          },
          {
            name: "Mesa",
            description: "Mesa helps restaurants attract customers at off-peak times and maximize their revenue through an app with dynamic, time-based discounts. Restaurants are able to fill their empty tables, while users are able to eat at restaurants with discounts -- the more off-peak, the bigger the discount.",
            link: "https://reservamesa.cl",
            logo: "/img/mesa_logo.png"
          },
        ]
      }
    }
  }
</script>