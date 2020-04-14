<template>
	<div>
		<p v-for="ask in fetchedAsk" :key="ask.id">{{ ask.title }}</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			fetchedAsk : 'fetchedAsk'
		})
		// store/index.js getters에 있는 fetchedAsk를 그대로 사용하고 싶으면 배열로
		// ...mapGetters([
		// 	'fetchedAsk'
		// ]),

		// #2
		// ...mapState({
		// 	fetchedAsk: state => state.ask
		// })

		// #1
		// ask() {
		// 	return this.$store.state.ask;
		// }
	},
	created() {
		this.$store.dispatch('FETCH_ASK');
		// fetchAskList()
		// 	.then(response => this.asks = response.data)
		// 	.catch(error => console.log(error))
	}
}
</script>

<style>

</style>