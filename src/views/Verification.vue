<template>
  <div class="mainBody">
    <h1 id="MainTitle">Verifique su email</h1>
    <div class="form">
      <div class="titulo">Ingrese su email:</div>
      <input type="text" class="inputField" id="email"/>
      <div class="titulo">Ingrese su código de verificación:</div>
      <input type="text" class="inputField" id="code"/>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="blue"
                dark
                v-bind="attrs"
                v-on="on"
                @click="verify"
            >
              Enviar
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Solicitud exitosa
            </v-card-title>

            <v-card-text class="font-weight-bold">
              <div>
                ¡Su email ha sido confirmado! Será redirigido al sitio de inicio de sesión.
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                  :to="{name: 'Login'}"
              >
                Volver
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {Validation} from "../../api/user";

export default {
  name: "Verification",
  components: {},
  data(){
    return{
      result:null
    }
  },
  methods:{
    ...mapActions('security', {
      $verifyEmail: 'verifyEmail'
    }),
    setResult(result){
      this.result = JSON.stringify(result, null, 2)
      alert(this.result);
    },
    async verify(){
      try{
        var a = document.getElementById("email").value
        var b = document.getElementById("code").value
        const verify = new Validation(a,b);
        await this.$verifyEmail(verify);
      }
      catch(e){
        this.setResult(e);
      }
    }
  }
}
</script>

<style scoped>
#MainTitle{
  background-color: lightblue;
  border-radius: 15px;
  border: 1px solid black;
  width: 80vw;
  margin: auto;
  margin-bottom: 40px;
}
h1{
  color: black;
  font-family: "Raleway", sans-serif;
  padding-top: 15px;
  padding-bottom: 15px;
}
.mainBody{
  background-image: url("../assets/ProfileFondo.jpg");
  background-size: cover;
  height: 100vh;
}
.form{
  background-color: lightblue;
  width: 60vw;
  font-size: xx-large;
  font-family: "Raleway", sans-serif;
  margin:auto;
  justify-content: center;
  border-radius: 20px;
}
.titulo{
  padding-top: 20px;
  font-family: "Raleway", sans-serif;
  font-size: x-large;
  font-weight: bolder;
  max-width: 800px;
  margin:auto;
}
.inputField{
  border: 1px solid black;
  border-radius: 5px;
  padding-top: 20px;
  font-size: x-large;
  width: 80%;
  font-weight: bolder;
}
</style>