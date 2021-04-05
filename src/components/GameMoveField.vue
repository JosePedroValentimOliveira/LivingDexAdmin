<template>
  <div class="text-black mb-4 " >
    <div class="w-full bg-gray-500 flex items-center justify-between p-2 rounded-t ">
      <select class="border text-black border-gray-500 rounded h-8  bg-gray-100   w-2/12 " v-model="game" name="game" >
        <option v-for="game in games" :value="game" :key="game">{{game}}</option>
      </select>
      <div class="flex flex-row gap-4">
        <button type="button" @click="addLine()" class="border border-black rounded p-2 bg-blue-300 text-black font-bold">Add line</button>
        <button  @click="removeGame()" type="button" class="border border-black  rounded p-2 bg-blue-300 text-black font-bold">Remove game</button>
     </div>
     <div @click="dropdown()"  class="text-4xl mr-2 ">
        <div v-if="!open" class="w-10"><img src="../assets/images/plus.png" alt=""></div>
        <div v-if="open" class="w-10"><img src="../assets/images/minus.png" alt=""></div>
        
     </div>
    </div>
    <div v-if="open" >
      <component  :game="game" v-for="line in lines" :is='line.component' :key="line.id" @remove="removeLine(line.id)"></component>
    </div>
  </div>
</template>

<script>
import MoveLine from './MoveLine';


export default {
  name: 'GameMoveField',
  data(){
    return{
      games:['Red/Blue','Yellow','Gold/Silver/Crystal','Fire Red/Leaf Green','Ruby/Sapphire/Emerald','DP/Platinum/HGSS','BW/BW2','XY','ORAS','SUMO/USUM/Lets Go','SWSH'],
      lines:[],
      game:"Red/Blue",
      id:0,
      open:true
    
    }
  },
  components:{MoveLine},
  methods:{
    addLine(){
      this.lines.push({id:this.id,component:MoveLine});
      this.id +=1;
    },
    removeLine(id){
      const pos = this.lines.map((e)=>{return e.id}).indexOf(id);
      this.lines.splice(pos,1);  
    },
    removeGame(){
      this.$emit('removeGame')
    },
    dropdown(){
      this.open = !this.open;
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
