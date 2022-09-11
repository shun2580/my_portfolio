<template>
    <v-main>
      <app-header/>
      <router-view/>
    </v-main>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  },

  data: () => ({
    //
  }),
};
</script>
