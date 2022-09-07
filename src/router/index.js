import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from "../views/Profile.vue";
import Works from "../views/Works.vue";
import Skills from "../views/Skills.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/works",
    name: "Works",
    component: Works,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
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
