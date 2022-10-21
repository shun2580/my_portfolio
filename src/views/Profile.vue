<template>
  <div class="profile">
    <snowf
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
      />
    <div class="py-12"></div>
    <v-container class="text-center" fluid>
      <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>
      <v-responsive
        class="mx-auto mb-8"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>
          <v-divider></v-divider>
        </v-responsive>

        <v-responsive
          class="mx-auto title font-weight-light mb-8"
          max-width="720"
        >
          <div class="text">
            <span class="name_1">西川 駿</span><br>
            <span class="name_2">Shun Nishikawa</span><br>
            <br>
            <span class="about">京都府出身の新米エンジニアです。25才でIT業界へ転職し、客先常駐でWEBシステムやスマホアプリの運用監視業務を行っています。その中でVue.jsを用いた小規模システムの開発に携わる機会があったことから開発業務に興味を持ち、JavaScriptの勉強を始めました。現在は言語の勉強をすすめるとともに、何かシステムやアプリを作成できないか模索中です。</span>
          </div>
        </v-responsive>
        <v-row justify="center">
          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="@/assets/img/profile.png"></v-img>
          </v-avatar>
          <div class="icon">
            <v-btn
              href="https://github.com/shun2580"
              class="ma-11"
              fab
              dark
              color="purple"
            >
              <v-icon dark x-large>
                mdi-github
              </v-icon>
            </v-btn>

          </div>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import Snowf from 'vue-snowf'

export default {
  components: {
    Snowf,
  },

  data: () => ({
  }),
};
</script>

<style>
.profile {
  background-image: url("~@/assets/img/profile_room.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
}

.name_1 {
  color: black;
  font-weight: bold;
  font-size: 35px;
  text-shadow: 2px 2px 5px white;
}

.name_2 {
  color: black;
  font-weight: bold;
  font-size: 25px;
  text-shadow: 2px 2px 5px white;
}

.about {
  color: black;
  font-weight: bold;
  font-size: 20px;
  text-shadow: 2px 2px 5px white;
}

</style>