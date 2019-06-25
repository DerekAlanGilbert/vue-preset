import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/pages/Home'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Home.vue', () => {
	let getters
	let store

	beforeEach(() => {
		getters = {
			value: () => 'user'
		}
		store = new Vuex.Store({
			getters
		})
	})
	it('Renders "store.getters.value" in second span tag', () => {
		const wrapper = shallowMount(Home, { store, localVue })
		const span = wrapper.findAll('span').at(0)
		expect(span.text()).toBe(getters.value().toString())
	})
})
