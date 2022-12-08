<template>
  <div id="app">
     <TestRecrutement />
  </div>
 
</template>

<script>
import TestRecrutement from './components/TestRecrutement.vue'

export default {
  name: 'App',
  components: {
    TestRecrutement
  }
}
</script>

<style>
@import url('./vendor/css/bootstrap.min.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
