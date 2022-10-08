<template>
  <v-app>
    <!--ヘッダー-->
    <AppHeader/>

    <!--ページ-->
    <v-main>
      <transition mode="out-in">
        <router-view/>
      </transition>
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
  }),
};
</script>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}
</style>