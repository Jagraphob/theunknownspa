import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import GAuth from 'vue-google-oauth2'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
const gauthOption = {
  clientId: '157562859214-o61u63pip6impva21nmv4ei5t14q74at.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)
Vue.use(Buefy)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
