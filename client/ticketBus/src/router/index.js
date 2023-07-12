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
    },
    {
      path : "/:id",
      name : "BusDetail",
      component : () => import('../views/DetailBus.vue')
    },
    {
      path : "/admin",
      name : "admin",
      component : () => import("../views/AdminView.vue")
    },
    {
      path : "/admin/bus",
      name  : "adminBus",
      beforeEnter: (to, from, next)=>{
        const valid = localStorage.getItem("admin_token")
        if (valid){
          next()
        }else{
          next({
            name : 'home'
          })
        }
      },
      component : () => import("../views/Admin.vue")
    },
    {
      path : "/admin/bus/:id",
      name  : "adminBusId",
      beforeEnter: (to, from, next)=>{
        const valid = localStorage.getItem("admin_token")
        if (valid){
          next()
        }else{
          next({
            name : 'admin'
          })
        }
      },
      component : () => import("../views/AdminUpdate.vue")
    },
    {
      path : "/admin/pending",
      name  : "adminPending",
      beforeEnter: (to, from, next)=>{
        const valid = localStorage.getItem("admin_token")
        if (valid){
          next()
        }else{
          next({
            name : 'admin'
          })
        }
      },
      component : () => import("../views/AdminPending.vue")
    }
  ]
})

export default router
