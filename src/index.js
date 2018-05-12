import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store from './store'
import history from './store/history'
import App from './App'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.oatload.com'
axios.defaults.headers['x-project-id'] = '30147021339885568'

ReactDOM.render((
  <Provider store={store}>
		<ConnectedRouter history={history}>
    	<Route component={App}/>
		</ConnectedRouter>
	</Provider>
), document.getElementById('root'))
