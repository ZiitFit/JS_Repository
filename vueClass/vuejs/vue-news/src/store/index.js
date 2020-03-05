import Vue from 'vue'
import Vuex from 'vuex';
// import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';
import mutations from './mutations.js';
import actions from './actions.js';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
		news: [],
		ask: [],
		jobs: [],
	},
	// #3
	getters: {
		fetchedAsk(state) {
			return state.ask;
		}
	},
	mutations,
	actions,
})