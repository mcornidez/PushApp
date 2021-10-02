<template>
  <div id="home">
    <div id="welcome">
      ¡Bienvenido, {{username}}!
    </div>
    <div id="mainBody">
      <v-container fluid class="cards">
        <v-row>
          <v-col cols="6">
            <v-card>
              <v-icon>mdi-heart-multiple</v-icon>
              <div>Explorar</div>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-icon>mdi-magnify</v-icon>
              <div> Buscar</div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-card>
              <v-icon>mdi-magnify</v-icon>
              <div>Eexplorar</div>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-icon>mdi-help-circle-outline</v-icon>
              <div>Buscar</div>
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

#home{
  background-image: url("../assets/fondoHome.jpg");
  height: 85vh;
  background-size: cover;
}
#welcome{
  background: rgba(255,255,255,0.6);
  font-size: xxx-large;
  color: black;
  height: 10%;
  align-content: center;
  text-align: center;
}

#mainBody{
  background: rgba(255,255,255,0.6);
  background-size: cover;
  height: 55vh;
}
.card {
  background-color: lightslategrey;
  width: 50%;
  height: 200px;
  position: center;
  justify-content: center;
  flex-direction: column;
  text-align:center;
  border-color: black;
  border-width: thick;
  align-items: center;
}

.cards{
  margin: 0;
  padding: 0;
  height:100%;
  position:center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>