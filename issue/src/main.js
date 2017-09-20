import Vue from 'vue'
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import axios from 'axios';
import format from 'date-fns/format'
Vue.prototype.$http = axios;
Vue.prototype.address = ''
Vue.prototype.format = format;
import router from './router/index'
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: h => h(App)

})