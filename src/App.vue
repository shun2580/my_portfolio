<template>
  <v-app>
    <AppHeader/>
    <router-view />
  </v-app>
</template>
 
<script>
import AppHeader from './components/AppHeader.vue'
 
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>