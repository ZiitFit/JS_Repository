<template>
	<div>
		<p v-for="item in this.$store.state.ask" v-bind:key="item.id">{{ item.title }}</p>
	</div>
</template>

<script>

export default {
	// data() {
	// 	return {
	// 		ask: []
	// 	}
	// },
	created() {
		this.$store.dispatch('FETCH_ASK');

		// fetchAskList()
		// 	.then(response => this.ask = response.data)
		// 	.catch(error => console.log(error))
	}
}
</script>

<style>

</style>