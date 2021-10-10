<template>
    <v-container fluid class="main">
      <v-row class="row">
        <v-col cols="6" class="pa-0 ma-0">
        </v-col>
        <v-col cols="6" class="center">
          <div class="form">
            <br/>
            <h1>Iniciar Sesión</h1>
            <br/>
            <label for="username">Mail</label>
            <br>
            <input v-model="username" type="text" id="username" class="input"/>
            <br>
            <label for="password">Contraseña</label>
            <br>
            <input v-model="password" type="password" id="password" class="input"/>
            <br>
            <button @click="login()" class="btn">Ingresar</button>
            <br>
            <br/>
            <router-link :to="{name: 'ForgotMail'}">¿Olvidó su mail?</router-link>
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
</template>

<script>
//import {Credentials} from "/api/user";
import store from "@/store"
import {mapState, mapActions} from 'vuex'
export default {
  name: "Login",
  data(){
    return {
      username: null,
      password: null,
      result: null
    }
  },
  computed: {
    ...mapState('security', {
      $user: state => state.user,
    }),
  },
  methods: {
    ...mapActions('security', {
      $getCurrentUser: 'getCurrentUser',
      $login: 'login',
      $logout: 'logout',
    }),
    async login() {
      /*
      try {
        const credentials = new Credentials(this.username, this.password)
        await this.$login({credentials, rememberMe: true})
        this.clearResult()
      } catch (e) {
        this.setResult(e)
      }
      */
      store.user = this.username;
      this.$router.push({name: 'Home'});
    }
  },
  async logout() {
    await this.$logout()
    this.clearResult()
  },
  async getCurrentUser() {
    await this.$getCurrentUser()
    this.setResult(this.$user)
  },
  clearResult() {
    this.result = null
  },
  setResult(result){
    this.result = JSON.stringify(result, null, 2)
  },
}
</script>

<style scoped>

.main{
  position:center;
  flex-direction: column;
  justify-content: center;
  background-image: url("../assets/FondoLogin.png");
  background-size: cover;
  margin: 0;
  padding: 0;
  height:100vh;
}

.form{
  background-color: rgba(255,255,255, 0.7);
  height:100vh;
  margin:0;
  padding:0;
  justify-content: space-between;
}

input{
  width: 80%;
  position: center;
}

.row{
  height:100%;
}


</style>