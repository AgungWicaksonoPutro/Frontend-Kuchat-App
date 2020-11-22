import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth/Index.vue'
import Main from '../views/Main/Index.vue'
import Login from '../views/Auth/Login/Login.vue'
import Register from '../views/Auth/Register/Register.vue'
import ForgotPassword from '../views/Auth/ForgotPwd/ForgotPassword.vue'
import Chat from '../views/Main/Chat/Chat.vue'
import Profiles from '../views/Main/Profiles/Profile.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path: 'forgot-password',
        name: 'Forgot-Password',
        component: ForgotPassword
      }
    ]
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'chat',
        name: 'Chat',
        component: Chat,
        meta: { requiresAuth: true }
      },
      {
        path: 'profiles',
        name: 'Profiles',
        component: Profiles,
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/auth/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/main/chat'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
