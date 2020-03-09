<template>
	<div>
		<p v-for="item in ask" v-bind:key="item.id">{{ item.title }}</p>
	</div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
	data() {
		return {
			ask: []
		}
	},
	created() {
		fetchAskList()
			.then(response => this.ask = response.data)
			.catch(error => console.log(error))
	}
}
</script>

<style>

</style>