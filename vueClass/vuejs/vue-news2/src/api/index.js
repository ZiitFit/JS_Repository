import axios from 'axios';

const config = {
	baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList() {
	// return axios.get(config.baseUrl + 'news/1.json');
	return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
	return axios.get(config.baseUrl + 'jobs/1.json');
}

function fetchAskList(){
	return axios.get(config.baseUrl + 'ask/1.json')
}

function fetchUserInfo(username) {
	return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemAnswer(useranswer) {
	return axios.get(`${config.baseUrl}item/${useranswer}.json`);
}


export {
	fetchNewsList,
	fetchJobsList,
	fetchAskList,
	fetchUserInfo,
	fetchItemAnswer,
}
