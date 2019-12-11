<template>
  <div id="app">
    <phone/>
  </div>
</template>

<script>
import phone from './phone'

export default {
  name: 'app',
  components: {
    phone
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
