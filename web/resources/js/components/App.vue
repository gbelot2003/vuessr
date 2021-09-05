<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
              <v-list-tile-content>
                {{ item.title }}
              </v-list-tile-content>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <!-- Top Bar -->
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    menuItems: [
      { icon: "mdi-home", title: "Inicio" },
      { icon: "mdi-account", title: "login" },
    ],
  }),
};
</script>
