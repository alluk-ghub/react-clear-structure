import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './styles/app.css';

import App from './containers/app';
import configureStore from './store/configureStore';


const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<div className='app'>
			<App />
		</div>
	</Provider>,
	document.getElementById('root')
	);