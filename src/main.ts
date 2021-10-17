import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import vuetify from  '@/plugins/vuetify'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store, // eqaul js es6 >> store : store
  render: h => h(App)
}).$mount('#app')
