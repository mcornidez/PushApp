<template>
  <div id="background">
    <div class="body">
      <div id="title">
        <b>Modificar Rutina</b>
      </div>
      <div class="ex-box">
        <b>{{ $currentRoutine.name }}</b>
      </div>
      <div class="routines">
        <div class="grid-container">
          <div v-for="type in cycleTypes" v-bind:key="type" class="rutina">
            <div class="grid-item">
              <h2 style="text-decoration: underline">{{type.toUpperCase()}}</h2>
              <div class="form">
                <input type="text" id="cycleDescription" class="input" placeholder="Breve descripción"/>
                <input v-model="cycleReps" type="number" min=0 id="repetitions" class="input" placeholder="Repeticiones"/>
              </div>
              <v-btn class="btn" @click="createRoutineCycle(type)">
                <span class="mr-2">Crear circuito</span>
              </v-btn>
              <div v-for="exercise in exerciseCycles" v-bind:key="exercise" class="ex">
                <p>{{exercise.name}}, {{duration}} secs, {{repetitions}} reps</p>
              </div>
              <div class="form">
                <v-select @click=getAllExercisesNames :items="exercisesNames" v-model="exerciseSelected" class="input" placeholder="Ejercicio"/>
                <input id="wsecs" type="number" min=0 class="input" placeholder="Segundos"/>
                <input id="wreps" type="number" min=0 class="input" placeholder="Repeticiones"/>
              </div>
              <v-btn class="btn" @click=addExerciseToCycle(type)>
                <span class="mr-2">Añadir Ejercicio</span>
              </v-btn>
            </div>
          </div>
        </div>
      <v-btn class="btn" :to="{name: 'Exercises'}">
        <span class="mr-2">Mis Ejercicios</span>
      </v-btn>
      <v-btn class="btn" :to="{name: 'Routines'}">
        <span class="mr-2">Guardar</span>
      </v-btn>
    </div>
  </div>
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
      exercisesNames: [],
      cycleTypes: ["warmup", "exercise", "cooldown"],
      exerciseSelected: null,
      cycleReps: 0,
      cycleOrder: 0,
      exerciseCycles: [],
      exerciseOrder: 0,
      cycleType: null,
      cycleId: 0,
    }
  },
  computed: {
    ...mapState('routines', {
      $currentRoutine: state => state.currentRoutine,
    }),
    ...mapState('exercise', {
      $exercises: state => state.items,
    }),
    ...mapState('routinesCycle', {
      $currentRoutineCycle: state => state.currentRoutineCycle,
      $currentRoutineCycles: state => state.currentCycles,
    })
  },
  async created() {
    await this.getRoutineCycles();
  },
  methods: {
    ...mapActions('exercise', {
      $getAll: 'getAll',
    }),
    ...mapActions('routinesCycle', {
      $createRoutineCycle: 'createRoutineCycle',
      $getRoutineCycles: 'getAllCycles',
    }),
    ...mapActions('cyclesExercises', {
      $addCycleExercise: 'addCycleExercise',
      $getAllExercisesFromCycle: 'getAllExercisesFromCycle'
    }),
    setResult(result) {
      this.result = JSON.stringify(result, null, 2)
      alert(this.result);
    },

    clearResult() {
      this.result = null
    },
    async getRoutineCycles() {
      await this.$getRoutineCycles(this.$currentRoutine.id);
    },
    async getAllExercisesNames(){
      await this.$getAll();
      this.exercisesNames = this.$exercises.map(function(obj) {
        return obj["name"];
      });
    },
    async getAllCycles(){
      let exercises = await this.$getAllCycles();
      this.exerciseCycles = exercises.content;
    },
    async createRoutineCycle(type) {
      try{
        this.selectCycleOrder(type);
        this.exerciseOrder = 0;
        let descr = document.getElementById("cycleDescription").value;
        const routineCycle = new RoutinesCycle(type, descr, type, this.cycleOrder, parseInt(this.cycleReps), this.$currentRoutine.id);
        await this.$createRoutineCycle(routineCycle);
        await this.getRoutineCycles();
      } catch(e) {
        this.setResult(e);
      }
    },
    selectCycleOrder(type){
      switch (type) {
        case 'warmup':
          this.cycleOrder = 1;
          break;
        case 'exercise':
          this.cycleOrder = 2;
          break;
        case 'cooldown':
          this.cycleOrder = 3;
          break;
      }
    },
    async addExerciseToCycle(type) {
      try {
        this.selectCycleId(type);
        await this.getExerciseOrder();
        let seconds = document.getElementById("wsecs").value;
        let reps = document.getElementById("wreps").value;
        const exerciseId = this.$exercises.find(item => item.name === this.exerciseSelected).id;
        const cycleExercise = new CycleExercises(this.exerciseOrder, parseInt(seconds), parseInt(reps), this.cycleId, exerciseId);
        await this.$addCycleExercise(cycleExercise);
      } catch(e) {
        this.setResult(e);
      }
    },
    async getExerciseOrder() {
      const result = await this.$getAllExercisesFromCycle(this.cycleId);
      this.exerciseOrder = result.totalCount;
      this.exerciseOrder++;
    },
    selectCycleId(type) {
      switch (type) {
        case 'warmup':
          this.cycleId = this.$currentRoutineCycles[0].id;
          break;
        case 'exercise':
          this.cycleId = this.$currentRoutineCycles[1].id;
          break;
        case 'cooldown':
          this.cycleId = this.$currentRoutineCycles[2].id;
          break;
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
.grid-container {
  display: inline-grid;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  position: center;
  height: 60%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}
.grid-item {
  background-color: rgba(232,232,232,0.8);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
  width: auto;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  justify-content: center;
  overflow: hidden;
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
  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
  display :flex;
  width: 50%;
}
.input {
  color: black;
  opacity: 90%;
  font-weight: bold;
  margin-top: 0;
  width: 100%;
}

.body {
  padding-top: 20px;
}
</style>