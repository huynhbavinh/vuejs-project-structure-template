<template>
  <div id="app">
    <h1>Hello world</h1>
    <router-link to="/hello">Go to hello</router-link>
    <router-link to="/spam">Go to spam</router-link>
    <div>
      <h1>router view</h1>
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods: {
    
  },
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
