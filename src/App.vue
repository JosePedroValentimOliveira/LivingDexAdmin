<template>
  <div id="app" class=""  >
    <router-view class="w-full min-h-screen  flex-grow-0 flex-shrink-0 p-12 pl-80 pt-16" ></router-view>
    <Navigation class="w-72 h-screen bg-red-800 flex-grow-0 flex-shrink-0 text-gray-900 fixed left-0 top-0 z-50" />
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

</style>
