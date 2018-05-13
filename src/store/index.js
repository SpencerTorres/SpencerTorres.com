import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'
import history from './history'
import thunk from 'redux-thunk'
import { requestTags } from './actions'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(routerMiddleware(history), thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

store.dispatch(requestTags())

export default store
