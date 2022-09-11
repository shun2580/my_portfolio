<template>
  <v-app-bar
    color="blue"
    dense
  >
    <v-toolbar-title>
      <router-link to='/' class="link">
      My Portfolio
      </router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-tabs fixed-tabs>
        <router-link
          class="link"
          v-for="item in items"
          :key="item.to"
          :to="item.to"
        >
          <v-tab>{{ item.to }}</v-tab>
        </router-link>
      </v-tabs>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  data: () => ({
      items: [
        {to:'Profile'},
        {to:'Skills'},
        {to:'Works'},
        {to:'Contact'},
      ]
    })
}
</script>

<style>
.link {
  text-decoration: none;
}
</style>