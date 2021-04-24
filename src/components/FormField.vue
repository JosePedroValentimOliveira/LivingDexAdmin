<template>
    <div name="form" class="flex flex-row  w-full justify-around  items-center bg-yellow-300 p-1 text-black rounded">
        <div class="text-center">
            <p>Form</p>
            <input v-model="form" @change="populate()" class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-50"  name="extraForms">
        </div>
        <div class="text-center">
            <p>Regular</p>
            <input class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-96" v-model="regular"  name="extraFormsRegular">
        </div>
         <div class="text-center" >
            <img class="w-16" :src="this.regular">
        </div>      
       
        <div class="text-center">
            <p>Shiny</p>
            <input class="border border-gray-500 rounded h-8  bg-gray-100 text-center w-96" v-model="shiny"  name="extraFormsShiny">
        </div>  
        <div class="text-center w-16" >
            <img  :src="this.shiny">
        </div>             
    </div>
</template>

<script>
export default {
    data(){
        return{
            regular:"",
            shiny:"",
            form:""
        }
    },
    props:['id'],
    methods:{
        populate(){
            console.log(this.id);
            this.regular = `https://livingdexapi.herokuapp.com/sprites/regular/${this.id}-${this.form.toLowerCase()}.png`
            this.shiny = `https://livingdexapi.herokuapp.com/sprites/shiny/${this.id}-${this.form.toLowerCase()}.png`
        }
    }
}
</script>