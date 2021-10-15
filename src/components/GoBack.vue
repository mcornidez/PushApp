<template>
    <!--<span class="go-back">
      <button @click="goBack" class="btn text--black">Go Back</button>
    </span>-->
  <v-btn class="btn" @click="goBack">
    <span>Volver</span>
  </v-btn>
</template>

<script>
export default {
  name: "GoBack",
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.go-back {
  margin:auto;
  align-self: center;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  color: black;
  font-weight: bolder;
}
button {
  border: 0;
}

.btn {
  margin-right: 15px;
  margin-left: 15px;
  background-color: rgba(255,255,255, 1);
  font-weight: bolder;
}
</style>