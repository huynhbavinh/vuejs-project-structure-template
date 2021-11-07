import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import storeConfig from './store'
import Vuex from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAnimXYZ from '@animxyz/vue'
import '@animxyz/core' // Import css here if you haven't elsewhere


library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAnimXYZ)


const router = new VueRouter({
    mode: 'history',
    routes,
});

const store = new Vuex.Store(storeConfig)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')