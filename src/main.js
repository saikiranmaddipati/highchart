import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './quasar'
import HighchartsVue from 'highcharts-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Highcharts from 'highcharts'
import HighchartsMapModule from 'highcharts/modules/map'
import mapData from '@highcharts/map-collection/custom/world.geo.json'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(HighchartsVue)
HighchartsMapModule(Highcharts)
Highcharts.maps.myMapName = mapData

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
