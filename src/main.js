import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'

import auth from '@/auth'
Vue.use(auth)

Vue.filter('formatDate', function(value, format) {
  if (value) {
    console.log(value)
    return moment(String(value)).format(format);
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
