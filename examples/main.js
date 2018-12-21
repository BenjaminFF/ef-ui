// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import efui from '../packages/index'
import '../packages/ef-theme/lib/index.css'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-resize/dist/vue-resize.css'
import VueResize from 'vue-resize'



Vue.config.productionTip = false

Vue.use(efui);
Vue.use(element)
Vue.use(VueResize)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
