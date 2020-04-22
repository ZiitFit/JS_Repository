<template>
	<div>
		<p>{{ userAnswer.id }}</p>
	</div>
</template>

<script>
export default {
	computed: {
		userAnswer() {
			return this.$store.state.item;
		},
	},
	created() {
		console.log(this.$route.params.id)
		const userAnswer = this.$route.params.id;
		this.$store.dispatch('FETCH_ITEM', userAnswer)
	}
}
</script>

<style>

</style>