<template>
  <v-app>
    <!--ヘッダー-->
    <AppHeader/>

    <!--ページ-->
    <v-main>
      <transition mode="out-in">
        <router-view/>
      </transition>
      <!-- 以下アニメーションを追加すると画面がクリックできないためコメントアウト中 -->
      <!--<snowf
        :amount="50"
        :size="10"
        :speed="1.5"
        :wind="0"
        :opacity="0.8"
        :swing="1"
        :image="null"
        :zIndex="null"
        :resize="true"
        color="#dcdcdc"
      />-->
    </v-main>

    <!--フッター-->
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
//import Snowf from 'vue-snowf';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    //Snowf,
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