<template>
	<div class="home">
		<h1>
			This is a home page, welcome
			<span>{{ value }}</span>
		</h1>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'home',
	computed: {
		...mapGetters(['value'])
	},
	components: {}
}
</script>
