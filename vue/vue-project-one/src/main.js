import Vue from 'vue'
import App from './App.vue'
import one from './components/one.vue';



Vue.config.productionTip = false

new Vue({
  render: h => h(one),
}).$mount('#app')
