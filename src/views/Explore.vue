<template>
  <div id="background">
    <div class="body">
      <div id="title">
        <b>Explorar Rutinas</b>
      </div>
      <div class="routines">
        <div class="grid-container">
          <div v-for="routine in routines" :key="routine.id" class="rutina">
            <router-link :to="{name: 'RoutineDetails', params:{slug:routine.id}}" style="text-decoration: none; color: inherit;">
              <div class="grid-item">
                <h2 style="text-decoration: underline">{{routine.name}}</h2>
                <p>{{routine.detail}}</p>
                <h3>Dificultad: {{routine.difficulty}}</h3>
                <br>
                <div>
                  <v-btn @click="setCurrent(routine)" :to="{name: 'RoutineView'}" class="btn">Ir a rutina</v-btn>
                </div>
              </div>
            </router-link>
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
    }
  },
  async created(){
    await this.getAll();
  },
  methods: {
    ...mapActions('routines', {
      $getAll: 'getAll',
      $setActiveRoutine: 'setActiveRoutine'
    }),
    ...mapState('routines', {
      $currentRoutine: state => state.currentRoutine,
    }),
    async getAll(){
      let aux = await this.$getAll();
      this.routines = aux.content;
    },
    async setCurrent(routine){
      await this.$setActiveRoutine(routine);
      const redirectPath = this.$route.query.redirect || "/routineview";
      await this.$router.push(redirectPath);
    },
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
.btn{
  color: black;
  font-weight: bolder;
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
  font-size: xxx-large;
  padding-bottom: 0;
  margin: auto;
  margin-bottom: 30px;
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
.body {
  padding-top: 20px;
}

</style>
