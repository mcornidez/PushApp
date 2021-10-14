<template>
<div id="background">
  <div class="body">
    <div id="title">
      <b>Mis Ejercicios</b>
    </div>
    <div class="buttons">
      <v-btn class="btn" :to="{name: 'AddExercise'}">
        <span class="mr-2 text--black">Añadir ejercicio</span>
      </v-btn>
    </div>
    <div class="routines">
      <div class="grid-container">
        <div v-for="exercise in exercises" :key="exercise.id" class="rutina">
          <div class="grid-item">
            <h2 style="text-decoration: underline">{{exercise.name}}</h2>
            <p>{{exercise.detail}}</p>
            <div class="editSpan">
              <router-link :to="{name: 'ModifyExercise'}" style="text-decoration: none">
                <v-btn class="btn" @click="setCurrent(exercise)">Editar</v-btn>
                <v-icon color="darkgrey"> mdi-square-edit-outline</v-icon>
              </router-link>
            </div>
            <div class="eraseSpan mt-4">
              <router-link :to="{name: 'Exercises'}" style="text-decoration: none">
                <v-btn class="btn" @click="eraseCurrent(exercise)">Borrar</v-btn>
                <v-icon color="darkgrey" >mdi-trash-can-outline</v-icon>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
  name: 'Exercises',
  data() {
    return {
      id: null,
      exercises: []
    }
  },
  async created(){
    await this.getAll();
  },
  computed: {
    ...mapState('security', {
      $user: state => state.user,
    }),
    ...mapState('exercise', {
      $currentExercise: state => state.currentExercise,
      $exercises: state => state.items
    }),
  },
  methods: {
    ...mapActions('exercise', {
      $getAll: 'getAll',
      $setActiveExercise: 'setActiveExercise',
      $delete: 'delete'
    }),
    async getAll(){
      let res = await this.$getAll();
      this.exercises = res.content;
    },
    async setCurrent(ex){
      await this.$setActiveExercise(ex);
    },
    async eraseCurrent(ex){
      await this.$delete(ex);
      await this.getAll();
    }
  }
}
</script>

<style scoped>
.routines{
  display: flex;
  flex-direction: row;
  background-size: cover;
  justify-content: space-between;
}
.rutina{
  align-items: center;
  margin: 30px;
}

#background{
  background-image: url("../assets/FondoRutinas.jpeg");
  background-size: cover;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  font-family: "Raleway", sans-serif;
  color: black;
}
#title{
  font-family: "Raleway", sans-serif;
  color: black;
  font-weight: bolder;
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
  grid-template-columns: repeat(5, minmax(0, 1fr));
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
  margin-right: 15px;
  margin-left: 15px;
  background-color: grey;
  font-weight: bolder;
}

.buttons{
  margin:auto;
  margin-top: 15px;
  width: 80%;
  justify-content: center;
  align-content: center;
  position: center;
}
</style>