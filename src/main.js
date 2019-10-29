import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from './plugins/vuetify';
import Swal from 'sweetalert2';
import VueFirestore from 'vue-firestore';

Vue.use(VueFirestore)

window.Swal = Swal;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
