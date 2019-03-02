import {FETCH_NEWS} from '../action-types/newslist';

export default function(state=[], action){
	switch (action.type){
		case FETCH_NEWS:
			
			return [...state, ...action.payload];
		
		default:
        break;
	}

	return state;
}