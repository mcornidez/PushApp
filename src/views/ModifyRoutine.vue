<template>
  <div id="background">
    <div id="title">
      <b>Crear Rutina</b>
    </div>
    <v-btn class="btn" :to="{name: 'AddExercise'}">
      <span class="mr-2">Añadir Ejercicio</span>
    </v-btn>
    <v-btn class="btn" :to="{name: 'MyExercises'}">
      <span class="mr-2">Mis Ejercicios</span>
    </v-btn>
    <div class="form">
      <input v-model="rname" type="text" id="rname" class="input" placeholder="Nombre rutina"/>
      <input v-model="rdescr" type="text" id="rdescr" class="input" placeholder="Breve descripción"/>
      <v-select :items="booleans" id="rprivacy" class="input" placeholder="¿Es pública?"/>
      <v-select :items="difficulties" id="rdifficulty" class="input" placeholder="Dificultad"/>
    </div>
    <div class="ex-box">
      <b>Entrada en calor</b>
    </div>
    <div class="form">
      <v-select @click=getAll :items="exercises" id="wname" class="input" placeholder="Ejercicio"/>
      <input v-model="seconds" id="wsecs" type="number" min="0" class="input" placeholder="Segundos"/>
      <input v-model="reps" id="wreps" type="number" min="0" class="input" placeholder="Repeticiones"/>
    </div>
    <div class="ex-box">
      <b>Ejercitación</b>
    </div>
    <div class="form">
      <v-select @click=getAll :items="exercises" id="ename" class="input" placeholder="Ejercicio"/>
      <input v-model="esecs" id="esecs" type="number" min="0" class="input" placeholder="Segundos"/>
      <input v-model="ereps" id="ereps" type="number" min="0" class="input" placeholder="Repeticiones"/>
    </div>
    <div class="ex-box">
      <b>Enfriamiento</b>
    </div>
    <div class="form">
      <v-select @click=getAll :items="exercises" id="cname" class="input" placeholder="Ejercicio"/>
      <input v-model="csecs" id="csecs" type="number" min="0" class="input" placeholder="Segundos"/>
      <input v-model="creps" id="creps" type="number" min="0" class="input" placeholder="Repeticiones"/>
    </div>
    <v-btn class="btn" :to="{name: 'Routines'}">
      <span class="mr-2">Crear Rutina</span>
    </v-btn>
  </div>
</template>

<script>
import {mapActions} from 'vuex'


export default {
  name: "CreateRoutine",
  data() {
    return {
      exercises: [],
      booleans: [
        "Si",
        "No",
      ],
      difficulties: [
        "Rookie",
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert"
      ]
    }
  },
  methods: {
    ...mapActions('exercise', {
      $getAll: 'getAll',
    }),
    async getAll(){
      let aux = await this.$getAll();
      this.exercises = aux.content.map(function(obj) {
        return obj["name"];
      });
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
  margin: 15px;
  background-color: white;
}

.ex-box{
  font-family: "Raleway", sans-serif;
  font-size: x-large;
  padding-bottom: 0;
  border-radius: 15px;
  width: 40vw;
  margin: auto;
  background-color: white;
  border: 3px solid black;
}
.form{
  justify-content: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
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
</style>