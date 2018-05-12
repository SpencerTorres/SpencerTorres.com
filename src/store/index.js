import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'
import history from './history'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(routerMiddleware(history), thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
