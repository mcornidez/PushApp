import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import store from "@/store";

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
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: "Register" */ '../views/forgotPassword.vue')
  },
  {
    path: '/forgotMail',
    name: 'ForgotMail',
    component: () => import(/* webpackChunkName: "Register" */ '../views/forgotMail.vue')
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
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!store.user) {
      next({ name: "Login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
