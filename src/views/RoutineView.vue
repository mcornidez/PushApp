<template>
  <div id="background">
    <div class="body">
      <div id="title">
        <b>{{ $currentRoutine.name }}</b>
      </div>
      <div class="routines">
        <div class="grid-container">
          <div class="grid-item">
            <h2 style="text-decoration: underline">WARMUP</h2>
            <div v-for="content in routineCycles[0].exercises" v-bind:key="content.exercise.id" class="rutina">
              <p>{{content.exercise.name}}</p>
              <p>Duración: {{content.duration}}</p>
              <p>Repeticiones: {{content.repetitions}}</p>
            </div>
          </div>
          <div class="grid-item">
            <h2 style="text-decoration: underline">EXERCISE</h2>
            <div v-for="content in routineCycles[1].exercises" v-bind:key="content.exercise.id" class="rutina">
              <p>{{content.exercise.name}}</p>
              <p>Duración: {{content.duration}}</p>
              <p>Repeticiones: {{content.repetitions}}</p>
            </div>
          </div>
          <div class="grid-item">
            <h2 style="text-decoration: underline">COOLDOWN</h2>
            <div v-for="content in routineCycles[2].exercises" v-bind:key="content.exercise.id" class="rutina">
              <p>{{content.exercise.name}}</p>
              <p>Duración: {{content.duration}}</p>
              <p>Repeticiones: {{content.repetitions}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-btn class="btn" :to="{name: 'Exercises'}">
      <span class="mr-2">Mis Ejercicios</span>
    </v-btn>
    <v-btn class="btn" :to="{name: 'Routines'}">
      <span class="mr-2">Guardar</span>
    </v-btn>
    <GoBack/>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {RoutinesCycle, FullRoutineCycle} from "../../api/routinesCycle";
import {CycleExercises} from "../../api/cyclesExercises";
import GoBack from "../components/GoBack";

export default {
  name: "ModifyRoutine",
  components: {GoBack},
  data() {
    return {
      cycleTypes: ["warmup", "exercise", "cooldown"],
      warmupCycleContent: null,
      exerciseCycleContent: null,
      cooldownCycleContent: null,
      routineCycles: [],
    }
  },

  computed: {
    ...mapState('routines', {
      $currentRoutine: state => state.currentRoutine,
    }),
    ...mapState('routinesCycle', {
      $currentRoutineCycles: state => state.currentCycles,
    }),
    ...mapState('cyclesExercises', {
      $exercisesFromCycle: state => state.exercisesFromCycle,
    }),
  },
  async created() {
    await this.$getAllCycles(this.$currentRoutine.id);
    let i;
    for(i = 0; i < 3; i++) {
      await this.$getExercisesFromCycle(this.$currentRoutineCycles[i].id);
      this.routineCycles.push(new FullRoutineCycle(this.$currentRoutineCycles[i].name,
                                                  this.$currentRoutineCycles[i].repetitions,
                                                    this.$currentRoutineCycles[i].id,  this.$exercisesFromCycle));
    }
  },
  methods: {
    ...mapActions('routinesCycle', {
      $createRoutineCycle: 'createRoutineCycle',
      $getAllCycles: 'getAllCyclesFromRoutine'
    }),
    ...mapActions('cyclesExercises', {
      $addCycleExercise: 'addCycleExercise',
      $getExercisesFromCycle: 'getAllExercisesFromCycle'
    }),
    setResult(result) {
      this.result = JSON.stringify(result, null, 2)
      alert(this.result);
    },
    clearResult() {
      this.result = null
    },
    async getAllCycles(){
      let exercises = await this.$getAllCycles();
      this.exerciseCycles = exercises.content;
    },
    async createRoutineCycle(type) {
      try{
        this.cycleOrder++;
        this.exerciseOrder = 0;
        let descr = document.getElementById("cycleDescription").value;
        const routineCycle = new RoutinesCycle(type, descr, type, this.cycleOrder, this.cycleReps, this.$currentRoutine.id);
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
        await this.getAllCycles();
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
  width: auto;
}

.body {
  padding-top: 20px;
}
</style>