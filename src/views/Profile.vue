<template>
  <div class="profile">
    <!-- Template extraido de https://stackoverflow.com/questions/63729323/vuetify-custom-component-for-user-profile -->
    <div class="title width:80%;">Datos de usuario: {{ $user.username }}</div>
    <div class="grid-container">
      <div class="form-item">
        <div>
          <div class="item">
            <div class="align-center pl-5 mt-6"><b>Nombre de usuario: </b>{{ $user.username }}</div>
          </div>
          <div class="item">
            <div class="align-center pl-5 mt-6"><b>Mail: </b>{{ $user.email }}</div>
          </div>
          <div class="item">
            <div class="align-center pl-5 mt-6" v-if="!changeName"><b>Nombre: </b> {{ $user.firstName }}</div>
            <div class="width:100%; ml-5" v-else>
              <v-text-field class="mt-6" outlined label="Nombre: " v-model="firstname" id="name"></v-text-field>
            </div>
            <button @click="modifyName" class="btn pa-0 mt-6">
              <v-icon left>mdi-pencil-box-outline</v-icon>
            </button>
          </div>
          <div class="item">
            <div class="align-center pl-5 mt-6" v-if="!changeLast"><b>Apellido: </b>{{ $user.lastName }}</div>
            <div class="width:100%; ml-5" v-else>
              <v-text-field class="mt-6" outlined label="Apellido: " v-model="lastname" id="surname"></v-text-field>
            </div>
            <button @click="modifyLast" class="btn pa-0 mt-6">
              <v-icon left>mdi-pencil-box-outline</v-icon>
            </button>
          </div>
          <div class="item">
            <div class="pl-5 mt-6" v-if="!changeGender"><b>Género: </b>{{ $user.gender }}</div>
            <div class="width:100%; ml-5" v-else>
              <v-select v-model="gender" :items="genders" id="gender" class="mt-6" placeholder="Género"/>
            </div>
            <button @click="modifyGender" class="btn pa-0 mt-6">
              <v-icon left>mdi-pencil-box-outline</v-icon>
            </button>
          </div>
          <button v-if="changeName || changeLast || changeUser || changeEmail || changeGender || uploaded" @click="saveChanges" id="sendBtn">Guardar cambios</button>
        </div>
      </div>
      <div class="grid-item">
        <div class="title pt-40">Foto de perfil</div>
        <v-file-input accept="image/*" label="Agregar foto..." id="picture" @change="changePic"></v-file-input>
        <div v-if="!hasPic">
          <img src="https://alvareztaxinc.com/wp-content/uploads/2016/05/icon-user-default.png" alt="ProfilePic"
               class="image">
        </div>
        <div v-else>
          <img :src="$user.avatarUrl" alt="" class="image">
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
  components: {
  },
  data(){
    return{
      changeName: false,
      changeLast: false,
      changeUser: false,
      changeEmail: false,
      changeGender: false,
      genders: ["male", "female", "other"],
      gender: null,
      hasPic: false,
      uploaded: false,
      picture: null,


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
    changePic(image) {
      this.uploaded = true;
      this.picture = URL.createObjectURL(image);
    },
    async getCurrentUser() {
      //const user = await this.$getCurrentUser()
      this.username = this.$user.username;
      this.firstname = this.$user.firstName;
      this.lastname = this.$user.lastName;
      this.mail = this.$user.email;
      this.gender = this.$user.gender;
      this.picture = this.$user.avatarUrl;
      this.hasPic = (this.$user.avatarUrl !== ".");
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
        const credentials = new Credentials2(this.username, this.password, this.mail, nombre, apellido, this.gender, this.picture);
        await this.$modifyUser(credentials);
        this.changeGender = this.changeName = this.changeLast = false;
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
.title{
  font-size: xx-large;
  font-family: "Raleway", sans-serif;
  background-color: white;
  width:80%;
  margin: auto;
  justify-content: center;
  padding-top: 15px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom: 1px solid black;
}
.profile{
  background-image: url("../assets/ProfileFondo.jpg");
  background-size: cover;
  height: 100%;
  background-attachment: fixed;
}


.image{
  border-radius: 50%;
  width: 300px;
  height: 300px;
  margin-top: 40px;
  vertical-align: middle;
  align-items: center;
}
.grid-container {
  display: inline-grid;
  padding-top: 15px;
  background-color: rgba(255,255,255);
  width: 80%;
  height: 80vh;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
}

.item{
  width: 100%;
  margin: 10px;
  display:flex;
  justify-content: space-between;
  align-content: center;
  border: 1px solid black;
  border-radius: 15px;
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
