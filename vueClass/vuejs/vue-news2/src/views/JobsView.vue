<template>
	<div>
		<ul class="news-list">
			<li v-for="job in this.$store.state.jobs" v-bind:key="job.id" class="post">
				<!-- 포인트 영역 -->
				<div class="points">
					{{ job.points || 0 }}
				</div>
				<!-- 기타 정보영역 -->
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
		</ul>
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