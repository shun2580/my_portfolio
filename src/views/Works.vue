<template>
  <div class="works">
    <div class="py-12"></div>
      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">WORKS</h2>
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
            class="d-flex child-flex"
          >
            <v-img
              @click="openModal(item)"
              :src="item.img_src"
              alt="Card image"
              aspect-ratio="1"
              max-height="350"
              max-width="500"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <modal :val="postItem" v-show="showContent" @close="closeModal" />
          </v-col>
        </v-row>
      </v-container>
    <div class="py-12"></div>
  </div>
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
            lang: 'HTML, CSS(Sass), Vue.js, Vuetify, github.io',
            img_src: require('../assets/img/portfolio.png'),
          },
          {
            id: 2,
            desc: '-',
            lang: '-',
            img_src: require('../assets/img/coming_soon.png'),
          },
          {
            id: 3,
            desc: '-',
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
  .works {
    background-image: url("~@/assets/img/work.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
  }

  #item-list {
    display:flex;
  }
</style>