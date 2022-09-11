<template>
  <v-app>
    <!--ヘッダー-->
    <AppHeader/>

    <!--ページ-->
    <v-main>
      <router-view/>
    </v-main>

    <!--フッター-->
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },

  data: () => ({
    //
  }),
};
</script>
