import {
	QUERY_SET,
	QUERY_WAITING,
	QUERY_ERROR
} from '../types'

const initialState = {
  byHash: {}
}

export default (state = initialState, action = {}) => {
	let changes = Object.assign({}, state)

	if(action.hash && !changes.byHash[action.hash])
		changes.byHash[action.hash] = {}

  switch(action.type) {
    case QUERY_SET:
      if(!action.data)
        return state

			let cleanQuery = {
				waiting: false,
				error: false,
				results: [],
				info: action.data.info
			}

			for(let index in action.data.posts)
				cleanQuery.results.push(action.data.posts[index].slug)

			changes.byHash[action.hash] = cleanQuery

      return changes

    case QUERY_WAITING:
			changes.byHash[action.hash].waiting = true
			changes.byHash[action.hash].error = false
			return changes

    case QUERY_ERROR:
			changes.byHash[action.hash].waiting = false
			changes.byHash[action.hash].error = true
			return changes

    default: return state
  }
}
