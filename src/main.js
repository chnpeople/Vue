import Vue from 'vue'
import App from './App.vue'

//导包
import VueRouter from 'vue-router'

import Results from './components/results.vue'
import Play from './components/play.vue'

Vue.use(VueRouter)


//路由规则
const routes = [
  {path:'/results/:music',component: Results},
  {path:'/play/:id',component: Play}
]


//实例化router
const router = new VueRouter({
      routes,
      linkActiveClass:'active'
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
