<template>
  <v-app>
    <v-navigation-drawer temporary v-model="drawer" app>
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in menuItems" :key="i" router :to="item.link">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>{{ item.title }}</v-list-item-content>
          </v-list-item>
        </v-list-item-group>
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
    drawer: null,
    menuItems: [
      { icon: "mdi-home", title: "Inicio", link: "/" },
      { icon: "mdi-lock", title: "login", link: "/login" },
      { icon: "mdi-account-lock", title: "Register", link: "/register" },
    ],
  }),
};
</script>
