import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import router from './router'
import axios from 'axios'

import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

Vue.config.productionTip = false


Vue.use(Avue)

const http = axios.create({
  baseURL: 'http://127.0.0.1:5000'
})
Vue.prototype.$httpajax = http
Vue.prototype.$http = http
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
