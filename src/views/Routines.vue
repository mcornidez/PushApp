<template>
  <div id="background">
    <div class="body">
      <div id="title">
        <b>Mis Rutinas</b>
      </div>
      <div class="buttons">
        <v-btn class="btn" :to="{name: 'CreateRoutine'}">
          <span class="mr-2 text--black">Añadir Nueva Rutina</span>
        </v-btn>
        <v-btn class="btn" :to="{name: 'Exercises'}">
          <span class="mr-2 text--black">Mis ejercicios</span>
        </v-btn>
      </div>
      <div class="routines">
        <div class="grid-container">
          <div v-for="routine in routines" :key="routine.id" class="rutina">
              <div class="grid-item">
                <h2 style="text-decoration: underline">{{routine.name}}</h2>
                <p>{{routine.detail}}</p>
                <h3>Dificultad: {{routine.difficulty}}</h3>
                <br>
                <div class="editSpan">
                  <router-link :to="{name: 'ModifyRoutine'}" style="text-decoration: none">
                    <v-btn class="btn" @click="setCurrent(routine)">Editar</v-btn>
                    <v-icon color="darkgrey"> mdi-square-edit-outline</v-icon>
                  </router-link>
                </div>
                <div class="eraseSpan mt-4">
                  <router-link :to="{name: 'Routines'}" style="text-decoration: none">
                    <v-btn class="btn" @click="eraseCurrent(routine)">Borrar</v-btn>
                    <v-icon color="darkgrey" >mdi-trash-can-outline</v-icon>
                  </router-link>
                </div>
                <br>
                <div>
                  <v-btn @click="setCurrent(routine)" :to="{name: 'RoutineDetails'}" class="btn">Ir a rutina</v-btn>
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
  name: 'Rutinas',
  data() {
    return {
      routines: [],
      id: null,
    }
  },
  async created(){
    await this.getAll();
  },
  computed: {
    ...mapState('security', {
      $user: state => state.user,
    }),
  },
  methods: {
    ...mapActions('routines', {
      $retrieveUserRoutines: 'retrieveUserRoutines',
      $setActiveRoutine: 'setActiveRoutine',
      $delete: 'delete'
    }),
    ...mapState('routines', {
      $currentRoutine: state => state.currentRoutine,
    }),
    async getAll(){
      let res = await this.$retrieveUserRoutines(this.$user.id);
      this.routines = res.content;
    },
    async setCurrent(routine){
      await this.$setActiveRoutine(routine);
    },
    async eraseCurrent(routine){
      await this.$delete(routine);
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

.body {
  padding-top: 20px;
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