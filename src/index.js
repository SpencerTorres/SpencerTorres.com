import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store from './store'
import history from './store/history'
import App from './App'

ReactDOM.render((
  <Provider store={store}>
		<ConnectedRouter history={history}>
    	<Route component={App}/>
		</ConnectedRouter>
	</Provider>
), document.getElementById('root'))
