import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/homepage',
    name: 'homepage',
    redirect: "/homepage/welcome",
    children: [{
      path: 'welcome',
      name: 'welcome',
      component: () => import('../components/homePage/welcome.vue'),
    },
    {
      path: 'element',
      name: 'element',
      component: () => import('../components/homePage/PC/elementUi.vue'),
    },
    {
      path: 'vant',
      name: 'vant',
      component: () => import('../components/homePage/mobileLnternet/vantUi.vue'),
    },
    //跑马灯
    {
      path: 'marquee',
      name: 'marquee',
      component: () => import('../components/homePage/module/marquee.vue'),
    }
    ],
    component: () => import('../components/homePage/index.vue'),

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
