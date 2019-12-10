import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { QuickVue } from "@bcwdev/quickvue";
// import "register-service-worker.js";
import "./components.js";

Vue.use(QuickVue);
Vue.config.productionTip = false;

// @ts-ignore
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
