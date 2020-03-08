<template>
	<div class="header">
		<router-link to="/news">News</router-link> |
		<router-link to="/ask">Ask</router-link> |
		<router-link to="/jobs">Jobs</router-link>
	</div>
</template>

<script>
export default {

}
</script>

<style>
.header {
    display:block;
    padding: 8px;
    color:#fff;
    background:#42b883;
}
.header .router-link-exact-active {
	color: #35495e;
}
.header a {
	color: #fff;
}
</style>