import Vue from 'vue';

import one from './view/one.vue';
import router from './route.js' 

Vue.config.productionTip = false;


import './assets/reset.css';



new Vue({
  render: h => h(one),
  router,
}).$mount('#app')
