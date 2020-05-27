import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '../store/store'
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Signin',
    component: () => import('../components/Signin')
  },
  {
    path: '/info/:login',
    name: 'UserDetail',
    component: () => import('../components/UserDetail')
  },
  {
    path: '/list',
    name: 'UsersList',
    component: () => import('../components/UsersList')
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'Signin' && !store.state.auth) next({ name: 'Signin' })
    else next()
})
export default router

