<template>
  <div class="aux">
    <v-container fluid class="main">
      <v-row class="row">
        <v-col cols="6" class="pa-0 ma-0">
        </v-col>
        <v-col cols="6" class="center ma-0 pa-0">
          <div class="form">
            <br/>
            <h1>Iniciar Sesión</h1>
            <br/>
            <label for="username">Usuario</label>
            <br>
            <input v-model="username" type="text" id="username" class="input" placeholder="Ingrese su usuario"/>
            <br>
            <label for="password">Contraseña</label>
            <br>
            <input v-model="password" type="password" id="password" class="input" placeholder="Ingrese su contraseña"/>
            <br>
            <button @click="login" class="btn">Ingresar</button>
            <br>
            <br/>
            <router-link :to="{name: 'ForgotUser'}">¿Olvidó su usuario?</router-link>
            <br>
            <br>
            <router-link :to="{name: 'ForgotPassword'}">¿Olvidó su contraseña?</router-link>
            <br>
            <br>
            <label>¿No tiene cuenta? </label>
            <router-link :to="{name: 'Register'}">Regístrese</router-link>
            <br>
            <br/>
            <label>¿Necesita ayuda? </label>
            <router-link :to="{name: 'Help'}">Haga click aquí</router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {Credentials} from "../../api/user";
import {mapActions} from 'vuex'
export default {
  name: 'App',
  components: {},
  data() {
    return {
      result: null,
      sport: null,
      controller: null
    }
  },
  methods: {
    ...mapActions('security', {
      $getCurrentUser: 'getCurrentUser',
      $login: 'login',
    }),
    setResult(result){
      this.result = JSON.stringify(result, null, 2)
      alert(this.result);
    },
    async login(){
      try {
        //Este login funciona, faltaría ver tema de captar error si no puede logginear
        var a = document.getElementById("username").value;
        var b = document.getElementById("password").value;
        const credentials = new Credentials(a, b);
        await this.$login({credentials, rememberMe: false});
        const redirectPath = this.$route.query.redirect || "/Home";
        await this.$router.push(redirectPath);
      }
      catch(e){
        this.setResult(e.description);
      }
    }
  }
}
</script>

<style scoped>
.aux {
  font-family: "Raleway", sans-serif;
  font-weight: bolder;
}
.main{
  position:center;
  flex-direction: column;
  justify-content: center;
  background-image: url("../assets/FondoLogin.png");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  margin: 0;
  padding: 0;
  height:100%;
}
.form{
  background-color: rgba(255,255,255, 0.7);
  height:100vh;
  margin:0;
  padding:0;
  /*justify-content: space-between;*/
  vertical-align: center;
}
input{
  width: 80%;
  position: center;
}
.row{
  height:100%;
}
</style>