import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
// @ts-ignore
import aws_exports from './aws-exports';

Vue.config.productionTip = false;
Amplify.configure(aws_exports);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
