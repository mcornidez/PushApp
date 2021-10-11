<template>
  <div id="background">
    <div id="mainBody">
      <div class="form">
        <br/>
        <h1>Registro</h1>
        <br/>
        <label for="name">Ingrese su nombre: </label>
        <input v-model="name" type="text" id="name" class="input"/>
        <label for="surname">Ingrese su apellido: </label>
        <input v-model="surname" type="text" id="surname" class="input"/>
        <label for="mail">Ingrese su mail: </label>
        <input v-model="mail" type="text" id="mail" class="input"/>
        <label for="user">Ingrese un usuario: </label>
        <input v-model="user" type="text" id="user" class="input"/>
        <label for="password">Ingrese una contraseña: </label>
        <input v-model="password" type="password" id="password" class="input"/>
        <button @click="register" class="btn">Registrarse</button>
        <br/>
        <label>¿Necesita ayuda? </label>
        <router-link :to="{name: 'Help'}">Haga click aquí</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "Register",
  data(){
    return {
      name: null,
      surname: null,
      mail: null,
      username: null,
      password: null,
    }
  },
  methods: {
    register(){
      //authenticate
      store.name = this.name;
      store.surname = this.surname;
      store.mail = this.mail;
      store.user = this.user;
      store.password = this.password;
      this.$router.push({name: 'Home'});
    }
  }
}
</script>

<style scoped>
.form{
  justify-content: center;
  margin-left:auto;
  margin-right: auto;
  display :flex;
  width: 40%;
  flex-direction: column;
}

#background{
  background-image: url("../assets/fondoHome.jpg");
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

#mainBody{
  background:rgba(255,255,255,0.8);
  height:100%;
}
</style>