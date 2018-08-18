<template>
  <v-toolbar>
    <v-toolbar-title>Vue JS</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down" dark id="warna">
      <router-link to="/"><v-btn flat>Home</v-btn></router-link>
      <router-link to="/about"><v-btn flat>About</v-btn></router-link>
      <router-link to="/login"><v-btn flat>Login</v-btn></router-link>
    </div>
  </v-toolbar>
</template>