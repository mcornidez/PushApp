<template>
  <div id="home">
    <div class="body">
      <div id="welcome">
        <b>¡Bienvenido, {{$user.username}}!</b>
      </div>
      <!-- Inspirado en https://www.w3schools.com/css/css_grid.asp -->
      <div class="grid-container">
        <router-link style="text-decoration: none; color: inherit" :to="{name:'Routines'}">
          <div class="grid-item">
            <v-icon size="80"  class="icon" color="#2c3e50">mdi-heart-multiple</v-icon>
            <div class="subtitulo">Mis Rutinas</div>
          </div>
        </router-link>
        <router-link style="text-decoration: none; color: inherit" :to="{name:'Explore'}">
          <div class="grid-item">
            <v-icon size="80"  class="icon" color="#2c3e50">mdi-magnify</v-icon>
            <div class="subtitulo">Explorar</div>
          </div>
        </router-link>
        <router-link style="text-decoration: none; color: inherit" :to="{name:'Profile'}">
          <div class="grid-item">
            <v-icon size="80" class="icon" color="#2c3e50">mdi-account-circle</v-icon>
            <div class="subtitulo">Mi Perfil</div>
          </div>
        </router-link>
        <router-link style="text-decoration: none; color: inherit" :to="{name:'CreateRoutine'}">
          <div class="grid-item">
            <v-icon size="80"  class="icon" color="#2c3e50">mdi-plus-circle-multiple</v-icon>
            <div class="subtitulo">Crear Rutina</div>
          </div>
        </router-link>
      </div>
      <div v-if="activeRoutine" class="aux">
        <div class="progBar">
          Progreso: 50%
        </div>
        <v-btn :to="{name: 'CurrentRoutine'}" class="boton" fab dark small color="orange">
          <v-icon dark>mdi-arrow-right-thin-circle-outline</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
//import store from "@/store/module/security";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: 'app',
  data(){
    return{
      result: null,
      username: null,
      activeRoutine: false
    }
  },
  async created() {
    await this.getCurrentUser();
  },
  computed: {
    ...mapState('security', {
      $user: state => state.user,
    }),
    ...mapGetters('security', {
      $isLoggedIn: 'isLoggedIn'
    }),
    canCreate() {
      return this.$isLoggedIn && !this.sport
    },
    canOperate() {
      return this.$isLoggedIn
      // BORRO this.sport PARA PROBAR
    },
    canAbort() {
      return this.$isLoggedIn && this.controller
    }
  },
  methods:{
    ...mapActions('security',{
      $getCurrentUser: 'getCurrentUser'
    }),
    setResult(result){
      this.result = JSON.stringify(result, null, 2)
    },
    async getCurrentUser() {
      try {
        const user = await this.$getCurrentUser()
        this.username = user.firstName;
      }
      catch(e){
        this.setResult(e.description);
      }
    },
  }
}
</script>

<style scoped>

#home{
  background-image: url("../assets/fondoHome.jpg");
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  font-family: "Raleway", sans-serif;
  color: black;
}
.body{
  padding-top: 20px;
}
#welcome{
  font-family: "Raleway", sans-serif;
  color: black;
  font-weight: bolder;
  font-size: xxx-large;
  padding-bottom: 0;
  margin: auto;
  vertical-align: middle;
  border-radius: 15px;
  width: 40vw;
  background-color: lightblue;
  position: center;
  border: 3px solid black;
}

.grid-container {
  display: inline-grid;
  margin-top: 8vh;
  /*background-color: rgba(255,255,255,0.9);*/
  width: 80%;
  height: 60%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}
.grid-item {
  /*background-color: rgba(255, 255, 255, 0.8);*/
  background-color: rgba(255,255,255,0.9);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
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
</style>