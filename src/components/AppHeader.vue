<template>
  <div>
    <v-app-bar
      flat
      fixed
      elevate-on-scroll
      dense
      dark
    >
      <v-app-bar-nav-icon :class="smartphone" @click.stop="showList()"/>
        <v-tabs
          icons-and-text
          centered
        >
          <div :class="pc">
            <v-tab v-for="info in tabInfo" :key="info.label" :to="info.path" v-scroll-to="info.label" class="ml-7">
              {{ info.label }}
              <v-icon>{{ info.icon }}</v-icon>
            </v-tab>
          </div>
        </v-tabs>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      hide-overlay
      class="white--text"
    >
      <v-list
        nav
        dense
      >
        <v-list-item>
          Shun's Portfolio
        </v-list-item>
        <v-divider/>
        <v-list-item-group
          active-class="light-grey--text text--accent-4"
        >
          <v-list-item v-for="info in tabInfo" :key="info.label" :to="info.path" v-scroll-to="info.label">
            <v-list-item-icon>
              <v-icon>{{ info.icon }}</v-icon>
            </v-list-item-icon>
            {{ info.label }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
   </div>
</template>

<script>
export default {
  name: "Header",
  data:()=>({
    smartphone:"d-flex d-sm-none",
    pc:"d-none d-sm-flex",
    drawer:false,
    tabInfo:[
      { label: 'Home', path: '/', icon:"mdi-home" },
      { label: 'Profile', path: '/profile', icon:"mdi-account" },
      { label: 'Skills', path: '/skills', icon:"mdi-monitor"},
      { label: 'Works', path: '/works', icon:"mdi-account-multiple" },
      { label: 'Contact', path: '/contact', icon:"mdi-book" },
    ],
  }),
  methods:{
    showList: function (){
      this.drawer=!this.drawer;
    },
  },
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Josefin+Sans:ital@1&family=Kosugi+Maru&family=Satisfy&display=swap');
.title{
    font-family: 'Satisfy', cursive;
    font-size: 5px;
}
</style>