import {
	POST_SET,
	POST_SET_MANY,
	POST_WAITING,
	POST_ERROR
} from '../types'

const initialState = {
  bySlug: {}
}

export default (state = initialState, action = {}) => {
	let changes = Object.assign({}, state)

	if((action.slug && !action.posts) && !changes.bySlug[action.slug])
		changes.bySlug[action.slug] = {}

  switch(action.type) {
    case POST_SET:
      if(!action.post)
        return state

      action.post.waiting = false
      action.post.error = false

			// Assign to preserve existing version that could be stored from a query
			changes.bySlug[action.slug] = Object.assign({}, changes.bySlug[action.slug] || {}, action.post)

      return changes

		case POST_SET_MANY:
			if(!action.posts)
				return state

			for(let index in action.posts) {
				let post = action.posts[index]
				post.waiting = false
				post.error = false

				changes.bySlug[post.slug] = Object.assign({}, changes.bySlug[post.slug] || {}, post)
			}

			return changes

    case POST_WAITING:
			changes.bySlug[action.slug].waiting = true
			changes.bySlug[action.slug].error = false
			return changes

    case POST_ERROR:
			changes.bySlug[action.slug].waiting = false
			changes.bySlug[action.slug].error = true
			return changes

    default: return state
  }
}
