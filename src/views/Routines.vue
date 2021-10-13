<template>
  <div id="background">
    <div id="title">
      <b>Mis Rutinas</b>
    </div>
    <div class="routines">
      <div v-for="routine in routines" :key="routine.id" class="rutina">
        <router-link :to="{name: 'RoutineDetails', params:{slug:routine.id}}">
          <h2>{{routine.name}}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
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
    }),
    async getAll(){
      let aux = await this.$getAll();
      this.routines = aux.content;
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
.card{
  background-color: lightslategrey;
  width: 100%;
  height:200px;
  position:center;
  border-color: black;
  border-width: thick;
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
  vertical-align: middle;
  border-radius: 15px;
  width: 40vw;
  background-color: lightblue;
  position: center;
  border: 3px solid black;
}
</style>
