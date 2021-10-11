import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import {Api} from "../../api/api";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/routines',
    name: 'Routines',
    component: () => import(/* webpackChunkName: "routines" */ '../views/Routines.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import(/* webpackChunkName: "explore" */ '../views/Explore.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "help" */ '../views/Help.vue'),
  },
  {
    path: '/routines/:slug',
    name: 'RoutineDetails',
    component: () => import(/* webpackChunkName: "details" */ '../views/RoutineDetails.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "details" */ '../views/Profile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: "Register" */ '../views/forgotPassword.vue')
  },
  {
    path: '/forgotUser',
    name: 'ForgotUser',
    component: () => import(/* webpackChunkName: "Register" */ '../views/forgotUser.vue')
  },
  {
    path:'/CurrentRoutine',
    name: 'CurrentRoutine',
    component: () => import(/* webpackChunkName: "Register" */ '../views/CurrentRoutine.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  linkExactActiveClass: "my-active-link",
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (Api.token) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

export default router

