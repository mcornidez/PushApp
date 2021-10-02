<template>
  <!--<v-app id="nav">
    <v-main>
      <v-container>
        <v-app-bar
            app
            color="primary"
            dark
            class="nav2"
        >
          <div class="d-flex align-center">
            <v-img
                alt="PushApp Logo"
                class="shrink mr-2 pa-4"
                contain
                src="https://www.pngrepo.com/png/349252/180/sash-white-red-football-shirt.png"
                transition="scale-transition"
                width="40"
            />
            <span class="font-weight-light pa-4">Push<b>App</b></span>
          </div>
          <div>
            <v-btn
                :to="{name: 'Home'}"
                text
                class="btn">
              <span class="mr-2">Inicio</span>
              <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-btn
                :to="{name: 'Routines'}"
                text
                class="btn">
              <span class="mr-2">Mis Rutinas</span>
              <v-icon>mdi-heart-multiple</v-icon>
            </v-btn>
            <v-btn
                :to="{name: 'Explore'}"
                text
                class="btn">
              <span class="mr-2">Explorar</span>
              <v-icon>mdi-magnify</v-icon>
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

          <div>
            <v-btn
                :to="{name: 'Routines'}"
                text
                class="btn">
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
            <v-btn
                :to="{name: 'Login'}"
                text
                class="btn">
              <v-icon>mdi-account-outline</v-icon>
            </v-btn>
          </div>
        </v-app-bar>
        <router-view />
      </v-container>
    </v-main>
  </v-app>-->
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
          class="btn">
        <span class="mr-2">Inicio</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
          :to="{name: 'Routines'}"
          text
          class="btn">
        <span class="mr-2">Mis Rutinas</span>
        <v-icon>mdi-heart-multiple</v-icon>
      </v-btn>
      <v-btn
          :to="{name: 'Explore'}"
          text
          class="btn">
        <span class="mr-2">Explorar</span>
        <v-icon>mdi-magnify</v-icon>
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
          class="btn">
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-btn
          :to="{name: 'Login'}"
          text
          class="btn">
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar.vue"
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