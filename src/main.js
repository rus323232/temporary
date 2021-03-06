import Vue from 'vue';
import axios from 'axios';
import Vuebar from 'vuebar';
import VueCarousel from 'vue-carousel';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Vuebar);
Vue.use(VueCarousel);
Vue.$axios = axios;
Object.defineProperty(Vue.prototype, '$axios', {
  get() {
    return axios;
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
