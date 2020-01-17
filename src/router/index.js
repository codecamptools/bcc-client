//@ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";
import Public from "../views/Public.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Sponsor from "../views/Sponsor.vue";
import Volunteer from "../views/Volunteer.vue";
import Login from "../views/Login.vue";
import dashboardRoutes from "../views/Dashboard/dashboard-routes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Public,
    children: [
      {
        path: "",
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
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  dashboardRoutes,
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
