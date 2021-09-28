<template>
  <v-app>
    <v-main>
      <v-container>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="PushApp Logo"
            class="shrink mr-2"
            contain
            src="https://www.pngrepo.com/png/349252/180/sash-white-red-football-shirt.png"
            transition="scale-transition"
            width="40"
        />
        <span class="font-weight-light">PushApp</span>
      </div>
      <div>
        <v-btn
            :to="{name: 'Home'}"
            text
        >
          <span class="mr-2">Inicio</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn
            :to="{name: 'Routines'}"
            text
        >
          <span class="mr-2">Mis Rutinas</span>
          <v-icon>mdi-heart-multiple</v-icon>
        </v-btn>
        <v-btn
            :to="{name: 'Explore'}"
            text
        >
          <span class="mr-2">Explorar</span>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn
            :to="{name: 'Help'}"
            text
        >
          <span class="mr-2">Ayuda</span>
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>
        <v-btn
            :to="{name: 'RoutineDetails'}"
            text
        >
          <span class="mr-2">Crear Rutina</span>
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <div>
        <v-btn
            :to="{name: 'Routines'}"
            text
        >
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn
            :to="{name: 'Login'}"
            text
        >
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
        <router-view />
      </v-container>
    </v-main>
    </v-app>
</template>

<script>
export default {
  name: "NavBar.vue"
}
</script>

<style scoped>
  #nav a.router-link-exact-active{
    color: orange;
  }

</style>