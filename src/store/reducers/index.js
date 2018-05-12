import { combineReducers } from 'redux'

import posts from './posts'
import queries from './queries'

export default combineReducers({ posts, queries })
