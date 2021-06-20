import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false

new Vue({
  router,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  render: (h) => h(App),
}).$mount('#app')
