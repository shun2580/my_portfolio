<template>
  <div class="skill">
    <div class="py-12"></div>
    <v-container fluid>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">SKILLS</h2>
      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>
      <wordcloud
        :data="defaultWords"
        name-key="name"
        value-key="value"
        :color="Accent"
        :show-tooltip="false"
      />
    </v-container>
  </div>
</template>

<script>
  import wordcloud from 'vue-wordcloud'
  export default {
    components: {
      wordcloud,
    },

    data () {
      return {
        defaultWords: [
        { name: 'Vue.js', value: 15 },
        { name: 'Javascript', value: 14 },
        { name: 'HTML', value: 15 },
        { name: 'css', value: 15 },
        { name: 'GitHub', value: 12 },
        { name: 'AWS', value:12 },
        { name: 'ZABBIX', value: 10 },
        { name: 'Slack', value: 12 },
        { name: 'VSCode', value: 13 },
        { name: 'Linux', value: 12 },
        { name: 'PHP', value: 12 },
        ]
      }
    }
  }
</script>

<style>
  .skill {
    background-image: url("~@/assets/img/skill.jpg");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
  }
</style>