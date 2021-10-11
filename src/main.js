import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  async beforeCreate() {
    await this.$store.dispatch('security/initialize')
  },
  render: h => h(App)
}).$mount('#app')