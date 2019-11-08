import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Dashboard from "./views/Dashboard.vue";
import Drive from "./views/Drive.vue";
import AboutSkippa from "./views/AboutSkippa.vue";
import Profile from "./views/Profile.vue";
import { fb } from './firebaseConfig';

Vue.use(Router);

const router = new Router({
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
      meta:{requiresAuth: true},
      children: [
        {
          path: "drive",
          name: "drive",
          component: Drive
        },
        {
          path: "aboutSkippa",
          name: "aboutSkippa",
          component: AboutSkippa
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if(requiresAuth && !currentUser){
    next('/')
  }else if(requiresAuth && currentUser){
    next()
  }else{
    next()
  }
})

export default router;

// import Vue from "vue";
// import Router from "vue-router";
// import Home from "./views/Home.vue";
// import About from "./views/About.vue"
// import Dashboard from "./views/Dashboard.vue"
// import Drive from "./views/Drive.vue"
// import AboutSkippa from "./views/AboutSkippa.vue"
// import Profile from "./views/Profile.vue"

// Vue.use(Router);

// export default new Router({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: Home
//     },
//     {
//       path: "/dashboard",
//       name: "dashboard",
//       component: Dashboard,
//       children: [
//         {
//           path: "drive",
//           name: "drive",
//           component: Drive
//         },
//         {
//           path: "aboutSkippa",
//           name: "aboutSkippa",
//           component: AboutSkippa
//         },
//         {
//           path: "profile",
//           name: "profile",
//           component: Profile
//         }
//       ]
//     },
//     {
//       path: "/about",
//       name: "about",
//       component: About
//     },
//   ]
// });
