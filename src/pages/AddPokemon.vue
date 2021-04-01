<template>
    <div class="flex flex-col items-center ">
        <h1 class="text-3xl">Add Pokemon</h1>

        <form class="bg-blue-300 w-full p-10 flex flex-col items-center justify-center gap-3" method="POST" action="http://localhost:3000/test">
            <button type="submit" class="border border-black absolute top-20 right-20 rounded p-2 bg-blue-300 text-black font-bold">Save Pokemon</button>
            <div class="flex flex-row items-center w-10/12">
                <div class="w-4/12">
                    <label for="id">Id: </label>
                    <input class="w-4/12 p-1 text-center border-gray-500 rounded border h-8" type="text" name="id" id="id"/>
                </div>
                <div class="w-4/12">
                    <label for="species">Species: </label>
                    <input class="w-7/12 p-1 text-center border-gray-500 rounded border h-8" type="text" name="species" id="species"/>
                </div>
                <div class="w-4/12">
                    <label for="name">Name: </label>
                    <input class="w-9/12 p-1 text-center border-gray-500 rounded border h-8" type="text" name="name" id="name"/><br>
                </div>
            </div>
            <div class="bg-gray-300 rounded p-2 w-9/12 flex flex-row items-center ">
                <h1 class="text-2xl ">Sprites:</h1>
                <label class="ml-20" for="gender">Gender Difference: </label>
                <input @change="onChangeGender()" v-model="gender" type="checkbox" name="gender" id="gender">
            </div>
            <div class="flex flex-col justify-center items-center w-10/12 ">
                <div class=" w-10/12 flex flex-row justify-center items-center gap-4 ">
                    <div class="w-full ">
                        <p class="float-left">Regular: </p>
                        <input class="w-full p-1 text-center border-gray-500 rounded border h-8" type="text" id="regular" name="regular" v-model="regular"><br>
                    </div>
                    <div  v-if='this.regular' class="flex flex-col w-1/12" style="height:75px;width:75px">
                        <img  :src="this.regular"/>
                    </div>
                </div>
                <div class=" w-10/12 flex flex-row justify-center items-center gap-4  ">
                    <div class="w-full ">
                        <p class="float-left">Shiny: </p>
                        <input class="w-full p-1 text-center border-gray-500 rounded border h-8" type="text" id="shiny" name="shiny" v-model="shiny"><br>
                    </div>
                    <div  v-if='this.shiny' class="flex flex-col w-1/12" style="height:75px;width:75px">
                        <img  :src="this.shiny"/>
                    </div>
                </div>
                <div v-if="gender" class=" w-10/12 flex flex-row justify-center items-center gap-4  ">
                    <div class="w-full ">
                        <p class="float-left">Regular Female: </p>
                        <input class="w-full p-1 text-center border-gray-500 rounded border h-8" type="text" id="regularF" name="regularF" v-model="regularF"><br>
                    </div>
                    <div  v-if='this.regularF' class="flex flex-col  w-1/12 h30 " style="height:75px;width:75px">
                        <img  :src="this.regularF"/>
                    </div>
                </div>
                <div v-if="gender" class=" w-10/12 flex flex-row justify-center items-center gap-4  ">
                    <div class="w-full ">
                        <p class="float-left">Shiny Female: </p>
                        <input class="w-full p-1 text-center border-gray-500 rounded border h-8" type="text" id="shinyF" name="shinyF" v-model="shinyF"><br>
                    </div>
                    <div  v-if='this.shinyF' class="flex flex-col  w-1/12 h30 " style="height:75px;width:75px">
                        <img  :src="this.shinyF"/>
                    </div>
                </div>
                
                
            </div>

            <div class="w-11/12 flex flex-row items-center space-x-3">
                

                <div class="w-4/12 text-center ">
                    <h1>Typing:</h1>
                    <div class="flex flex-row  items-center ">
                        <div class="w-4/12 ">
                            <label for="secondTypeCheck">Dual type: </label>
                            <input v-model="secondType" type="checkbox" name="secondTypeCheck" id="secondTypeCheck">
                        </div>
                        <div class="w-8/12  flex flex-row gap-2">
                            <select class="border border-gray-500 rounded h-8  bg-gray-100   w-5/12 " name="typing" >
                            <option class="text-center" v-for="type in types" :value="type" :key="type">{{type}}</option>
                        </select>
                        <select  class="border border-gray-500 rounded h-8  bg-gray-100   w-5/12 " v-if="secondType" name="typing" >
                            <option v-for="type in types" :value="type" :key="type">{{type}}</option>
                        </select>
                        </div>
                    
                        
                    </div>
                </div>

                <div class="w-4/12 text-center ">
                    <div class="flex flex-row items-center justify-between">
                        <h1 class=" font-bold">Gender ratio: </h1>
                        <div>
                            Genderless:
                            <input type="checkbox">
                        </div>
                    </div>
                    <div class=" flex flex-row ">
                        <p class="flex flex-row items-center gap-2 mr-2">Male<img class="h-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Male-s%C3%ADmbolo2.svg/199px-Male-s%C3%ADmbolo2.svg.png" alt="">: </p>
                        <div class="border border-gray-500 rounded h-8  bg-gray-100 flex flex-row items-center p-2 w-3/12 mr-6">
                            <input v-model="maleRatio"  @change="changeFemale(maleRatio)" type="number" max="100" min="0" step="0.1" name="maleRatio" id="maleRatio" class="overflow-hidden text-center border-0 outline-none bg-transparent w-full" >
                            <span>%</span>
                        </div>
                        <p class="flex flex-row items-center gap-2 mr-2">Female<img class="h-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/FemalePink.png/391px-FemalePink.png" alt="">: </p>
                        <div class="border border-gray-500 rounded h-8  bg-gray-100 flex flex-row items-center p-2 w-3/12">
                            <input v-model="femaleRatio"  @change="changeMale(femaleRatio)" type="number" max="100" min="0" step="0.1" name="femaleRatio" id="femaleRatio" class="overflow-hidden text-center border-0 outline-none bg-transparent w-full" >
                            <span>%</span>
                        </div>
                    </div>
                </div>


                <div class="w-4/12 text-center bg-red-300">
                     <div class="flex flex-row items-center justify-between">
                        <h1 class=" font-bold">Egg group: </h1>
                        <div>
                            Dual egg group:
                            <input v-model="secondEgg" type="checkbox" name="secondEgg" id="secondEgg">
                        </div>
                    </div>
                    <div class="flex flex-row  items-center justify-center ">
                       
                        <div class="w-8/12  flex flex-row gap-2">
                            <select class="border border-gray-500 rounded h-8  bg-gray-100   w-6/12 " name="eggGroup" >
                                <option v-for="group in eggGroups" :value="group" :key="group">{{group}}</option>
                            </select>
                            <select class="border border-gray-500 rounded h-8  bg-gray-100   w-6/12 " v-if="secondEgg" name="eggGroup" >
                                <option v-for="group in eggGroups" :value="group" :key="group">{{group}}</option>
                            </select>
                        </div>
                    
                        
                    </div>
                </div>
            </div>

            <div class="w-10/12 ">
                <div class="float-left">
                    <h1>Moves:</h1>
                    <label for="game"></label>
                    <select name="game" >
                        <option v-for="game in games" :value="game" :key="game">{{game}}</option>
                    </select>
                </div><br>
                <div name="attack" class="flex flex-row w-10/12">
                    <div>
                        <p>level</p>
                        <input class="border border-black w-16 " name="level">
                    </div>
                    <div>
                        <p>name</p>
                        <input class="border border-black w-16 " name="name">
                    </div>
                    <div>
                        <p>type</p>
                        <input class="border border-black w-16 " name="type">
                    </div>
                    <div>
                        <p>category</p>
                        <input class="border border-black w-16 " name="category">
                    </div>
                    <div>
                        <p>damage</p>
                        <input class="border border-black w-16 " name="damage">
                    </div>
                     <div>
                        <p>accuracy</p>
                        <input class="border border-black w-16 " name="accuracy">
                    </div>
                    <div>
                        <p>PP</p>
                        <input class="border border-black w-16 " name="PP">
                    </div>
                    <div>
                        <p>effectPer</p>
                        <input class="border border-black w-16 " name="effectPer">
                    </div>
                    <div>
                        <p>description</p>
                        <input class="border border-black w-16 " name="description">
                    </div>
                   
                </div>
            </div>
            
            
            


        </form>
    </div>
