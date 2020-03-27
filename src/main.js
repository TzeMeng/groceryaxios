import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Routes from './routes.js'


//Step 1 -- Import and use VueRouter
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false



//Step 3 - Register Routes
const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')
