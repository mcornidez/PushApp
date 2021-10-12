<template>
  <div id="background">
    <div id="title">
      <b>Añadir Ejercicio</b>
    </div>
    <div class="form">
      <input type="text" id="ename" class="input" placeholder="Nombre ejercicio"/>
      <input type="text" id="edescr" class="input" placeholder="Breve descripción"/>
      <v-select v-model="type" :items="types" id="etype" class="input" placeholder="Tipo de ejercicio"/>
    </div>
    <v-btn class="btn" @click="create">
      <span class="mr-2">Añadir Ejercicio</span>
    </v-btn>
  </div>
</template>

<script>
import {Exercise} from "../../api/exercise";
import {mapActions} from 'vuex'

export default {
  name: "AddExercise",
  data() {
    return {
      result: null,
      sport: null,
      controller: null,
      type: null,
      types: [
        "exercise",
        "rest",
      ],
    }
  },
  methods: {
    ...mapActions('exercise', {
      $create: 'create',
    }),
    setResult(result){
      this.result = JSON.stringify(result, null, 2)
      alert(this.result);
    },
    clearResult() {
      this.result = null
    },
    async create(){
      try {
        let name = document.getElementById("ename").value;
        let descr = document.getElementById("edescr").value;
        const exercise = new Exercise(name, descr, this.type);
        await this.$create(exercise);
        const redirectPath = this.$route.query.redirect || "/CreateRoutine";
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
#background{
  background-image: url("../assets/fondoRoutine.jpeg");
  background-size: cover;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  font-family: "Raleway", sans-serif;
  color: black;
}
#title{
  font-family: "Raleway", sans-serif;
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

.form{
  justify-content: center;
  margin-top: 5vh;
  margin-left: auto;
  margin-right: auto;
  display :flex;
  width: 50%;
}

.input {
  color: black;
  opacity: 90%;
  font-weight: bold;
}
</style>