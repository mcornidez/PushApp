<template>
  <div class="progBar">
    <div>
      <span>En curso - Progreso = {{ completeP }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgBar"
  data(){
    return{
      completeP: 50
    }
  }
}
</script>

<style scoped>
  .progBar{
    display: flex;
  }
</style>