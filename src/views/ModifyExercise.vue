<template>
  <div id="background">
    <div class="body">
      <div id="title">
        <b>Modificar Ejercicio</b>
      </div>
      <div class="form">
        <input type="text" id="exerciseName" class="input" placeholder="Nombre ejercicio"/>
        <input type="text" id="exerciseDescription" class="input" placeholder="Breve descripción"/>
        <v-select v-model="exType" :items="types" id="exType" class="input pt-8 mt-0" placeholder="Tipo de ejercicio"/>
      </div>
      <v-btn class="btn" @click="modify">
        <span class="mr-2">Modificar ejercicio</span>
      </v-btn>
      <br>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import {Exercise} from "../../api/exercise";

export default {
  name: "ModifyExercise",
  data(){
    return{
      types:["exercise", "rest"],
      exType: null,
    }
  },
  computed:{
    ...mapState('exercise', {
      $exercise: state => state.currentExercise,
    }),
  },
  methods: {
    ...mapActions('exercise', {
      $modifyExercise: 'modifyExercise',
    }),
    setResult(result) {
      this.result = JSON.stringify(result, null, 2)
      alert(this.result);
    },
    async modify(){
      try{
        let name = document.getElementById("exerciseName").value;
        let descr = document.getElementById("exerciseDescription").value;
        const ex = new Exercise(name, descr, this.exType, this.$exercise.id);
        await this.$modifyExercise(ex);
        const redirectPath = this.$route.query.redirect || "/Exercises";
        await this.$router.push(redirectPath);
      }
      catch(e){
        this.setResult(e);
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

.btn {
  margin: auto;
  margin-top: 10px;
  background-color: white;
  color: black;
  font-weight: bolder;
}

.form{
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 5px;
  margin-right: auto;
  margin-left: auto;
  display :flex;
  width: 50%;
}

.input {
  color: black;
  opacity: 90%;
  font-weight: bold;
}

.body {
  padding-top: 20px;
}
</style>