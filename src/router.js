import Vue from 'vue'
import Router from 'vue-router'
import Listen from './views/listen.vue'
import Sing from './views/sing.vue'
import MyCenter from './views/myCenter.vue'
import Login from './views/login.vue'
import contain from './views/contain.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: 'login'
    },
    {
      path: '/index',
      component: contain,
      children: [
        {
          path: '',
          redirect: "listen"
        },
        {
          path: '/index/listen',
          name: 'listen',
          component: Listen
        },
        {
          path: '/chat',
          name: 'chat',
          component: () => import(/* webpackChunkName: "about" */ './views/chat.vue')
        },
        {
          path: '/myCenter',
          name: 'myCenter',
          component: MyCenter
        },
        {
          path: '/sing',
          name: 'sing',
          component: Sing
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
