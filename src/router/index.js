import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/profile",
        name: "Profile",
        component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
      },
      {
        path: "/works",
        name: "Works",
        component: () => import(/* webpackChunkName: "works" */ '../views/Works.vue'),
      },
      {
        path: "/skills",
        name: "Skills",
        component: () => import(/* webpackChunkName: "skills" */ '../views/Skills.vue'),
      },
      {
        path: "/contact",
        name: "Contact",
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
