//@ts-nocheck
import { authGuard } from "@bcwdev/auth0-vue";
import Manager from "./Manager.vue";
import Dashboard from "./Dashboard.vue";
import Profile from "./Profile.vue";

export const USER_NAVIGATION = [
  {
    name: "profile",
    path: "profile",
    component: Profile
  },
  {
    name: "schedule",
    path: "schedule",
    component: Profile
  },
  {
    name: "notes",
    path: "notes",
    component: Profile
  },
  {
    name: "feedback",
    path: "feedback",
    component: Profile
  }
];
export const EVENT_NAVIGATION = [
  {
    name: "events",
    path: "events",
    component: Profile
  },
  {
    name: "sponsors",
    path: "sponsors",
    component: Profile
  }
];

export default {
  path: "",
  component: Manager,
  beforeEnter: authGuard,
  children: [
    {
      path: "/dashboard",
      component: Dashboard,
      children: [
        ...USER_NAVIGATION,
        ...EVENT_NAVIGATION,
        { path: "", redirect: "profile" },
        { path: "*", redirect: "profile" }
      ]
    }
  ]
};
