<template>
  <div id="page">
    <v-container class="background2" fluid>
      <v-row class="text-center">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            ¡Bienvenido {{username}}!
          </h1>
        </v-col>
      </v-row>
      <v-container class="background" fluid>
        <v-row>
          <v-col>
            <v-card class="card mb-6">
              Card 1
            </v-card>
          </v-col>
          <v-col>
            <v-card class="card mb-6">
              Card 2
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
  import store from "@/store";

  export default {
    name: 'app',

    data(){
      return{
        username: store.name
      }
    },

  }
</script>

<style scoped>
#page{
  background-color:aqua;
  height: 100vh;
  width: 100vw;
  background-position:center;
  background-size:cover;
}
  .card{
    background-color: lightslategrey;
    width: 80%;
    height:100%;
    position:relative;
  }
</style>
