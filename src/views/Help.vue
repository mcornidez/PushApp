<template>
  <div class="help">
    <div id="title">
      <b>Help</b>
    </div>
    <div class="body justify-center">
      <v-expansion-panels>
        <v-expansion-panel
            v-for="question in questions"
            :key="question.id" class="panel">
          <v-expansion-panel-header class="header">
            {{ question.q }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="content">
            {{question.a}}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div id="title2"><b>Contactenos</b></div>
    <div class="contacto">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field class="black--text" v-model="nombre" label="Nombre" required outlined></v-text-field>
        <v-text-field class="black--text" v-model="email" :rules="emailRules" label="E-mail" outlined> </v-text-field>
        <v-textarea
            class="black--text"
            v-model="title"
            label="Message"
            outlined
            maxlength="400"
            full-width
            single-line
            filled
            shaped
        ></v-textarea>
      </v-form>
    </div>
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
    enviarFormulario(){
      /*Falta ver que hace el formulario*/
    }
  }
};
</script>

<style scoped>
.help{
  font-family: "Raleway", sans-serif;
  color: black;
  background-image: url("../assets/FondoHelp.jpg");
  background-size: cover;
  height:100%;
  vertical-align: middle;

}
#title, #title2{
  font-family: "Raleway", sans-serif;
  font-size: xxx-large;
  padding-bottom: 0;
  margin-top: auto;
  margin-bottom: 30px;
  vertical-align: middle;
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
}
.body{
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
  margin-bottom: 0;
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
}
.boton{
  margin-top: 15px;
}

</style>