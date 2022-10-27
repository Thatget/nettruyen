<template>
  <v-app>
    <home-app-bar />

    <home-view />

    <home-footer />
  </v-app>
</template>

<script>
import HomeAppBar from '@/layouts/home/AppBar'
import HomeView from '@/layouts/home/HomeView'
import HomeFooter from '@/layouts/home/HomeFooter'
  export default {
    name: 'HomeLayout',
    components: {
      HomeAppBar,
      HomeView,
      HomeFooter,
    },
  }
</script>
