<template>
  <v-app-bar
    fixed
    elevate-on-scroll
    dense
    app
    dark
  >
    <v-container class="d-flex align-center">
      <v-toolbar-title
        class="mr-auto text-h4"
        style="cursor:pointer"
        @click="$router.push('/')"
      >
        Shun's Portfolio
      </v-toolbar-title>
      <div class="d-none d-md-inline-block">
        <v-btn
          v-for="item in menu"
          :key="item.label"
          :to="item.path"
          text
          x-large
        >
          {{ item.label }}
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menu: [
        { label: 'Profile', path: "/profile" },
        { label: 'Skills', path: '/skills' },
        { label: 'Works', path: '/works' },
        { label: 'Contact', path: '/contact' },
      ]
    }
  }
}
</script>