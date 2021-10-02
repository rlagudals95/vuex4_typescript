import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'

Vue.config.productionTip = false

new Vue({
  router,
  store, // eqaul js es6 >> store : store
  render: h => h(App)
}).$mount('#app')