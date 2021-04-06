<template>
  <div name="attack" class="flex flex-row relative w-full justify-start gap-7 items-center bg-yellow-300 p-2">
                    <div class="text-center">
                        <p>Movetype</p>
                        <select class="border border-gray-500 rounded h-8  bg-gray-100 text-center" name="moveCategory" v-model="moveCategorySelected">
                            <option v-for="cat in moveCategory" :key="cat">{{cat}}</option>
                        </select>
                    </div>
                    <div v-if="moveCategorySelected  === 'Level'" class="text-center">
                        <p>Level</p>
                        <input class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-16" v-model="level" :name="`${game}-Level`">
                    </div>
                    <div v-if="moveCategorySelected  === 'TM/HM'" class="text-center">
                        <p>TM/HM</p>
                        <input class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-16" v-model="level" :name="`${game}-TM/HM`" placeholder="TM01/HM01">
                    </div>
                    
                    <div class="text-center">
                        <p>Name</p>
                        <input class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-50" :name="`${game}-name-${moveCategorySelected}`">
                    </div>
                    <div class="text-center"> 
                        <p>Type</p>
                        
                        <select class="border border-gray-500 rounded h-8  bg-gray-100 text-center" :name="`${game}-type-${moveCategorySelected}`" >
                            <option class="text-center" v-for="type in types" :value="type" :key="type">{{type}}</option>
                        </select>
                    </div >
                    <div class="text-center">
                        <p>Category</p>
                        <select class="border border-gray-500 rounded h-8  bg-gray-100 text-center" :name="`${game}-category-${moveCategorySelected}`" >
                            <option  class="text-center" v-for="category in categories" :value="category" :key="category" :style="{backgroundImage:'url(../assets/images/MoveCategories/'+category.toLowerCase()+'.png'}">{{category}}  </option>
                        </select>
                        
                       
                    </div>
                    <div class="text-center">
                        <p>Damage</p>
                        <input class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-12" :name="`${game}-damage-${moveCategorySelected}`">
                    </div>
                     <div class="text-center">
                        <p>Accuracy</p>
                        <input type="number" step="1" min="0" max="100" class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-16" :name="`${game}-accuracy-${moveCategorySelected}`">
                    </div>
                    <div class="text-center">
                        <p>PP</p>
                        <input class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-12" :name="`${game}-PP-${moveCategorySelected}`">
                    </div>
                    <div class="text-center">
                        <p>Effect %</p>
                        <input type="number" step="1" min="0" max="100" class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-16" :name="`${game}-effectPer-${moveCategorySelected}`">
                    </div>
                    <div class="text-center">
                        <p>Description</p>
                        <input class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-72" :name="`${game}-description-${moveCategorySelected}`">
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
        level:"",
        test:false,
        moveCategory : ["Level","TM/HM","Egg","Tutor"],
        moveCategorySelected:"Level",
        types:["Normal","Fire","Water","Grass","Electric","Rock","Ground","Psychic","Bug","Flying","Dragon","Fairy","Ice","Steel","Dark","Poison","Ghost","Fighting"],
        categories:['Physical','Special','Other']
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    /* input[type="radio"]{
        display: none;
    } */
    input[type="radio"]:checked + label>img{
        filter: none;
        border: red solid 2px;
    }
    label>img{
        filter: grayscale(100%);
        border: gray solid 2px;
    }
    
   
</style>