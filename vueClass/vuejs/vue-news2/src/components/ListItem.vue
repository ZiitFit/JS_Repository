<template>
	<div>
		<ul class="news-list">
			<li v-for="item in listItems" :key="item.id" class="post">
				<!-- 포인트 영역 -->
				<div class="points">
					{{ item.points || 0 }}
				</div>
				<!-- 기타 정보영역 -->
				<div>
					<!-- 타이틀 영역 -->
					<p class="news-title">
						<template v-if="item.domain">
							<a v-bind:href="item.url">
								{{ item.title }}
							</a>
						</template>
						<template v-else>
							<router-link :to="`item/${item.id}`">
								{{ item.title }}
							</router-link>
						</template>
					</p>
					<small class="link-text">
						by
						<!-- <router-link v-bind:to="'/user' + user.user">{{ user.user }}</router-link> -->
						<router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
					</small>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	created() {
		// this.$store.dispatch('FETCH_NEWS');
		console.log(this.$route.path === '/news');
		const name = this.$route.name;
		if (name === 'news') {
			this.$store.dispatch('FETCH_NEWS');
		} else if (name === 'ask') {
			this.$store.dispatch('FETCH_ASK');
		}
		// jobs api 가 없어짐.. https://api.hnpwa.com/v0/jobs/1.json
		// else if (name === 'jobs') {
		// 	this.$store.dispatch('FETCH_JOBS');
		// }
	},
	computed: {
		listItems() {
			const name = this.$route.name;
			if (name === 'news') {
				return this.$store.state.news;
			} else if (name === 'ask') {
				return this.$store.state.ask;
			}
			// else if (name === 'jobs') {
			// 	return this.$store.state.jobs;
			// }
		}
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