<template>
	<div>
		<list-item></list-item>
		<!-- <ul class="news-list">
			<li v-for="job in this.$store.state.jobs" v-bind:key="job.id" class="post">
				<div class="points">
					{{ job.points || 0 }}
				</div>
				<div>
					<p class="news-title">
						<a :href="job.url">
							{{ job.title }}
						</a>
					</p>
					<small class="link-text">
						{{ job.time_ago }} by
						<a :href="job.url">
							{{ job.domain }}
						</a>
					</small>
				</div>
			</li>
		</ul> -->
	</div>
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
	components: {
		ListItem,
	}
	// created() {
	// 	this.$store.dispatch('FETCH_JOBS');
	// 	// fetchJobsList()
	// 	// 	.then(response => this.jobs = response.data)
	// 	// 	.catch(error => console.log(error))
	// }
}
</script>
