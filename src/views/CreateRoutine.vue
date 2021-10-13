<template>
  <div id="background">
    <div id="title">
      <b>Crear Rutina</b>
    </div>
    <div class="form">
      <input type="text" id="routineName" class="input" placeholder="Nombre rutina"/>
      <input type="text" id="routineDescription" class="input" placeholder="Breve descripción"/>
      <v-select v-model="isPublic" :items="booleans" id="routinePrivacy" class="input" placeholder="¿Es pública?"/>
      <v-select v-model="difficulty" :items="difficulties" id="routineDifficulty" class="input" placeholder="Dificultad"/>
    </div>
    <v-btn class="btn" @click="create">
      <span class="mr-2">Crear Rutina</span>
    </v-btn>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {Routine} from "../../api/routines";
export default {
  name: "CreateRoutine",
  data() {
    return {
      result: null,
      isPublic: null,
      difficulty: null,
      exercises: [],
      booleans: [
        true,
        false,
      ],
      difficulties: [
        "Rookie",
        "Beginner",
        "Intermediate",
        "Advanced",
        "Expert"
      ],
    }
  },
  methods: {
    ...mapActions('routines', {
      $createRoutine: 'createRoutine',
    }),
    setResult(result) {
      this.result = JSON.stringify(result, null, 2)
      alert(this.result);
    },
    clearResult() {
      this.result = null
    },
    async create() {
      try {
        let name = document.getElementById("routineName").value;
        let descr = document.getElementById("routineDescription").value;
        const routine = new Routine(name, descr, this.isPublic, this.difficulty.toLowerCase());
        await this.$createRoutine(routine);
        const redirectPath = this.$route.query.redirect || "/ModifyRoutine";
        await this.$router.push(redirectPath);
      } catch (e) {
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