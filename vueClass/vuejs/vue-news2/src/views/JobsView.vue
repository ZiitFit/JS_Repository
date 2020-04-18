<template>
	<div>
		<p v-for="job in this.$store.state.jobs" v-bind:key="job.id">
			<a :href="job.url">
				{{ job.title }}
			</a>
			<span>{{ job.time_ago }}, {{ job.domain }}</span>
		</p>
	</div>
</template>

<script>

export default {
	created() {
		this.$store.dispatch('FETCH_JOBS');
		// fetchJobsList()
		// 	.then(response => this.jobs = response.data)
		// 	.catch(error => console.log(error))
	}
}
</script>

<style>

</style>