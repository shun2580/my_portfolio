<template>
  <section id="profile">
    <div class="py-12"></div>

    <v-container class="text-center">
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
          西川 駿<br>
          Shun Nishikawa<br>
          <br>
          京都府出身の新米エンジニアです。25才でIT業界へ転職し、客先常駐でWEBシステムやスマホアプリの運用監視業務を行っています。その中でVue.jsを用いた小規模システムの開発に携わる機会があったことから開発業務に興味を持ち、JavaScriptの勉強を始めました。現在は言語の勉強をすすめるとともに、何かシステムやアプリを作成できないか模索中です。
        </v-responsive>

        <v-avatar
          class="elevation-12 mb-12"
          size="128"
        >
          <v-img src="@/assets/img/profile.png"></v-img>
        </v-avatar>

        <div></div>

        <v-btn
          icon
          href="https://github.com/shun2580"
        >
          <v-icon x-large>mdi-github</v-icon>
        </v-btn>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

