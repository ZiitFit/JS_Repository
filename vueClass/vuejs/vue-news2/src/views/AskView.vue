<template>
	<div>
		<list-item></list-item>
		<!-- <ul class="news-list">
			<li v-for="ask in fetchedAsk" :key="ask.id" class="post">
				<div class="points">
					{{ ask.points}}
				</div>
				<div>
					<p class="news-title">
						<router-link :to="`item/${ask.id}`">
							{{ ask.title }}
						</router-link>
					</p>
					<small class="link-text">
						{{ ask.time_ago }} by
						<router-link v-bind:to="`/user/${ask.user}`" class="link-text">{{ ask.user }}</router-link>
					</small>
				</div>
			</li>
		</ul> -->
	</div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
// import { mapGetters } from 'vuex';

export default {
	components: {
		ListItem
	}
	// computed: {
	// 	...mapGetters({
	// 		fetchedAsk : 'fetchedAsk'
	// 	})
	// 	// store/index.js getters에 있는 fetchedAsk를 그대로 사용하고 싶으면 배열로
	// 	// ...mapGetters([
	// 	// 	'fetchedAsk'
	// 	// ]),

	// 	// #2
	// 	// ...mapState({
	// 	// 	fetchedAsk: state => state.ask
	// 	// })

	// 	// #1
	// 	// ask() {
	// 	// 	return this.$store.state.ask;
	// 	// }
	// },
	// created() {
	// 	this.$store.dispatch('FETCH_ASK');
	// 	// fetchAskList()
	// 	// 	.then(response => this.asks = response.data)
	// 	// 	.catch(error => console.log(error))
	// }
}
</script>