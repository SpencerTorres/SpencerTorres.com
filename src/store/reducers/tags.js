import {
	TAGS_SET,
	TAGS_WAITING,
	TAGS_ERROR
} from '../types'

const initialState = {
  byName: {},
	waiting: false,
	error: false
}

export default (state = initialState, action = {}) => {
	let changes = Object.assign({}, state)

  switch(action.type) {
		case TAGS_SET:
			if(!action.tags)
				return state

			for(let index in action.tags) {
				let tag = action.tags[index]
				changes.byName[tag.name] = tag.count
			}

			changes.waiting = false
			changes.error = false

			return changes

    case TAGS_WAITING:
			changes.waiting = true
			changes.error = false
			return changes

    case TAGS_ERROR:
			changes.waiting = false
			changes.error = true
			return changes

    default: return state
  }
}
