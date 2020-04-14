<template>
	<div>
		<p v-for="ask in this.$store.state.ask" :key="ask.id">{{ ask.title }}</p>
	</div>
</template>

<script>

export default {
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