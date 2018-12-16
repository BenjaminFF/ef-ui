// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import efButton from '../lib/button'
import efTheme from '../packages/ef-theme/lib/index.css'

Vue.config.productionTip = false

Vue.use(efButton);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
