<template>
  <div id="background">
    <div id="title">
      <b>Modificar Rutina</b>
    </div>
    <v-btn class="btn" :to="{name: 'AddExercise'}">
      <span class="mr-2">Añadir Ejercicio</span>
    </v-btn>
    <v-btn class="btn" :to="{name: 'MyExercises'}">
      <span class="mr-2">Mis Ejercicios</span>
    </v-btn>
    <div class="ex-box">
      <b>{{ $currentRoutine.name }}</b>
    </div>
    <v-btn class="btn" @click="createRoutineCycle">
      <span class="mr-2">Crear circuito</span>
    </v-btn>
    <div class="form">
      <v-select @click=getAll :items="exercises" id="wname" class="input" placeholder="Ejercicio"/>
      <input v-model="seconds" id="wsecs" type="number" min="0" class="input" placeholder="Segundos"/>
      <input v-model="reps" id="wreps" type="number" min="0" class="input" placeholder="Repeticiones"/>
    </div>
    <v-btn class="btn" :to="{name: 'Routines'}">
      <span class="mr-2">Guardar</span>
    </v-btn>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import {RoutinesCycle} from '../../api/routinesCycle'


export default {
  name: "ModifyRoutine",
  data() {
    return {
      exercises: []
    }
  },
  computed: {
    ...mapState('routines', {
      $currentRoutine: state => state.currentRoutine,
    })
  },
  methods: {
    ...mapActions('exercise', {
      $getAll: 'getAll',
    }),
    ...mapActions('routinesCycle', {
      $createRoutineCycle: 'createRoutineCycle',
    }),
    setResult(result) {
      this.result = JSON.stringify(result, null, 2)
      alert(this.result);
    },
    clearResult() {
      this.result = null
    },
    async getAll(){
      let aux = await this.$getAll();
      this.exercises = aux.content.map(function(obj) {
        return obj["name"];
      });
    },
    async createRoutineCycle() {
      try{
        const routineCycle = new RoutinesCycle("Entrada en calor", "Para entrar en calor", "warmup", 1, 2, this.$currentRoutine.id);
        await this.$createRoutineCycle(routineCycle);
      } catch(e) {
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