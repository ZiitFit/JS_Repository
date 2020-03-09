<template>
	<div>
		<p v-for="item in news" v-bind:key="item.id">{{ item.title }}</p>
	</div>
</template>

<script>
import { fetchNewList } from '../api/index.js';

export default {
	data() {
		return {
			news: []
		}
	},
	created() {
		fetchNewList()
			.then(response => this.news = response.data)
			.catch(error => console.log(error))
	}
}
</script>

<style>

</style>