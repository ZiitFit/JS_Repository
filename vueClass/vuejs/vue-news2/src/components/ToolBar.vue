<template>
	<div class="header">
		<router-link to="/news">News</router-link> |
		<router-link to="/ask">Ask</router-link> |
		<router-link to="/jobs">Jobs</router-link> |
		<router-link to="/item">Item</router-link> |
		<router-link to="/user">User</router-link>
	</div>
</template>


<style scoped>
.header{
	display:flex;
	padding:8px;
	background-color:#42b883;
	color:#fff;
}
.header .router-link-exact-active{
	color:#35495e;
}
.header a{
	margin: 0 5px;
	color:#fff;
}
</style>