</template>

<script>
export default {
    name:"addpokemon",
    data(){ 
        return{
            regular:"",
            regularF:"",
            shiny:"",
            shinyF:"",
            gender:false,
            secondType:false,
            secondEgg:false,
            maleRatio:0,
            femaleRatio:0,
            types:["Normal","Fire","Water","Grass","Electric","Rock","Ground","Psychic","Bug","Flying","Dragon","Fairy","Ice","Steel","Dark","Poison","Ghost","Fighting"],
            eggGroups:["Amorphous","Bug","Dragon","Fairy","Field","Flying","Grass","Human-Like","Mineral","Monster","Water 1","Water 2","Water 3"],
            games:['Red/Blue','Yellow','Gold/Silver/Crystal','Fire Red/Leaf Green','Ruby/Sapphire/Emerald','DP/Platinum/HGSS','BW/BW2','XY','ORAS','SUMO/USUM/Lets Go','SWSH']
        }
    },
    methods:{
        changeFemale(maleRatio){
            this.femaleRatio = 100 - maleRatio;
        },
        changeMale(femaleRatio){
            this.maleRatio = 100 - femaleRatio;
        },
        onChangeGender(){
           if(!this.gender){
               this.regularF = "";
               this.shinyF ="";
           }
        }
    }
}
</script>
<style>
.input-box {
  display: flex;
  align-items: center;
  max-width: 300px;
  background: #fff;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  padding-left: 0.5rem;
  overflow: hidden;
  font-family: sans-serif;
}

.input-box .prefix {
  font-weight: 300;
  font-size: 14px;
  color: #999;
}

.input-box input {
  flex-grow: 1;
  font-size: 14px;
  background: #fff;
  border: none;
  outline: none;
  padding: 0.5rem;
}

.input-box:focus-within {
  border-color: #777;
}
</style>