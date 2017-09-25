import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, Route } from 'react-router-dom'
import TrackerGA from './util/TrackerGA'

ReactDOM.render((
  <BrowserRouter>
    <TrackerGA>
      <Route component={App}/>
    </TrackerGA>
  </BrowserRouter>
), document.getElementById('root'));
