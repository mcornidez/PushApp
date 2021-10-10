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
    <div class="aux">
      <div class="progBar">
        Progreso: 50%
      </div>
      <v-btn :to="{name: 'CurrentRoutine'}" class="boton" fab dark small color="orange"><v-icon dark>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
    </div>
    <!--<div v-if="auxVar === 'true'" id="progBar">
      <ProgBar/>
    </div>-->
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: 'app',
  data(){
    return{
      username: store.name,
      auxVar: 'true'
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
  width: 80%;
  height: 60%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-item {
  /*background-color: rgba(255, 255, 255, 0.8);*/
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 20px;
  font-size: 60px;
  text-align: center;
  justify-content: center;
  overflow: hidden;
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

.progBar{
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  position: center;
  background-color: rgba(245, 171, 53, 1);
  width: 50vw;
  border-radius: 15px;
  border: 1px solid black;
  color: black;
  font-weight: bolder;
  font-size: xx-large;
  justify-content: space-between;
}

.boton{
  margin-top: 54px;
  margin-left: 15px;
  text-underline: transparent;
  border: 0.5px solid black;
}

.aux{
  display: inline-flex;
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