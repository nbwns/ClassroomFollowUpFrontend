import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NewFollowup from './views/NewFollowup.vue'
import Callback from '@/views/Callback.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history', // enable history mode
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
      
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback
    }
  ]
})

// very basic "setup" of a global guard
router.beforeEach((to, from, next) => {
  if(to.name == 'callback') { // check if "to"-route is "callback" and allow access
    next()
  } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
    next()
  } else { // trigger auth0 login
    router.app.$auth.login()
  }
})

export default router
