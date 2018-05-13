import { combineReducers } from 'redux'

import posts from './posts'
import queries from './queries'
import tags from './tags'

export default combineReducers({ posts, queries, tags })
