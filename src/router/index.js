import Vue from 'vue'
import Router from 'vue-router'
import AppContainer from '@/components/AppContainer'
import AppLogin from '@/components/AppLogin'
import AppAbout from '@/components/AppAbout'
import AppHome from '@/components/AppHome'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppContainer',
      component: AppContainer,
      children: [
        {
          path: '/Login',
          name: 'AppLogin',
          component: AppLogin
        },
        {
          path: '/about',
          name: 'AppAbout',
          component: AppAbout
        },
        {
          path: '/',
          name: 'AppHome',
          component: AppHome
        }
      ]
    }
  ]
})
