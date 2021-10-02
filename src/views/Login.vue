<template>
  <div id="background">
    <div id="mainBody">
      <!--<div id="rightSide">-->
        <div class="form">
          <br/>
          <h1>Iniciar Sesión</h1>
          <br/>
          <label for="username">Mail</label>
          <input v-model="username" type="text" id="username" class="input"/>
          <label for="password">Contraseña</label>
          <input v-model="password" type="password" id="password" class="input"/>
          <button @click="login" class="btn">Ingresar</button>
          <br/>
          <router-link :to="{name: 'ForgotMail'}">¿Olvidó su mail?</router-link>
          <router-link :to="{name: 'ForgotPassword'}">¿Olvidó su contraseña?</router-link>
          <label>¿No tiene cuenta? </label>
          <router-link :to="{name: 'Register'}">Regístrese</router-link>
          <br/>
          <label>¿Necesita ayuda? </label>
          <router-link :to="{name: 'Help'}">Haga click aquí</router-link>
        </div>
      <!--</div>-->
    </div>
  </div>
</template>

<script>

import store from "@/store"
export default {
  name: "Login",
  data(){
    return {
      username: null,
      password: null
    }
  },
  methods: {
    login(){
      //authenticate
      store.user = this.username;
      this.$router.push({name: 'Home'});
    }
  }
}
</script>

<style scoped>
  .form{
    margin-left: 800px;
    margin-right: 50px;
    display :flex;
    flex-direction: column;
    max-width: 400px;
  }

  #background{
    background-image: url("../assets/fondoHome.jpg");
    height: 100vh;
    background-size: cover;
  }

  #mainBody{
    background:rgba(255,255,255,0.8);
    height:100%;
  }

  #rightSide{
    background-color: #2c3e50;
    background-size: cover;
    margin-left: 600px;
  }
</style>