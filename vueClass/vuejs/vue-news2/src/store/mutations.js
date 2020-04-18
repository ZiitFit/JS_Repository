export default {
	SET_NEWS(state, news1) { // news1 이라는 인자로 넘어옴
		state.news = news1;
	},
	SET_JOBS(state, jobs) {
		state.jobs = jobs;
	},
	SET_ASK(state, ask) {
		state.ask = ask;
	},
	SET_USER(state, user){
		state.user = user;
	},
	SET_ITEM(state, item) {
		state.item = item;
	}
}