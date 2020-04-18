<template>
	<div>
		<p v-for="(user, idx) in this.$store.state.news" :key="idx">
			<a v-bind:href="user.url">
				{{ user.title }}
			</a>
			<span>
				{{ user.time_ago }} by
				<!-- <router-link v-bind:to="'/user' + user.user">{{ user.user }}</router-link> -->
				<router-link v-bind:to="`/user/${user.user}`">{{ user.user }}</router-link>
			</span>
		</p>
	</div>
</template>

<script>

export default {
	// data() {
	// 	return {
	// 		users: []
	// 	}
	// },
	created() {
		this.$store.dispatch('FETCH_NEWS');
		// fetchNewsList()
		// 	.then(response => this.users = response.data)
		// 	.catch(error => console.log(error))
	}
}
</script>

<style>

</style>