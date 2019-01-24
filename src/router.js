import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewFollowup from './views/NewFollowup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add',
      name: 'add',
      component: NewFollowup
      
    }
  ]
})
