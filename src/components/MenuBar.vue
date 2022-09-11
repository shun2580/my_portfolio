<v-btn
          class="d-inline-block d-md-none"
          icon
          @click="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>


            <v-navigation-drawer
      v-model="drawer"
      right
      app
      hide-overlay
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title text-center">
            <router-link to='/' class="link">
              Shun's Portfolio
            </router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in menu"
          :key="item.label"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>mdi-menu-right</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>