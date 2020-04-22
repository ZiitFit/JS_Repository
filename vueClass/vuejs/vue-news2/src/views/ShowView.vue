<template>
	<div>
		<p v-for="(show, idx) in fetchedShow" :key="idx">
			<router-link :to="`/item/${show.id}`">
				{{ show.title }}
			</router-link>
			<span>
				{{ show.time_ago }} by {{ show.user }}
			</span>
		</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			fetchedShow: 'fetchedShow'
		})
	},
	created() {
		this.$store.dispatch('FETCH_SHOW');
	}
}
</script>

<style>

</style>