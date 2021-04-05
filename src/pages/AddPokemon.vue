<template>
    <div class="flex flex-col items-center bg-gray-900 text-white ">
        <h1 class="text-3xl">Add Pokemon</h1>
        
        <form class=" w-full p-10 flex flex-col items-center justify-center gap-3" method="POST" action="http://localhost:3000/test">
            <button type="submit" class="border border-black absolute top-20 right-20 rounded p-2 bg-blue-300 text-black font-bold">Save Pokemon</button>
            <div class="flex flex-row  items-start w-10/12 justify-between ">
                <div class="flex flex-row w-6/12  border  p-2">
                    <div class="flex flex-col w-full gap-4">
                        <div class=" w-3/12 flex flex-row justify-center items-center gap-4 ">
                            <div class="w-full ">
                                <p class="float-left">Id: </p>
                                <input @change="populate()" v-model="id" placeholder="Id" class="w-full text-black p-1 text-center border-gray-500 rounded border h-8" type="text" id="id" name="id" ><br>
                            </div>
                            
                        </div>
                        <div class=" w-5/12 flex flex-row justify-center items-center space-y-4 ">
                            <div class="w-full ">
                                <p class="float-left">Species: </p>
                                <input v-model="species" placeholder="Fill in species" class="w-full text-black p-1 text-center border-gray-500 rounded border h-8" type="text" id="species" name="species"><br>
                            </div>
                            
                        </div>
                        <div class=" w-5/12 flex flex-row justify-center items-center gap-4 ">
                            <div class="w-full ">
                                <p class="float-left">Name: </p>
                                <input v-model="name" placeholder="Fill in name" class="w-full text-black p-1 text-center border-gray-500 rounded border h-8"  type="text" id="name" name="name"><br>
                            </div>
                            
                        </div>
                    </div>
                    <div class="flex flex-col w-5/12 ">
                        <div class="flex flex-row border border-white rounded-t h-1/12 p-1">
                            <p class="w-3/12">#{{id}}</p>
                            <p class="w-9/12">{{species}}</p>
                        </div>
                        <div class="border-r border-l border-white flex items-center justify-center relative h-full p-2 min-height-56"   >
                            <img class="z-10 w-24 "  :src="regular?regular:''"/>
                            <img src="https://pngimg.com/uploads/pokeball/pokeball_PNG24.png" class=" absolute  p-1 top-1/6 opacity-30">
                        </div>
                        
                        <div class="flex flex-row border border-white h-2/12 justify-center p-1 rounded-b">
                            <p class="">{{name}} {{species}}</p>
                            
                        </div>
                    </div>
                </div>


                <div class="w-6/12 flex flex-col items-center gap-4 p-2 border-r border-t border-b">
                

                <div class="w-10/12 text-center justify-center items-center  ">
                    
                    <div class="flex flex-row items-center justify-between">
                        <h1 class=" font-bold">Typing: </h1>
                        <div>
                            <input v-model="secondType" type="checkbox" name="secondTypeCheck" id="secondTypeCheck">
                            Dual type
                        </div>
                    </div>
                    <div class="flex flex-row  items-center justify-center">
                        <div class="w-full  flex flex-row gap-2 justify-center text-black ">
                            <select class="border border-gray-500 rounded h-8  bg-gray-100  w-5/12 " name="typing" >
                            <option class="text-center" v-for="type in types" :value="type" :key="type">{{type}}</option>
                        </select>
                        <select  class="border border-gray-500 rounded h-8  bg-gray-100   w-5/12 " v-if="secondType" name="typing" >
                            <option v-for="type in types" :value="type" :key="type">{{type}}</option>
                        </select>
                        </div>
                    
                        
                    </div>
                </div>

                <div class="w-10/12 text-center">
                    <div class="flex flex-row items-center justify-between">
                        <h1 class=" font-bold">Gender ratio: </h1>
                        <div>
                            <input type="checkbox" name="genderless" v-model="genderless">
                            Genderless
                            
                        </div>
                    </div>
                    <div class=" flex flex-row justify-center" v-if="!genderless">
                        <p class="flex flex-row items-center gap-2 mr-2 ">Male<img class="h-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Male-s%C3%ADmbolo2.svg/199px-Male-s%C3%ADmbolo2.svg.png" alt="">: </p>
                        <div class="border border-gray-500 rounded h-8  bg-gray-100 flex flex-row items-center p-2 w-3/12 mr-6">
                            <input v-model="maleRatio"  @change="changeFemale(maleRatio)" type="number" max="100" min="0" step="0.1" name="maleRatio" id="maleRatio" class="overflow-hidden text-black text-center border-0 outline-none bg-transparent w-full" >
                            <span class="text-black">%</span>
                        </div>
                        <p class="flex flex-row items-center gap-2 mr-2 ">Female<img class="h-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/FemalePink.png/391px-FemalePink.png" alt="">: </p>
                        <div class="border border-gray-500 rounded h-8  bg-gray-100 flex flex-row items-center p-2 w-3/12">
                            <input v-model="femaleRatio"  @change="changeMale(femaleRatio)" type="number" max="100" min="0" step="0.1" name="femaleRatio" id="femaleRatio" class="overflow-hidden text-black text-center border-0 outline-none bg-transparent w-full" >
                            <span class="text-black">%</span>
                        </div>
                    </div>
                </div>


                <div class="w-10/12 text-center">
                     <div class="flex flex-row items-center justify-between ">
                        <h1 class=" font-bold">Egg group: </h1>
                        <div>
                            <input v-model="secondEgg" type="checkbox" name="secondEgg" id="secondEgg">
                            Dual egg group
                        </div>
                    </div>
                    <div class="flex flex-row  items-center justify-center ">
                       
                        <div class="w-full  flex flex-row gap-2 justify-center text-black">
                            <select class="border border-gray-500 rounded h-8  bg-gray-100   w-5/12 " name="eggGroup" >
                                <option v-for="group in eggGroups" :value="group" :key="group">{{group}}</option>
                            </select>
                            <select class="border border-gray-500 rounded h-8  bg-gray-100   w-5/12 " v-if="secondEgg" name="eggGroup" >
                                <option v-for="group in eggGroups" :value="group" :key="group">{{group}}</option>
                            </select>
                        </div>
                    
                        
                    </div>
                </div>
            </div>
    </div>
            <div class=" bg-red-900 rounded p-2 w-10/12 flex flex-row items-center ">
                <h1 class="text-2xl ">Sprites:</h1>
                <label class="ml-20" for="gender">Gender Difference: </label>
                <input @change="onChangeGender()" v-model="gender" type="checkbox" name="gender" id="gender">
            </div>
            <div class="flex flex-row justify-center items-center w-10/12 ">
                <div class=" w-9/12 flex flex-col justify-center items-center  ">
                    <div class="w-11/12 ">
                        <p class="float-left">Regular: </p>
                        <input class="w-full p-1 text-black text-center border-gray-500 rounded border h-8" type="text" id="regular" name="regular" value="" v-model="regular"><br>
                    </div>
                    <div  v-if='this.regular' class="flex flex-col w-1/12" style="height:100px;width:100px">
                        <img  :src="this.regular"/>
                    </div>
                </div>
                <div class=" w-9/12 flex flex-col justify-center items-center   ">
                    <div class="w-11/12 ">
                        <p class="float-left">Shiny: </p>
                        <input class="w-full text-black p-1 text-center border-gray-500 rounded border h-8" type="text" id="shiny" name="shiny" v-model="shiny"><br>
                    </div>
                    <div  v-if='this.shiny' class="flex flex-col w-1/12" style="height:100px;width:100px">
                        <img  :src="this.shiny"/>
                    </div>
                </div>
                <div v-if="gender" class=" w-9/12 flex flex-col justify-center items-center   ">
                    <div class="w-11/12 ">
                        <p class="float-left">Regular Female: </p>
                        <input class="w-full text-black p-1 text-center border-gray-500 rounded border h-8" type="text" id="regularF" name="regularF" v-model="regularF"><br>
                    </div>
                    <div  v-if='this.regularF' class="flex flex-col  w-1/12 h30 " style="height:100px;width:100px">
                        <img  :src="this.regularF"/>
                    </div>
                </div>
                <div v-if="gender" class=" w-9/12 flex flex-col justify-center items-center   ">
                    <div class="w-11/12 ">
                        <p class="float-left">Shiny Female: </p>
                        <input class="w-full text-black p-1 text-center border-gray-500 rounded border h-8" type="text" id="shinyF" name="shinyF" v-model="shinyF"><br>
                    </div>
                    <div  v-if='this.shinyF' class="flex flex-col " style="height:100px;width:100px">
                        <img  :src="this.shinyF"/>
                    </div>
                </div>
                
                
            </div>
            <div class="w-10/12 ">
                <div class="bg-red-900 rounded p-2 w-full flex flex-row items-center justify-between mb-4">
                    <h1 class="text-2xl ">Moves:</h1>
                    <button  @click="addGame()" type="button" class="border border-black  rounded p-2 bg-blue-300 text-black font-bold">Add game</button>        
                </div>
                <div>
                    <component v-for="component in gamemoves" :is="component.component" :key="component.id" @removeGame="removeGame(component.id)"></component>
                </div>
                
            </div>
            
            
            


        </form>
    </div>
</template>

<script>
import GameMoveField from '../components/GameMoveField'

export default {
    name:"addpokemon",
    data(){ 
        return{
            id:'',
            species:'',
            name:'',
            genderless:false,
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
            gamemoves:[],
            componentId:0
        }
    },
    children:[GameMoveField],
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
           else{
               this.regularF = `https://livingdexapi.herokuapp.com/sprites/regular/${this.id}-f.png`
               this.shinyF = `https://livingdexapi.herokuapp.com/sprites/shiny/${this.id}-f.png`
           }
        },
        addGame(){
            this.gamemoves.push({id:this.componentId,component:GameMoveField});
            this.componentId +=1;
        },
        removeGame(id){
            const pos = this.gamemoves.map((e)=>{return e.id}).indexOf(id);
            this.gamemoves.splice(pos,1);             
        },
        populate(){
            this.regular = `https://livingdexapi.herokuapp.com/sprites/regular/${this.id}.png`
            this.shiny = `https://livingdexapi.herokuapp.com/sprites/shiny/${this.id}.png`
        }
    }
}
</script>
<style>
.background{
    background-image: "https://pngimg.com/uploads/pokeball/pokeball_PNG24.png";
    background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 5px;
}
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