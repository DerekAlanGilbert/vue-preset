import Vue from 'vue'
import App from './App.vue'
import router from './views/router'
import store from './state/store'
import './progressive/registerServiceWorker'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
