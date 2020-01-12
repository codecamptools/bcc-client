import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Sponsor from "../views/Sponsor.vue";
import Volunteer from "../views/Volunteer.vue";
import Manager from "../views/Volunteer.vue";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/sponsor",
    name: "sponsor",
    component: Sponsor
  },
  {
    path: "/volunteer",
    name: "volunteer",
    component: Volunteer
  },
  {
    path: "/dashboard",
    component: Manager,
    async beforeEnter(to, from, next) {
      // let user = await AuthService.authenticate();
      // if (!user) {
      //   return next("login");
      // }
      // next();
    },
    children: [
      {
        path: "",
        component: Dashboard
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
