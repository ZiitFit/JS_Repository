<template>
	<div>
		<p v-for="job in jobs" v-bind:key="job.id"> {{ job.title }} </p>
	</div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'

export default {
	data() {
		return {
			jobs: []
		}
	},
	created() {
		var vm = this;
		fetchJobsList()
			.then(function(response) {
				vm.jobs = response.data
			})
			.catch(function(error) {
				console.log(error)
			})
	}
}
</script>

<style>

</style>