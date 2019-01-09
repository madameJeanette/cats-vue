<template>
  <div id="app">
   
   <IlCats/>
  </div>
</template>

<script>

import IlCats from './components/IlCats'

export default {
  name: 'App',
  components: {
    
    IlCats
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

