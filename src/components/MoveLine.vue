<template>
  <div name="attack" class="flex flex-row w-full justify-around items-center bg-red-200 p-2 gap-4">
                    <div>
                        <p>Type of move</p>
                        <select name="moveCategory" v-model="moveCategorySelected">
                            <option v-for="cat in moveCategory" :key="cat">{{cat}}</option>
                        </select>
                    </div>
                    <div v-if="moveCategorySelected  === 'Level'">
                        <p>Level</p>
                        <input class="border border-black w-16" v-model="level" :name="`${game}level`">
                    </div>
                    <div v-if="moveCategorySelected  === 'TM/HM'">
                        <p>TM/HM</p>
                        <input class="border border-black w-16" v-model="level" :name="`${game}TM/HM`" placeholder="TM01/HM01">
                    </div>
                    
                    <div>
                        <p>Name</p>
                        <input class="border border-black w-32 " :name="`${game}name`">
                    </div>
                    <div>
                        <p>Type</p>
                        <input class="border border-black w-16 " :name="`${game}type`">
                    </div>
                    <div>
                        <p>Category</p>
                        <div class="flex flex-row gap-2">
                            <div class="flex flex-col items-center gap-1">
                                <input name="category" id="physical"  type="radio" >
                                <label for="physical"><img  class="radioLabel h-6" src="../assets/images/MoveCategories/physical.png" alt=""></label>
                            </div>
                            <div class="flex flex-col items-center gap-1">
                                <input name="category" id="special"  type="radio" >
                                <label for="special"><img  class="radioLabel h-6" src="../assets/images/MoveCategories/special.png" alt=""></label>
                            </div>
                             <div class="flex flex-col items-center gap-1">
                                <input name="category" id="other"  type="radio" >
                                <label  for="other"><img  class="radioLabel h-6" src="../assets/images/MoveCategories/other.png" alt=""></label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Dmg</p>
                        <input class="border border-black w-16 " :name="`${game}damage`">
                    </div>
                     <div>
                        <p>Accuracy</p>
                        <input class="border border-black w-16 " :name="`${game}accuracy`">
                    </div>
                    <div>
                        <p>PP</p>
                        <input class="border border-black w-16 " :name="`${game}PP`">
                    </div>
                    <div>
                        <p>Effect %</p>
                        <input class="border border-black w-16 " :name="`${game}effectPer`">
                    </div>
                    <div>
                        <p>Description</p>
                        <input class="border border-black w-16 " :name="`${game}description`">
                    </div>
                    <button type="button" @click="removeLine()">X</button>
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
          moveCategorySelected:"Level"

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
    input[type="radio"]{
        -webkit-appearance: none;
    }
    input[type="radio"]:checked + label>img{
        filter: none;
        border: red solid 2px;
    }
    label>img{
        filter: grayscale(100%);
        border: gray solid 2px;
    }
    
   
</style>