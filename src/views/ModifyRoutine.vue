<template>
  <div id="background">
    <div class="body">
      <div id="title">
        <b>Modificar Rutina</b>
      </div>
      <div class="ex-box">
        <b>{{ $currentRoutine.name }}</b>
      </div>
      <div class="form">
        <input type="text" id="cycleName" class="input" placeholder="Nombre ciclo"/>
        <input type="text" id="cycleDescription" class="input" placeholder="Breve descripción"/>
        <input type="text" id="repetitions" class="input" placeholder="Repeticiones"/>
        <v-select v-model="cycleType" :items="cycleTypes" id="cycleType" class="input" placeholder="Tipo de circuito"/>
      </div>
      <v-btn class="btn" @click="createRoutineCycle">
        <span class="mr-2">Crear circuito</span>
      </v-btn>
      <div class="form">
        <v-select @click=getAll :items="exercisesNames" v-model="exerciseSelected" id="exerciseName" class="input" placeholder="Ejercicio"/>
        <input v-model="seconds" id="wsecs" type="text" min="0" class="input" placeholder="Segundos"/>
        <input v-model="reps" id="wreps" type="text" min="0" class="input" placeholder="Repeticiones"/>
      </div>
      <v-btn class="btn" @click=addExerciseToCycle>
        <span class="mr-2">Añadir Ejercicio</span>
      </v-btn>
      <v-btn class="btn" :to="{name: 'MyExercises'}">
        <span class="mr-2">Mis Ejercicios</span>
      </v-btn>
      <v-btn class="btn" :to="{name: 'Routines'}">
        <span class="mr-2">Guardar</span>
      </v-btn>
    </div>
    <div class="ex-box">
      <b>{{ $currentRoutine.name }}</b>
    </div>
    <div class="form">
      <input type="text" id="cycleName" class="input" placeholder="Nombre ciclo"/>
      <input type="text" id="cycleDescription" class="input" placeholder="Breve descripción"/>
      <input type="text" id="repetitions" class="input" placeholder="Repeticiones"/>
      <v-select v-model="cycleType" :items="cycleTypes" id="cycleType" class="input" placeholder="Tipo de circuito"/>
    </div>
    <v-btn class="btn" @click="createRoutineCycle">
      <span class="mr-2">Crear circuito</span>
    </v-btn>
    <div class="form">
      <v-select @click=getAll :items="exercisesNames" v-model="exerciseSelected" id="exerciseName" class="input" placeholder="Ejercicio"/>
      <input v-model="seconds" id="wsecs" type="text" min="0" class="input" placeholder="Segundos"/>
      <input v-model="reps" id="wreps" type="text" min="0" class="input" placeholder="Repeticiones"/>
    </div>
    <v-btn class="btn" @click=addExerciseToCycle>
      <span class="mr-2">Añadir Ejercicio</span>
    </v-btn>
    <v-btn class="btn" :to="{name: 'MyExercises'}">
      <span class="mr-2">Mis Ejercicios</span>
    </v-btn>
    <v-btn class="btn" :to="{name: 'Routines'}">
      <span class="mr-2">Guardar</span>
    </v-btn>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import {RoutinesCycle} from '../../api/routinesCycle'
import {CycleExercises} from "../../api/cyclesExercises";

export default {
  name: "ModifyRoutine",
  data() {
    return {
      exercises: [],
      exercisesNames: [],
      exerciseSelected: null,
      seconds: null,
      reps: null,
      cycleOrder: 0,
      exerciseOrder: 0,
      cycleType: null,
      cycleTypes: [
        "warmup",
        "exercise",
        "cooldown"
      ],
    }
  },
  computed: {
    ...mapState('routines', {
      $currentRoutine: state => state.currentRoutine,
    }),
    ...mapState('routinesCycle', {
      $currentRoutineCycle: state => state.currentRoutineCycle,
    })
  },
  methods: {
    ...mapActions('exercise', {
      $getAll: 'getAll',
    }),
    ...mapActions('routinesCycle', {
      $createRoutineCycle: 'createRoutineCycle',
    }),
    ...mapActions('cyclesExercises', {
      $addCycleExercise: 'addCycleExercise',
    }),
    setResult(result) {
      this.result = JSON.stringify(result, null, 2)
      alert(this.result);
    },
    clearResult() {
      this.result = null
    },
    async getAll(){
      this.exercises = await this.$getAll();
      this.getExercisesNames(this.exercises);
    },
    getExercisesNames(exercises) {
      this.exercisesNames = exercises.content.map(function(obj) {
        return obj["name"];
      });
    },
    async createRoutineCycle() {
      try{
        this.cycleOrder++;
        this.exerciseOrder = 0;
        let name = document.getElementById("cycleName").value;
        let descr = document.getElementById("cycleDescription").value;
        let reps = document.getElementById("repetitions").value
        const routineCycle = new RoutinesCycle(name, descr, this.cycleType, this.cycleOrder, parseInt(reps), this.$currentRoutine.id);
        await this.$createRoutineCycle(routineCycle);
      } catch(e) {
        this.setResult(e);
      }
    },
    async addExerciseToCycle() {
      try {
        this.exerciseOrder++;
        const exerciseId = this.exercises.content.find(item => item.name === this.exerciseSelected).id;
        const cycleExercise = new CycleExercises(this.exerciseOrder, parseInt(this.seconds), parseInt(this.reps), this.$currentRoutineCycle.id, exerciseId);
        await this.$addCycleExercise(cycleExercise);
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

.body {
  padding-top: 20px;
}
</style>