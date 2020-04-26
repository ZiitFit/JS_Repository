<template>
	<div>
		<ul class="news-list">
			<li v-for="ask in fetchedAsk" :key="ask.id" class="post">
				<!-- 포인트 영역 -->
				<div class="points">
					{{ ask.points}}
				</div>
				<!-- 기타 정보영역 -->
				<div>
					<p class="news-title">
						<router-link :to="`item/${ask.id}`">
							{{ ask.title }}
						</router-link>
					</p>
					<small class="link-text">
						{{ ask.time_ago }} by
						<!-- <router-link v-bind:to="'/user' + user.user">{{ user.user }}</router-link> -->
						<router-link v-bind:to="`/user/${ask.user}`" class="link-text">{{ ask.user }}</router-link>
					</small>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			fetchedAsk : 'fetchedAsk'
		})
		// store/index.js getters에 있는 fetchedAsk를 그대로 사용하고 싶으면 배열로
		// ...mapGetters([
		// 	'fetchedAsk'
		// ]),

		// #2
		// ...mapState({
		// 	fetchedAsk: state => state.ask
		// })

		// #1
		// ask() {
		// 	return this.$store.state.ask;
		// }
	},
	created() {
		this.$store.dispatch('FETCH_ASK');
		// fetchAskList()
		// 	.then(response => this.asks = response.data)
		// 	.catch(error => console.log(error))
	}
}
</script>

<style scoped>
.news-list{
	margin:0;
	padding:0;
}
.post{
	display:flex;
	border-bottom:1px solid #bbb;
	list-style:none;
	align-items:center
}
.points{
	display:flex;
	width:80px;
	height:60px;
	align-items:center;
	justify-content:center;
	color:#42b883;
}
.news-title{
	margin:0;
}
.link-text{
	color:#828282;
}
</style>