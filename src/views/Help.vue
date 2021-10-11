<template>
  <div class="help">
    <div class="body justify-center">
      <div id="title">
        <b>Ayuda</b>
      </div>
      <v-expansion-panels inset>
        <v-expansion-panel
            v-for="question in questions"
            :key="question.id" class="panel">
          <v-expansion-panel-header class="header" expand-icon="mdi-arrow-down-drop-circle-outline">
            <b>{{ question.q }}</b>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content">
            {{question.a}}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div id="title2"><b>Contáctenos</b></div>
    <div class="contacto">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field class="black--text font-weight-bold" v-model="nombre" label="Nombre" required outlined></v-text-field>
        <v-text-field class="black--text font-weight-bold" v-model="email" :rules="emailRules" label="E-mail" outlined> </v-text-field>
        <v-textarea
            class="black--text font-weight-bold"
            v-model="title"
            label="Mensaje"
            outlined
            maxlength="400"
            full-width
            single-line
            filled
        ></v-textarea>
      </v-form>
      <v-btn
          class="boton"
          rounded
          color="blue"
          dark
          @click="enviarFormulario"
      >
        Enviar
      </v-btn>
    </div>

  </div>
</template>

<script>
import store from "@/store/faq";

export default {
  name: "Help.vue",
  data(){
    return{
      questions: store.questions,
    };
  },
  methods:{
    async enviarFormulario(){
      alert("¡Su solicitud fue procesada! Nos contactaremos a la brevedad.");
      const redirectPath = this.$route.query.redirect || "/Home";
      await this.$router.push(redirectPath);
    }
  }
};
</script>

<style scoped>
.help{
  font-family: "Raleway", sans-serif;
  color: black;
  background-image: url("../assets/FondoHelp.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: repeat-y;
  height:100%;
  vertical-align: middle;

}
#title, #title2{
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
#title2{
  margin-top: 30px;
}
.panel{
  display:block;
  margin-left: auto;
  margin-right:auto;
}
.header{
  justify-content: center;
  font-size: x-large;
}
.content{
  font-size: large;
  font-weight: bolder;
}
.body{
  padding-top: 20px;
  width: 80vw;
  justify-content: center;
  margin:auto;
}
.contacto{
  width: 80%;
  justify-content: center;
  margin-left: auto;
  margin-right:auto;
  background-color: white;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;
}
.boton{
}

</style>