<template>
  <header>
    <v-app-bar
      app
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>MyPortfolioSite</v-toolbar-title>
      <v-tabs>
        <v-tab
          v-for="(menuItem, index) in menuItems"
          :key="index"
        >
          {{ menuItem.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item
            v-for="(menuItem, index) in menuItems"
            :key="index"
          >
            <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>