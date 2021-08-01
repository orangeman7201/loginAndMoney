import Vue from 'vue'
import App from './App.vue'
import Login from './components/Login.vue';
import store from './store';
import router from './router';
import Firebase from "./firebase" //追加


Firebase.init();

Vue.config.productionTip = false
Vue.component('Login', Login);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
