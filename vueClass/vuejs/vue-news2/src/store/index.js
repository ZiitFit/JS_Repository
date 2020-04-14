import Vue from 'vue';
import Vuex from 'vuex';
// import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js'; -> store/actions.js 에 import
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
		news: [],
		jobs: [],
		ask: [],
	},
	// askview.vue -> ...mapState를 getters로 표현
	getters: {
		fetchedAsk(state) {
			return state.ask;
		}
	},
	mutations,
	// mutations: {
	// 	// store/mutations 파일로 옮김
	// 	SET_NEWS(state, news1) { // news1 이라는 인자로 넘어옴
	// 		state.news = news1;
	// 	},
	// 	SET_JOBS(state, jobs) {
	// 		state.jobs = jobs;
	// 	},
	// 	SET_ASK(state, ask) {
	// 		state.ask = ask;
	// 	}
	// },
	actions,
	// actions: {
	//	// store/actions 파일로 옮김
	// 	FETCH_NEWS(context) {
	// 		fetchNewsList()
	// 			.then(response => {
	// 				console.log(response.data);
	// 				context.commit('SET_NEWS', response.data);
	// 			})
	// 			.catch(error => {
	// 				console.log(error)
	// 			})
	// 	},
	// 	FETCH_JOBS({ commit }){
	// 		fetchJobsList()
	// 			.then(({ data }) => {
	// 				commit('SET_JOBS', data)
	// 			})
	// 			.catch(error => console.log(error))
	// 	},
	// 	FETCH_ASK(context) {
	// 		fetchAskList()
	// 			.then(response => context.commit('SET_ASK', response.data))
	// 			.catch(error => console.log(error))
	// 	},
	// }
});
