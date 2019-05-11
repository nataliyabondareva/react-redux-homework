import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DropdownMenu from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<DropdownMenu />
	</Provider>,
  document.getElementById('root')
)
serviceWorker.unregister();
