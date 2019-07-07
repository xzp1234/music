import Vue from 'vue'
import App from './App.vue'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.css'
import './assets/css/public.less'
import './assets/css/reset.less'
import router from './router'
import store from './store'
import 'lib-flexible'

NutUI.install(Vue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
