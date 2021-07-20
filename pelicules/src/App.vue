<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <LlistaPelis titol="Llista de Películes"/>
  </div>
</template>

<script>
import LlistaPelis from './components/LlistaPelis.vue'

export default {
  name: 'App',
  components: {
    LlistaPelis
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
