import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Artists from '@/components/Artists'
import Artist from '@/components/Artist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/artists/',
      name: 'Artists',
      component: Artists
      // children: [
      //   {
      //     path: '/:mbid',
      //     component: Artist,
      //     name: 'Artist'
      //   }
      // ]
    },
    {
      path: '/artists/:mbid',
      component: Artist,
      name: 'Artist'
    }
  ]
})
