import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      beforeEnter: (to, from, next)=>{
        const valid = localStorage.getItem("token")
        if (valid){
          next()
        }else{
          next({
            name : 'home'
          })
        }
      },
      component: () => import('../views/Bus.vue')
    }
  ]
})

export default router
