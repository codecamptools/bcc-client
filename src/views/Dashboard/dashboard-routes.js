//@ts-nocheck
import { authGuard } from "@bcwdev/auth0-vue";
import Manager from "./Manager.vue";
import Dashboard from "./Dashboard.vue";
import Profile from "./Profile.vue";
import Events from "./Events.vue";
import Sponsors from "./Sponsors.vue";
import Notes from "./Notes.vue";
import Feedback from "./Feedback.vue";
import Schedule from "./Schedule.vue";

export const USER_NAVIGATION = [
  {
    name: "profile",
    path: "profile",
    component: Profile
  },
  {
    name: "schedule",
    path: "schedule",
    component: Schedule
  },
  // {
  //   name: "notes",
  //   path: "notes",
  //   component: Notes
  // },
  {
    name: "feedback",
    path: "feedback",
    component: Feedback
  }
];
export const EVENT_NAVIGATION = [
  {
    name: "events",
    path: "events",
    component: Events
  },
  {
    name: "sponsors",
    path: "sponsors",
    component: Sponsors
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
