import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
import Home from './pages/Home'
import About from './pages/About'

Vue.use(Router)
Vue.use(VueMeta, {
	keyName: 'page'
})

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		}
	]
})
