<template>
  <div name="attack" class="flex flex-row relative w-full justify-start gap-7 items-center bg-yellow-300 p-2">
                   
                    
                
                    
                    <div class="text-center">
                        <p>Location</p>
                        <input class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-50" :name="`${game}-location`">
                    </div>
                    <div class="flex flex-col">
                      <p class="ml-4">Encounter rate</p>
                      <div class="border border-gray-500 rounded h-8  bg-gray-100 flex flex-row items-center p-2 w-36 mr-6">
                          <input type="number" max="100" min="0" step="1" :name="`${game}-encounterRate`" class="overflow-hidden text-black text-center border-0 outline-none bg-transparent w-full" >
                          <span class="text-black">%</span>
                      </div>
                    </div>
                    <div class="text-center">
                        <p>Method</p>
                        <select class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-50" :name="`${game}-method`" >
                          <option v-for="method in methods" :value="method" :key="method">{{method}}</option>
                        </select>
                    </div>
                    <div class="text-center">
                        <p>Time</p>
                        <select class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-50" :name="`${game}-time`" >
                          <option v-for="time in times" :value="time" :key="time">{{time}}</option>
                        </select>
                    </div>
                    <div class="text-center">
                      <p>Min Level</p>
                      <div class="border border-gray-500 rounded h-8  bg-gray-100 flex flex-row items-center p-2 w-24 mr-6">
                          <input type="number" max="100" min="1" step="1" :name="`${game}-minLevel`" class="overflow-hidden text-black text-center border-0 outline-none bg-transparent w-1/2" >
                          
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <p class="ml-4">Max Level</p>
                      <div class="border border-gray-500 rounded h-8  bg-gray-100 flex flex-row items-center p-2 w-24 mr-6">
                          <input type="number" max="100" min="1" step="1" :name="`${game}-maxLevel`" class="overflow-hidden text-black text-center border-0 outline-none bg-transparent w-1/2" >
                          
                      </div>
                    </div>
                    <div  @click="removeLine()" class="absolute bottom-1/4 right-2 text-gray-900">
                        
                        <svg class="w-8" id="Layer_1" fill="currentcolor" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path class="cls-1" d="M17.66229,21.88486,63.3847,30.82574l45.72241,8.94088a1.559,1.559,0,0,0,1.82788-1.22994A10.15176,10.15176,0,0,0,102.9192,26.6239l-15.172-2.96684.79656-4.07352A11.10952,11.10952,0,0,0,79.7827,6.56318L57.33412,2.17343A11.1096,11.1096,0,0,0,44.31375,10.9345L43.51718,15.008l-15.172-2.96685A10.15176,10.15176,0,0,0,16.43235,20.057a1.559,1.559,0,0,0,1.22994,1.82788ZM60.0674,9.82374,74.369,12.62036a8.2641,8.2641,0,0,1,6.5245,9.69647h0l-15.2613-2.9843L50.37093,16.34825h0A8.2641,8.2641,0,0,1,60.0674,9.82374Z"/><path class="cls-2" d="M110.58839,47.36161H17.41161a1.559,1.559,0,0,0-1.55785,1.55785v5.90918c0,.85949,16.14275,61.05238,16.14275,61.05238a11.08149,11.08149,0,0,0,11.03938,10.153H84.96412A11.08149,11.08149,0,0,0,96.0035,115.881s16.14275-60.19289,16.14275-61.05238V48.91946A1.559,1.559,0,0,0,110.58839,47.36161Zm-61.934,64.2194a2.60793,2.60793,0,0,1-3.19666-1.84821c-4.44239-16.61345-8.95983-33.53068-11.91535-44.72956a2.61069,2.61069,0,1,1,5.04851-1.33243c2.95407,11.19159,7.47077,28.10409,11.911,44.71353A2.61043,2.61043,0,0,1,48.65435,111.581Zm17.95316-2.52243a2.61095,2.61095,0,0,1-5.22189,0V64.337a2.61095,2.61095,0,0,1,5.22189,0ZM94.45735,65.00325C91.3685,76.70879,86.46715,95.05644,82.542,109.73317a2.61073,2.61073,0,1,1-5.04414-1.34918c3.9237-14.67272,8.8236-33.01491,11.911-44.71316a2.61069,2.61069,0,1,1,5.04851,1.33243Z"/></svg>
                    </div>
                </div>
</template>

<script>
export default {
  name: 'MoveLine',
  data(){
      return{
        methods:["Walking","Old Rod","Good Rod","Super Rod","Surfing","Overworld","Sweet scent","Headbutt","Double Grass","Interact","Hidden Hollow","Starter"],
        times:["None","Morning","Day","Night","Spring","Summer","Autumn","Winter","Sunny","Overcast","Raining","Thunderstorm","Snowing","Snowstorm","Harsh Sunlight","Sandstorm","Fog"]
      
      }
  },
  props:['index','game'],
  methods:{
      removeLine(){
        this.$emit('remove')

      },
      changeTest(){
          this.test = !this.test
      }
  }
   
  
}
</script>