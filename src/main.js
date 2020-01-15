import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { QuickVue } from "@bcwdev/quickvue";
import { Auth0Plugin } from "./Services/AuthService";
import { domain, clientId, audience } from "./authconfig";
import "./components.js";

Vue.use(QuickVue);
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false;

// @ts-ignore
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
