import Vue from 'vue'
import App from './App.vue'
import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.css'
import './static/css/reset.less'
import './static/css/public.less'
import router from './router'
import store from './store'
import 'lib-flexible'
import './mock'
import Axios from './common/axios'

NutUI.install(Vue)
Vue.config.productionTip = false
Vue.prototype.$axios = Axios; 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
