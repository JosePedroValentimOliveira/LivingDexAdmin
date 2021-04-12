<template>
  <div class="text-black mb-4 " >
    <div class="w-full bg-gray-600 flex items-center justify-between p-2 rounded-t ">
      <select class="border text-black border-gray-500 rounded h-8  bg-gray-100   w-2/12 " v-model="game" name="locationGame" >
        <option v-for="game in games" :value="game" :key="game">{{game}}</option>
      </select>
      <div class="flex flex-row gap-4">
        <div  class="text-gray-200 " @click="addLine()" >
          <svg class="w-10" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 137.144 137.144" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 137.144 137.144"><g><g><path d="m82.287,48.001h27.428c-13.668-13.6-6.894-6.834-20.572-20.572v20.572h-6.856zm6.857-20.572c1.076,0-0.653-0.656 0,0zm20.571,27.429v-6.857 6.857zm-27.428-6.857v-20.571l6.857-.001c-19.213,0-48,0-48,0v54.858h-13.715v13.714h13.714v13.714 0.001h20.571v-0.001h-6.857v-13.714h13.714v-13.714h-13.713v-13.714h-13.714v-6.857h20.571v13.714h13.715v27.429h-13.715v6.856h48c0,0 0-32.033 0-54.857h-27.428v-6.857zm27.428-48.001h-82.286c-15.149,0-27.429,12.281-27.429,27.429v82.286c0,15.149 12.28,27.429 27.429,27.429h82.286c15.148,0 27.429-12.28 27.429-27.429v-82.286c0-15.148-12.28-27.429-27.429-27.429zm13.715,102.858c0,11.361-9.21,20.572-20.571,20.572h-68.573c-11.361,0-20.572-9.21-20.572-20.572v-68.572c0-11.361 9.21-20.572 20.572-20.572h68.572c11.361,0 20.571,9.21 20.571,20.572v68.572z"/></g></g></svg>
        </div>
        <div  @click="removeGame()" class="text-white" >
          <svg class="w-10" id="Layer_1" fill="currentcolor" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path class="cls-1" d="M17.66229,21.88486,63.3847,30.82574l45.72241,8.94088a1.559,1.559,0,0,0,1.82788-1.22994A10.15176,10.15176,0,0,0,102.9192,26.6239l-15.172-2.96684.79656-4.07352A11.10952,11.10952,0,0,0,79.7827,6.56318L57.33412,2.17343A11.1096,11.1096,0,0,0,44.31375,10.9345L43.51718,15.008l-15.172-2.96685A10.15176,10.15176,0,0,0,16.43235,20.057a1.559,1.559,0,0,0,1.22994,1.82788ZM60.0674,9.82374,74.369,12.62036a8.2641,8.2641,0,0,1,6.5245,9.69647h0l-15.2613-2.9843L50.37093,16.34825h0A8.2641,8.2641,0,0,1,60.0674,9.82374Z"/><path class="cls-2" d="M110.58839,47.36161H17.41161a1.559,1.559,0,0,0-1.55785,1.55785v5.90918c0,.85949,16.14275,61.05238,16.14275,61.05238a11.08149,11.08149,0,0,0,11.03938,10.153H84.96412A11.08149,11.08149,0,0,0,96.0035,115.881s16.14275-60.19289,16.14275-61.05238V48.91946A1.559,1.559,0,0,0,110.58839,47.36161Zm-61.934,64.2194a2.60793,2.60793,0,0,1-3.19666-1.84821c-4.44239-16.61345-8.95983-33.53068-11.91535-44.72956a2.61069,2.61069,0,1,1,5.04851-1.33243c2.95407,11.19159,7.47077,28.10409,11.911,44.71353A2.61043,2.61043,0,0,1,48.65435,111.581Zm17.95316-2.52243a2.61095,2.61095,0,0,1-5.22189,0V64.337a2.61095,2.61095,0,0,1,5.22189,0ZM94.45735,65.00325C91.3685,76.70879,86.46715,95.05644,82.542,109.73317a2.61073,2.61073,0,1,1-5.04414-1.34918c3.9237-14.67272,8.8236-33.01491,11.911-44.71316a2.61069,2.61069,0,1,1,5.04851,1.33243Z"/></svg>

        </div>
        
     </div>
     <div @click="open = !open"  class="text-4xl mr-2 text-white">
        <div v-if="!open" class="w-10 ">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24"  stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </div>
        <div v-if="open" class="w-10">
          <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </div>
        
     </div>
    </div>
    <div v-show="open">
      <component class="my-1 rounded"  :game="game" :index="line.id" v-for="line in lines" :is='line.component' :key="line.id" @remove="removeLine(line.id)"></component>
    </div>
    

    
  </div>
</template>

<script>
import LocationLine from './LocationLine';


export default {
  name: 'LocationField',
  data(){
    return{
      games:['Red','Blue','Yellow','Gold','Silver','Crystal','Fire Red','Leaf Green','Ruby','Sapphire','Emerald','Diamond','Pearl','Platinum','HeartGold','SoulSilver','Black','White','Black 2','White 2','X','Y','Omege Ruby','Alpha Sapphire','Sun','Moon','Ultra Sun','Ultra Moon',"Let's Go, Pikachu!","Let's Go, Eevee!",'Sword','Shield','Brilliant Diamond','Shining Pearl','Legends: Arceus'],
      lines:[],
      game:"Red",
      id:0,
      open:true
    
    }
  },
  components:{LocationLine},
  methods:{
    addLine(){
      this.lines.push({id:this.id,component:LocationLine});
      this.id +=1;
    },
    removeLine(id){
      const pos = this.lines.map((e)=>{return e.id}).indexOf(id);
      this.lines.splice(pos,1);  
    },
    removeGame(){
      this.$emit('removeGame')
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
