export default {
	state: {
		value: 'User :)'
	},
	getters: {
		value: (state) => state.value
	},
	mutations: {
		UPDATE_VALUE(state, payload) {
			state.value = payload
		}
	},
	actions: {
		updateValue({ commit }, payload) {
			commit('UPDATE_VALUE', payload)
		}
	}
}
