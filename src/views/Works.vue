<template>
<section id="works">
  <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">works</h2>

      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          cols="4"
        >
          <div class="card">
            <img
              @click="openModal(item)"
              :src="item.img_src"
              alt="Card image"
              max-width="25%"
            >
          </div>
          <modal :val="postItem" v-show="showContent" @close="closeModal" />
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
</section>

</template>

<script>
  import Modal from '/src/components/Modal.vue'
  export default {
    components: {
      Modal
    },
    data () {
      return {
        showContent: false,
        postItem: "",
        items: [
          { id: 1,
            desc: 'vue.jsとvuetifyで作ったこのポートフォリオサイトです。とりあえずの完成を目標にしたので、細かいデザインやアニメーションが設定できていないこと、レスポンシブデザインの追加が課題です。',
            lang: 'HTML, CSS(Sass),Javascript, Vue.js, Vuetify',
            img_src: require('../assets/img/portfolio.png'),
          },
          {
            id: 2,
            desc: 'coming_soon',
            lang: '-',
            img_src: require('../assets/img/coming_soon.png'),
          },
          {
            id: 3,
            desc: 'coming_soon',
            lang: '-',
            img_src: require('../assets/img/coming_soon.png'),
          },
        ]
      }
    },
    methods: {
       openModal(item) {
        this.showContent = true
        this.postItem = item
      },
      closeModal () {
        this.showContent = false
      }
    }
  }
</script>
<style>
#item-list{
  display:flex;
}
</style>