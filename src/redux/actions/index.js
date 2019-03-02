import axios from 'axios';
import { FETCH_NEWS, FETCH_SOURCES } from '../action-types/newslist'

const API_KEY = 'cc8321e11fa248febb31d68435e9df2a';

const ROOT_URL_NEWS = `https://newsapi.org/v2/top-headlines?language=en&pageSize=5&apiKey=${API_KEY}`;
const ROOT_URL_SOURCES = `https://newsapi.org/v2/sources?language=en&apiKey=${API_KEY}`;

export async function fetchNews(pageNumber, source){

	const url=`${ROOT_URL_NEWS}&page=${pageNumber}&source=${source}`;
	const request= await axios.get(url);

return{
	type: FETCH_NEWS,
	payload: request.data.articles
	};

}

export async function fetchSources(){
	const url=`${ROOT_URL_SOURCES}`;
	const request= await axios.get(url);
return{
	type: FETCH_SOURCES,
	payload: request.data.sources
	};

}