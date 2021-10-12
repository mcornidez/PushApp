<<<<<<< HEAD
<template>
  <div class="mainBody">
    <h1 id="MainTitle">Verifique su email</h1>
    <div class="form">
      <div class="titulo">Ingrese su email:</div>
      <input type="text" class="inputField" id="email"/>
      <div class="titulo">Ingrese su código de verificación:</div>
      <input type="text" class="inputField" id="code"/>
      <br>
      <v-btn
          color="blue"
          dark
          v-bind="attrs"
          v-on="on"
          @click="verify">
        Enviar
      </v-btn>
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
        const redirectPath = this.$route.query.redirect || "/";
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
=======
<template>
  <div class="mainBody">
    <h1 id="MainTitle">Verifique su email</h1>
    <div class="form">
      <div class="titulo">Ingrese su email:</div>
      <input type="text" class="inputField" id="email"/>
      <div class="titulo">Ingrese su código de verificación:</div>
      <input type="text" class="inputField" id="code"/>
      <br>
      <v-btn
          color="blue"
          dark
          v-bind="attrs"
          v-on="on"
          @click="verify">
        Enviar
      </v-btn>
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
        const redirectPath = this.$route.query.redirect || "/";
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
>>>>>>> 8ea5e7ba6216349281f4172592f284474959691d
</style>