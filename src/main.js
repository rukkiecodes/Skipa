import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from './plugins/vuetify';
import Swal from 'sweetalert2';
import VueFirestore from 'vue-firestore';
import { fb } from "./firebaseConfig";

Vue.use(VueFirestore)

window.Swal = Swal;

Vue.config.productionTip = false;

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})


let app = '';

fb.auth().onAuthStateChanged(user => {
  if(!app){
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount("#app");
