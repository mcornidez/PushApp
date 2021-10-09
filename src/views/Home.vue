<template>
  <div id="home">
    <div id="welcome">
      <b>¡Bienvenido, {{username}}!</b>
    </div>
    <!-- Inspirado en https://www.w3schools.com/css/css_grid.asp -->
    <div class="grid-container">
      <div class="grid-item">
        <v-icon size="80"  class="icon">mdi-heart-multiple</v-icon>
        <router-link style="text-decoration: none; color: inherit" :to="{name:'Routines'}">
          <div class="subtitulo">Mis Rutinas</div>
        </router-link>
      </div>
      <div class="grid-item">
        <v-icon size="80"  class="icon">mdi-magnify</v-icon>
        <router-link style="text-decoration: none; color: inherit" :to="{name:'Explore'}">
          <div class="subtitulo">Buscar</div>
        </router-link>
      </div>
      <div class="grid-item">
        <v-icon size="80" class="icon">mdi-magnify</v-icon>
        <router-link style="text-decoration: none; color: inherit" :to="{name:'Explore'}">
          <div class="subtitulo">Explorar</div>
        </router-link>
      </div>
      <div class="grid-item">
        <v-icon size="80"  class="icon">mdi-help-circle-outline</v-icon>
        <router-link style="text-decoration: none; color: inherit" :to="{name:'Help'}">
          <div class="subtitulo">Ayuda</div>
        </router-link>
      </div>
    </div>
      <!--
      <v-container fluid class="cards">
        <v-row width="100vw">
          <v-col cols="6" height="100vh">
            <v-card height="100%">
              <v-icon>mdi-heart-multiple</v-icon>
              <div>Explorar</div>
            </v-card>
          </v-col>
          <v-col cols="6" height="100px">
            <v-card>
              <v-icon>mdi-magnify</v-icon>
              <div> Buscar</div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-card>
              <v-icon>mdi-magnify</v-icon>
              <div>Eexplorar</div>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-icon>mdi-help-circle-outline</v-icon>
              <div>Buscar</div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>-->
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: 'app',
  data(){
    return{
      username: store.name
    }
  },
}
</script>

<style scoped>

#home{
  background-image: url("../assets/fondoHome.jpg");
  height: 100vh;
  background-size: cover;
  font-family: "Raleway", sans-serif;
  color: black;
}
#welcome{
  background: rgba(255,255,255,0.6);
  font-size: xxx-large;
  color: black;
  height: 15vh;
  align-content: center;
  text-align: center;
  min-width: 30vw;
  max-width: 50vw;
  margin: auto;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 3px solid black;
  border-top: 0px;
}

.grid-container {
  display: inline-grid;
  margin-top: 8vh;
  background-color: rgba(255,255,255,0.9);
  width: 90%;
  height: 70%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-item {
  /*background-color: rgba(255, 255, 255, 0.8);*/
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 20px;
  font-size: 60px;
  text-align: center;
  justify-content: center;
}
.icon{
  margin-top: 40px;
}

.subtitulo{
  font-weight: bold;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  color: blacK;
  text-underline-color: rgba(0,0,0,0);
}

/*
#mainBody{
  background: rgba(255,255,255,0.6);
  background-size: cover;
  height: 100vh;
  justify-content: space-between;
}
.card{
  margin: 10px;
  width: 40vw;
  height:50vh;
  position:center;
  justify-content: center;
  text-align:center;
  font-family: "Raleway", sans-serif;
  font-size: x-large;
  background-color: red;
}
.card2{
  width: 40vw;
  height: 50vh;
}
.cards{
  margin: 0;
  padding: 0;
  height: 100vh;
  position:center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}*/

</style>