import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import Profile from "./views/Profile.vue";
import Library from "./views/Library.vue";
import Photos from "./views/Photos.vue"
import Videos from "./views/Videos.vue"
import About from "./views/About.vue"
import Logout from "./views/Logout.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "library",
          name: "library",
          component: Library
        },
        {
          path: "photos",
          name: "photos",
          component: Photos
        },
        {
          path: "videos",
          name: "videos",
          component: Videos
        },
        {
          path: "about",
          name: "about",
          component: About
        },
        {
          path: "logout",
          name: "logout",
          component: Logout
        },
      ]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
