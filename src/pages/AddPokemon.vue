<template>
    <div>
        <h1 class="text-3xl">Add Pokemon</h1>

        <form class="bg-blue-300 w-full p-10" >
            <div class="flex flex-row  justify-center w-full gap-10">
                <div class="w-4/12 bg-red-500">
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
            <div class="flex flex-row items-center">
                <h1 class="text-2xl ">Sprites:</h1>
                <label class="ml-20" for="gender">Gender Difference: </label>
                <input v-model="gender" type="checkbox" name="gender" id="gender">
            </div>
            <div class="flex flex-col justify-center items-center">
                <div class=" w-10/12 justify-center items-center ">
                    <p class="float-left">Regular: </p>
                    <input class=" w-full p-1 text-center border-gray-500 rounded border h-8" type="text" id="regular" name="regular"><br>
                </div>
                <div class=" w-10/12 justify-center items-center ">
                    <p class="float-left">Shiny: </p>
                    <input class=" w-full p-1 text-center border-gray-500 rounded border h-8" type="text" id="shiny" name="shiny">
                </div>
                
                
                <div v-if="gender"  class=" w-10/12 justify-center items-center ">
                    <p class="float-left" >Regular Female: </p>
                    <input class=" w-full p-1 text-center border-gray-500 rounded border h-8" type="text" id="regularF" name="regularF">
                </div> 
                <div v-if="gender" class=" w-10/12 justify-center items-center ">
                    <p class="float-left" >Shiny Female: </p>
                    <input class=" w-full p-1 text-center border-gray-500 rounded border h-8" type="text" id="shinyF" name="shinyF">
                </div>
                
            </div>
            <h1>Gender ratio: </h1>
            <label for="maleRatio">Male:</label>
            <span><input v-model="maleRatio" @change="changeFemale(maleRatio)" name="maleRatio" id="maleRatio">%</span>
            
            <label for="femaleRatio">Female:</label>
            <input v-model="femaleRatio" @change="changeMale(femaleRatio)" name="femaleRatio" id="femaleRatio"><br>
            <label for="secondType">Dual type: </label>
            <input v-model="secondType" type="checkbox" name="secondType" id="secondType">
            <select name="firstType" id="firstType">
                <option v-for="type in types" :value="type" :key="type">{{type}}</option>
            </select>
            <select v-if="secondType" name="secondType" id="secondType">
                <option v-for="type in types" :value="type" :key="type">{{type}}</option>
            </select><br>

            <label for="secondEgg">Dual egg group: </label>
            <input v-model="secondEgg" type="checkbox" name="secondEgg" id="secondEgg">
            <select name="firstEgg" id="firstEgg">
                <option v-for="group in eggGroups" :value="group" :key="group">{{group}}</option>
            </select>
            <select v-if="secondEgg" name="secondEgg" id="secondEgg">
                <option v-for="group in eggGroups" :value="group" :key="group">{{group}}</option>
            </select>
        


        </form>
    </div>
</template>

<script>
export default {
    name:"addpokemon",
    data(){ 
        return{
            gender:false,
            secondType:false,
            secondEgg:false,
            maleRatio:0,
            femaleRatio:0,
            types:["Normal","Fire","Water","Grass","Electric","Rock","Ground","Psychic","Bug","Flying","Dragon","Fairy","Ice","Steel","Dark","Poison","Ghost","Fighting"],
            eggGroups:["Amorphous","Bug","Dragon","Fairy","Field","Flying","Grass","Human-Like","Mineral","Monster","Water 1","Water 2","Water 3"]
        }
    },
    methods:{
        changeFemale(maleRatio){
            this.femaleRatio = 100 - maleRatio;
        },
        changeMale(femaleRatio){
            this.maleRatio = 100 - femaleRatio;
        }
    }
}
</script>
