import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import storeConfig from './store'

import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter)

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