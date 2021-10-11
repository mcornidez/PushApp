<template>
<div id="nav">
<div class="d-flex align-center">
  <v-img
      alt="PushApp Logo"
      class="mr-2 pa-4"
      contain
      src="../assets/PageLogo.png"
      transition="scale-transition"
      width="90"
  />
  <span class="logoText">Push<b>App</b></span>
</div>
<div class="d-flex align-center">
  <v-btn
      :to="{name: 'Home'}"
      text
      class="btn" :disabled="!canOperate">
    <span class="mr-2">Inicio</span>
    <v-icon>mdi-home</v-icon>
  </v-btn>
  <v-btn
      :to="{name: 'Routines'} "
      text
      class="btn" :disabled="!canOperate">
    <span class="mr-2">Mis Rutinas</span>
    <v-icon>mdi-heart-multiple</v-icon>
  </v-btn>
  <v-btn
      :to="{name: 'Explore'}"
      text
      class="btn" :disabled="!canOperate">
    <span class="mr-2">Explorar</span>
    <v-icon>mdi-magnify</v-icon>
  </v-btn>
  <v-btn
      :to="{name: 'CreateRoutine'}"
      text
      class="btn" :disabled="!canOperate">
    <span class="mr-2">Crear Rutina</span>
    <v-icon>mdi-plus-circle-multiple</v-icon>
  </v-btn>
  <v-btn
      :to="{name: 'Help'}"
      text
      class="btn">
    <span class="mr-2">Ayuda</span>
    <v-icon>mdi-help-circle-outline</v-icon>
  </v-btn>
</div>

<v-spacer></v-spacer>

<div class="d-flex align-center">
  <v-btn
      :to="{name: 'Routines'}"
      text
      class="btn" :disabled="!canOperate">
    <v-icon>mdi-heart-outline</v-icon>
  </v-btn>
  <v-btn
      :to="{name: 'Profile'}"
      text
      class="btn">
    <v-icon>mdi-account-outline</v-icon>
  </v-btn>
  <button @click="logout" class="btn">
    <v-icon>mdi-logout-variant</v-icon>
  </button>
</div>
</div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex'
//import {Credentials} from "../api/user";
//import {Sport} from "../api/sport";

export default {
  name: "NavBar.vue",
  computed: {
    ...mapState('security', {
      $user: state => state.user,
    }),
    ...mapGetters('security', {
      $isLoggedIn: 'isLoggedIn'
    }),
    canOperate() {
      return true
      //this.$isLoggedIn
    },
    methods: {
      ...mapActions('security', {
        $getCurrentUser: 'getCurrentUser',
        $logout: 'logout',
      }),
      async logout() {
        await this.$logout()
        this.clearResult()
      },
    },
  }
}
</script>

<style scoped>
#nav {
  padding: 30px;
  height: 15vh;
  display: flex;
  background-color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: white;
}
#nav a.router-link-exact-active{
  color: orange;
}
.btn {
  margin: 15px;
  background-color: transparent;
}
.logoText{
  color: white;
  font-size: xx-large;
  font-family: "Raleway", sans-serif;
  margin: 20px;
}
</style>