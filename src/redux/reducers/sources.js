import {FETCH_SOURCES} from '../action-types/newslist';

export default function(state=[], action){
	switch (action.type){
		case FETCH_SOURCES:
		
			return [...state, ...action.payload];
		
		default:
        break;
	}

	return state;
}