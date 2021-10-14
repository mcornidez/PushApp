<template>
  <div id="background">
    <div id="mainBody">
      <div class="form">
        <br/>
        <h1>Registro</h1>
        <br/>
        <label for="mail">Ingrese su mail:
          <span style="color:red; font-size: x-large">*</span>
        </label>
        <input v-model="mail" type="text" id="mail" class="input"/>
        <label for="username">Ingrese un usuario:
          <span style="color:red; font-size: x-large">*</span>
        </label>
        <input v-model="username" type="text" id="username" class="input"/>
        <label for="password">Ingrese una contraseña:
          <span style="color:red; font-size: x-large">*</span>
        </label>
        <input v-model="password" type="password" id="password" class="input"/>
        <label for="name">Ingrese su nombre:</label>
        <input v-model="name" type="text" id="name" class="input"/>
        <label for="surname">Ingrese su apellido: </label>
        <input v-model="surname" type="text" id="surname" class="input"/>
        <span for="gender">Género:</span>
        <v-select v-model="gender" :items="genders" id="gender" class="input" placeholder="Género"/>
        <button @click="register" class="btn">Registrarse</button>
        <br/>
        <label>¿Necesita ayuda? </label>
        <router-link :to="{name: 'Help'}">Haga click aquí</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {Credentials2} from "../../api/user";
import {mapActions} from "vuex";
export default {
  name: "Register",
  data(){
    return {
      name: null,
      surname: null,
      mail: null,
      username: null,
      password: null,
      dialog: false,
      genders: ["male", "female", "other"],
      gender: null
    }
  },
  methods: {
    ...mapActions('security', {
      $addUser: 'addUser'
    }),
    setResult(result){
      this.result = JSON.stringify(result, null, 2)
      alert(this.result);
      location.reload()
    },
    async register(){
      try {
        let nombre = document.getElementById("name").value;
        let apellido = document.getElementById("surname").value;
        let mail = document.getElementById("mail").value;
        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
        const credentials = new Credentials2(user, pass, mail, nombre, apellido, this.gender);
        await this.$addUser(credentials);
        const redirectPath = this.$route.query.redirect || "/";
        await this.$router.push(redirectPath);
      }
      catch(e){
        this.setResult(e)
      }
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
  background:rgba(255,255,255,0.9);
  height:100%;
}
</style>