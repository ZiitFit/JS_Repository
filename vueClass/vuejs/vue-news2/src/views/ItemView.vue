<template>
	<div>
		<!-- <p>{{ userAnswer.title }}</p> -->
		<section>
			<div class="user-container">
				<div>
					<i class="fas fa-user"></i>
				</div>
				<div class="user-description">
					<router-link :to="`/user/${fetchedItem.user}`">
						{{ fetchedItem.user }}
					</router-link>
					<div class="time">
						{{ fetchedItem.time_ago }}
					</div>
				</div>
			</div>
			<h2>{{ fetchedItem.title }}</h2>
		</section>
		<section>
			<div v-html="fetchedItem.content"></div>
		</section>
		<!-- <p>{{ fetchedItem.title }}</p>
		<div>
			{{ fetchedItem.content }}
		</div> -->
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		// userAnswer() {
		// 	return this.$store.state.item;
		// },
		...mapGetters(['fetchedItem']),
	},
	created() {
		console.log(this.$route.params.id)
		const userAnswer = this.$route.params.id;
		this.$store.dispatch('FETCH_ITEM', userAnswer)
	}
}
</script>

<style scoped>
.user-container{
	display:flex;
	padding:16px;
	align-items:center;
}
.fa-user{
	font-size:40px;
}
.user-description{
	padding-left:10px;
}
.time{
	font-size:13px;
}
</style>