import React, { Component } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import RouteProps from 'react-route-props'
import Header from './components/Header'
import Home from './pages/Home'
import PostRenderer from './components/PostRenderer'

import './styles/index.css'

class App extends Component {
  render() {

    return (
      <div id='app'>
				<Header/>
				<div id='page'>
	        <Switch>
						<RouteProps exact path='/' component={Home}/>
						<RouteProps exact path='/blog/:slug' component={PostRenderer}/>
						<RouteProps component={Redirect} to='/'/>
	        </Switch>
				</div>
      </div>
    )
  }
}

export default App
