<template>
  <nav class="h-full pt-80 bg-red-900 ">
    
    
    <button @click="openTab('pokedex')" class="router-link focus:outline-none"  >
      <div class="wrapper transform transition duration-150 flex flex-row items-center justify-start w-full">
        <div class="w-2/12 ml-4">
          <img   src="https://cdn2.iconfinder.com/data/icons/pokemon-go-addict/100/05-_Pokestop_-_PokeBall_-_Game_-_Pokemon_-_Pokemongo-512.png"/>
        </div>
        <div class="w-9/12">
          <h3 class="font-bold text-2xl text-white">Pokedex</h3>
        </div>
      </div>
    </button>
    <transition name="fade-down" mode="out-in">
      <div class="flex flex-col" v-if="opentab === 'pokedex'">
        
        <router-link to="/pokedex-database" class="router-link">
        <div class="wrapper transform transition duration-150 flex flex-row items-center justify-start w-full gap-2">
        <div class="w-1/12 ml-4">
          <img   src="https://i.pinimg.com/originals/8a/bc/4d/8abc4d98d9df0d8a9caa486fe1aa0ac5.png"/>
        </div>
        <div class="w-9/12 ">
          <h3 class="font-bold text-base text-white">Pokedex Database</h3>
        </div>
      </div>
        </router-link>
      
      
        <router-link to="/add-pokemon" class="router-link focus:outline-none">
        <div class="wrapper transform transition duration-150 flex flex-row items-center justify-start w-full gap-2">
        <div class="w-1/12 ml-4">
          <img   src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-add-icon.png"/>
        </div>
        <div class="w-9/12 ">
          <h3 class="font-bold text-base text-white">Add Pokemon</h3>
        </div>
      </div>
        </router-link>
      </div>

    </transition>
    
      <button @click="openTab('vgc')" class="router-link focus:outline-none"  >
      <div class="wrapper transform transition duration-150 flex flex-row items-center justify-start w-full">
        <div class="w-4/12">
          <img   src="http://static1.squarespace.com/static/5c8727a2af46830f79ac622a/t/5dfb752fba3b441134abfb4a/1576760624548/vgc.png?format=1500w"/>
        </div>
        <div class="w-9/12">
          <h3 class="font-bold text-2xl text-white">VGC</h3>
        </div>
        
      </div>
    </button>
    <transition name="fade-down" mode="out-in">
      <div class="flex flex-col" v-if="opentab === 'vgc'">
        <router-link to="/vgc-database" class="router-link">
        <div class="wrapper transform transition duration-150 flex flex-row items-center justify-start w-full gap-2">
        <div class="w-1/12 ml-4">
          <img   src="https://i.pinimg.com/originals/8a/bc/4d/8abc4d98d9df0d8a9caa486fe1aa0ac5.png"/>
        </div>
        <div class="w-9/12 ">
          <h3 class="font-bold text-base text-white">VGC Database</h3>
        </div>
      </div>
        </router-link>
      
      
        <router-link to="/add-pokemon-vgc" class="router-link">
        <div class="wrapper transform transition duration-150 flex flex-row items-center justify-start w-full gap-2">
        <div class="w-1/12 ml-4">
          <img   src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-add-icon.png"/>
        </div>
        <div class="w-9/12 ">
          <h3 class="font-bold text-base text-white">Add Pokemon</h3>
        </div>
      </div>
        </router-link>
      </div>

    </transition>

    
  </nav>
</template>

<script>


export default {
  name: "navigation",
  
  data(){
    return{
      opentab: ''
    }
  },
  methods: {
    openTab(tab){
      if(tab === this.opentab){
        this.opentab = ""
      } else{
        this.opentab = tab;
      }
    },
    
  }
}
</script>

<style>

</style>
