<template>
	<div class="user-container">
		<div>
			<i class="fas fa-user"></i>
		</div>
		<div class="user-description">
			<div>{{ userInfo.id }}</div>
			<!-- <router-link :to="`/user/${userInfo.user}`">
				{{ userInfo.id }}
			</router-link> -->
			<div class="time">
				{{ userInfo.created }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		userInfo() {
			return this.$store.state.user;
		}
	},
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
</style>>

</style>