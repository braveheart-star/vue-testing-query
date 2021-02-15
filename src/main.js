import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import router from './router';
import ApiService from './common/api.service';

Vue.config.productionTip = false;
ApiService.init();
new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
