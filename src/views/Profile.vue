<template>
  <div class="profile">
    <!-- Template extraido de https://stackoverflow.com/questions/63729323/vuetify-custom-component-for-user-profile -->
    <v-card class="mx-auto" width="80%" tile>
      <v-img height="20vh" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
      <v-list-item color="rgba(0, 0, 0, .4)">
        <v-list-item-content>
          <v-list-item-title class="title text--black">{{ $user.username }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <div class="grid-container">
      <div class="form-item">
        <div>
          <div class="item">
            <div class="align-center mt-6" v-if="!changeName">Nombre: {{ $user.firstName }}</div>
            <div class="width:100%; ml-5" v-else>
              <v-text-field class="mt-6" outlined label="Nombre: " v-model="firstname" id="name"></v-text-field>
            </div>
            <button @click="modifyName" class="btn pa-0 mt-6">
              <v-icon left>mdi-pencil-box-outline</v-icon>
            </button>
          </div>
          <div class="item">
            <div class="align-center mt-6" v-if="!changeLast">Apellido: {{ $user.lastName }}</div>
            <div class="width:100%; ml-5" v-else>
              <v-text-field outlined label="Apellido: " v-model="lastname" id="surname"></v-text-field>
            </div>
            <button @click="modifyLast" class="btn pa-0 mt-6">
              <v-icon left>mdi-pencil-box-outline</v-icon>
            </button>
          </div>
          <div class="item">
            <div class="align-center mt-6">Nombre de usuario: {{ $user.username }}</div>
            <!--<div class="width:100%; ml-5" v-else>
              <v-text-field outlined label="Nombre de usuario: " v-model="username" id="username"></v-text-field>
            </div> -->
            <!-- <button @click="modifyUser" class="btn pa-0 mt-6">
              <v-icon left>mdi-pencil-box-outline</v-icon>
            </button> -->
          </div>
          <div class="item">
            <div class="align-center mt-6">Mail: {{ $user.email }}</div>
            <!--<div class="width:100%; ml-5" v-else>
              <v-text-field outlined label="Mail: " v-model="mail" id="mail"></v-text-field>
            </div>
            <button @click="modifyEmail" class="btn pa-0 mt-6">
              <v-icon left>mdi-pencil-box-outline</v-icon>
            </button> -->
          </div>
          <div class="item">
            <div class="align-center mt-6" v-if="!changeGender">Género: {{ $user.gender }}</div>
            <div class="width:100%; ml-5" v-else>
              <v-text-field class="mt-6" outlined label="Género: " v-model="gender" id="gender"></v-text-field>
            </div>
            <button @click="modifyGender" class="btn pa-0 mt-6">
              <v-icon left>mdi-pencil-box-outline</v-icon>
            </button>
          </div>
          <button v-if="changeName || changeLast || changeUser || changeEmail || changeGender" @click="saveChanges" id="sendBtn">Guardar cambios</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import {Credentials2} from "../../api/user";

export default {
  name: "Profile",
  data(){
    return{
      /*username: null,
      firstname: null,
      lastname: null,
      password: null,
      gender:null,
      picture: null,
      mail:null,*/
      changeName: false,
      changeLast: false,
      changeUser: false,
      changeEmail: false,
      changeGender: false,
    }
  },

  async created() {
    await this.getCurrentUser();
  },
  computed: {
    ...mapState('security', {
      $user: state => state.user,
    }),
    ...mapGetters('security', {
      $isLoggedIn: 'isLoggedIn'
    }),
    canCreate() {
      return this.$isLoggedIn && !this.sport
    },
    canOperate() {
      return this.$isLoggedIn
      // BORRO this.sport PARA PROBAR
    },
    canAbort() {
      return this.$isLoggedIn && this.controller
    }
  },
  methods:{
    ...mapActions('security',{
      $getCurrentUser: 'getCurrentUser',
      $modifyUser: 'modifyUser'
    }),

    modifyName() {
      this.changeName = !this.changeName;
    },
    modifyLast() {
      this.changeLast = !this.changeLast;
    },
    modifyUser() {
      this.changeUser = !this.changeUser;
    },
    modifyEmail() {
      this.changeEmail = !this.changeEmail;
    },
    modifyGender() {
      this.changeGender = !this.changeGender;
    },
    async getCurrentUser() {
      //const user = await this.$getCurrentUser()
      this.username = this.$user.username;
      this.firstname = this.$user.firstName;
      this.lastname = this.$user.lastName;
      this.mail = this.$user.email;
      this.gender = this.$user.gender;
    },
    setResult(result){
      this.result = JSON.stringify(result, null, 2)
      alert(this.result);
    },
    async saveChanges() {
      //Hicimos esto así por falta de conocimiento sobre js. A veces se rompe pasandole parametros
      //de menos, por lo que nos aseguramos que el update sea completo.
      try {
        let nombre = this.changeName ? document.getElementById("name").value : this.username;
        let apellido = this.changeLast ? document.getElementById("surname").value : this.lastname;
        let pass = this.changePass ? document.getElementById("password").value : this.password;
        let mail = this.changeEmail ? document.getElementById("mail").value : this.mail;
        let user = this.changeUser ? document.getElementById("username").value : this.username;
        let gender = this.changeGender ? document.getElementById("gender").value : this.gender;
        const credentials = new Credentials2(user, pass, mail, nombre, apellido, gender);
        await this.$modifyUser(credentials);
        this.changeGender = this.changeName = this.changeLast = this.changeEmail = this.changeUser = this.changePass = false;
        const redirectPath = this.$route.query.redirect || "/Profile";
        await this.$router.push(redirectPath);
      }
      catch(e){
        this.setResult(e);
      }
    }
  }
}
</script>

<style scoped>
.primary{
  margin: auto;
  width: 80%;
  height: 100%;
  background-color: white;
  /*display: flex;*/
}
.profile{
  background-image: url("../assets/ProfileFondo.jpg");
  background-size: cover;
  height: 100%;
  background-attachment: fixed;
}

.grid-container {
  display: inline-grid;
  background-color: rgba(255,255,255);
  width: 80%;
  height: 100vh;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}

.item{
  width: 100%;
  margin: 10px;
  display:flex;
  justify-content: space-between;
  align-content: center;
}

.form-item{
  grid-row-start:1;
  grid-row-end: 5;
  font-family: "Raleway", sans-serif;
  font-weight: bolder;
  font-size: x-large;
}

#sendBtn{
  background-color: blue;
  color: white;
  margin-right: 10px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 10px;
}

.btn {
  margin: 15px;
  background-color: transparent;
  font-size: medium;
}

</style>