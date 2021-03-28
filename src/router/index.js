import Vue from 'vue';
import VueRouter from 'vue-router'

import Login from '../pages/Login.vue'
import AddPokemon from '../pages/AddPokemon.vue'
import AddPokemonVGC from '../pages/AddPokemonVGC.vue'
import PokedexDatabase from '../pages/DatabasePokedex.vue'
import VGCDatabase from '../pages/DatabaseVGC.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path:'/login',
      component:Login
    },
    {
        path:'/add-pokemon',
        component: AddPokemon

    },
    {
        path:'/add-pokemon-vgc',
        component: AddPokemonVGC

    },
    {
        path:'/pokedex-database',
        component: PokedexDatabase

    },
    {
        path:'/vgc-database',
        component: VGCDatabase

    }
  ]
})

export default router;