<template>
  <section class="routine">
    <h1>Routine: {{routine.name}}</h1>
    <div class="routine-details">
      <img :src='routine.image' :alt="routine.name"/>
      <p>{{routine.description}}</p>
    </div>
  </section>
</template>

<script>
import routines from "@/store/routines"

export default {
  name: "RoutineDetails",
  data(){
    return{
      routineId: this.$route.params.id,
      routineSlug: this.$route.params.slug
    }
  },
  computed: {
    routine(){
      return routines.exploreRoutines.find(
          routine => routine.slug === this.routineSlug
      )
    }
  }
}
</script>

<style scoped>
.routine{
}
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}

.routine-details {
  display: flex;
  justify-content: space-between;
}

p {
  margin: 0 40px;
  font-size: 20px;
  text-align: justify;
}
</style>