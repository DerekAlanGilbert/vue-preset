<template>
	<Layout>
		<div class="home">
			<h1>
				This is a home page, welcome
				<span>{{ value }}</span>
			</h1>
		</div>
	</Layout>
</template>

<script>
import Layout from '../layouts/Main'
import { mapGetters } from 'vuex'
export default {
	page() {
		return {
			title: 'Home',
			meta: [
				{
					name: 'description',
					content: 'A description for the home page'
				}
			]
		}
	},
	name: 'home',
	computed: {
		...mapGetters(['value'])
	},
	components: {
		Layout
	}
}
</script>
