import Vue from 'vue'
import App from './App.vue'
import Login from './pages/Login.vue'
import VueRouter from 'vue-router'
import './assets/styles/index.css';

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path:'/login',
      component:Login
    }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
