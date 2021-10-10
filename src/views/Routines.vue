<template>
  <div class="body">
    <div class="banner">Sus rutinas</div>
    <div class="routines">
      <div v-for="routine in exploreRoutines" :key="routine.name" class="rutina">
        <router-link :to="{name: 'RoutineDetails', params:{slug:routine.slug}}">
          <h2>{{routine.name}}</h2>
        </router-link>
        <figure>
          <router-link :to="routine.name">
            <img :src='routine.image'/>
          </router-link>
        </figure>

      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store"
export default {
  name: 'Rutinas',
  data(){
    return {
      exploreRoutines: store.exploreRoutines
    }
  }
}
</script>

<style scoped>
.banner{
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-size: 100px;
}
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
img{
  max-width: 200px;
}
.body{
  background-color: aquamarine;
  height: 100%;
}
</style>