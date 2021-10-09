<template>
  <div class="profile">
    <!-- Template extraido de https://stackoverflow.com/questions/63729323/vuetify-custom-component-for-user-profile -->
    <v-card class="mx-auto" width="80%" tile>
      <v-img height="20vh" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"></v-img>
      <v-list-item color="rgba(0, 0, 0, .4)">
        <v-list-item-content>
          <v-list-item-title class="title">Marcus Obrien</v-list-item-title>
          <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>
  .profile{
    background-image: url("../assets/ProfileFondo.jpg");
    background-size: cover;
    height: 100%;
    display: flow;
  }
</style>