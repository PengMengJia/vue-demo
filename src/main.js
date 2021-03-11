import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Register from "./components/register"

Register.registerComponets()
Vue.config.productionTip = false;
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
