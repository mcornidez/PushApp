<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Sus rutinas son:
        </h1>
      </v-col>
      <div class="routines">
        <div v-for="routine in routines" :key="routine.name">
          <!--
          <router-link :to="{name: 'RoutineDetails', params:{slug:routine.slug}}">
            <h2>{{routine.name}}</h2>
          </router-link>
          <figure>
            <router-link :to="routine.name">
              <img :src='routine.image'/>
            </router-link>
          </figure>
          -->
            <v-container class="container--fluid">
              <v-row>
                <v-col>
                  <v-card class="md6 card">
                    <v-icon>mdi-heart-multiple</v-icon>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
      </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>

import store from "@/store"

export default {
  name: 'Rutinas',
  data(){
    return {
      routines: store.routines
    }
  }
}
</script>

<style scoped>
.routines{
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

.card{
  background-color: lightslategrey;
  width: 100%;
  height:200px;
  position:center;
  border-color: black;
  border-width: thick;

}
</style>