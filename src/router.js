import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue"
import Dashboard from "./views/Dashboard.vue"
import Drive from "./views/Drive.vue"
import Photo from "./views/Photo"
import Video from "./views/Video.vue"
import AboutSkippa from "./views/AboutSkippa.vue"

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
          path: "drive",
          name: "drive",
          component: Drive
        },
        {
          path: "photo",
          name: "photo",
          component: Photo
        },
        {
          path: "video",
          name: "video",
          component: Video
        },
        {
          path: "aboutSkippa",
          name: "aboutSkippa",
          component: AboutSkippa
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
  ]
});
