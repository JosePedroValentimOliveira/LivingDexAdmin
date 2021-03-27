<template>
  <div id="app" >
    
      <Navigation class="w-72 h-screen bg-gray-200 flex-grow-0 flex-shrink-0 text-gray-900 fixed left-0 top-0 z-50" />
      
      
      
      <router-view class="w-full min-h-screen bg-gray-100 flex-grow-0 flex-shrink-0 p-24 pl-96 pt-16" ></router-view>
     
  


    

  </div>
</template>

<script>

import Navigation from './components/Navigation'
export default {
  name: 'App',
  components: {
    Navigation,
  
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
