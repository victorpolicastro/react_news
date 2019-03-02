import { combineReducers } from 'redux';
import NewsReducer from './news';
import SourcesReducer from './sources';


const rootReducer = combineReducers({
  News: NewsReducer,
  Sources: SourcesReducer
});

export default rootReducer;
