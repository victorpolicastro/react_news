import React from 'react';
import NewsList from './pages/NewsList';
import SourcesList from './pages/SourcesList';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {Title, Page} from './styles'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App = () => (
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Page>
			<div>
				<Title>Notícias</Title>
				<SourcesList />
			</div>
			<br/><br /><br /><br/>
			<NewsList />
		</Page>
	</Provider>
);

export default App;