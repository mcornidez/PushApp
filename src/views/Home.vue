<template>
  <!--<div id="page">
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
  </div>-->
  <div id="home">
    <div id="welcome">
      <span id="welcomeText">¡Bienvenido, {{ username }}!</span>
    </div>
    <div id="mainBody">
      <v-container class="container--fluid">
        <v-row>
          <v-col>
            <v-card class="md6 card">
              <v-icon>mdi-heart-multiple</v-icon>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="md6 card">
              <v-icon>mdi-magnify</v-icon>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card class="md6 card">
              <v-icon>mdi-magnify</v-icon>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="md6 card">
              <v-icon>mdi-help-circle-outline</v-icon>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
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
#home{
  background-image: url("../assets/fondoHome.jpg");
  height: 100vh;
  background-size: cover;
}
#welcome{
  background: rgba(255,255,255,0.5);
  font-size: xxx-large;
  color: black;
  height: 20%;
}
#welcomeText{
  color:black;
  size: auto;
}
#mainBody{
  background:rgba(255,255,255,0.8);
  height:100%;
}
.card {
  background-color: lightslategrey;
  width: 100%;
  height: 200px;
  position: center;
  border-color: black;
  border-width: thick;
}
</style>
