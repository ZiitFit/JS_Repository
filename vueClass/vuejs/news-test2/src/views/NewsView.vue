<template>
	<div>
		<p v-for="item in this.$store.state.news" v-bind:key="item.id">{{ item.title }}</p>
	</div>
</template>

<script>


export default {
	// data() {
	// 	return {
	// 		news: []
	// 	}
	// },
	created() {
		this.$store.dispatch('FETCH_NEWS');

		// fetchNewList()
		// 	.then(response => this.news = response.data)
		// 	.catch(error => console.log(error))
	}
}
</script>

<style>

</style>