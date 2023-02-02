import Vue from 'vue'
import App from './App.vue'
import svgIcon from '@/components/icon/svg-icon'
import '@/components/icon/index'
Vue.config.productionTip = false
Vue.component('svgIcon', svgIcon)
new Vue({
  render: h => h(App),
}).$mount('#app')
