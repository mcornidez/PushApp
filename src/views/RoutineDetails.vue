<template>
  <div id="background">
    <div class="body">
      <div id="title">
        <b>Mi Rutinas</b>
      </div>
      <div class="routines">
        <h1>Routine: Hola</h1>
        <div class="routine-details">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: "RoutineDetails",
  data(){
  },
  computed: {
    ...mapState('routines', {
      $currentRoutine: state => state.currentRoutine,
    })
  },
}
</script>

<style scoped>
.routines{
  display: flex;
  flex-direction: row;
  background-size: cover;
  justify-content: space-between;
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