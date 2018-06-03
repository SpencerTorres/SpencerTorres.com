import {
  POST_SET,
	POST_SET_MANY,
  POST_WAITING,
  POST_ERROR,

	QUERY_SET,
  QUERY_WAITING,
  QUERY_ERROR,

	TAGS_SET,
	TAGS_WAITING,
	TAGS_ERROR
} from './types'
import hasher from 'object-hash'
import axios from 'axios'
axios.defaults.baseURL = 'https://api.oatload.com'
axios.defaults.headers['x-project-id'] = '30147021339885568'
// For development, skip tracking stats
// axios.defaults.headers['x-skip-stats'] = true

export function hashQuery(query) {
  return hasher(query)
}

export function setManyPosts(posts) {
	return { type: POST_SET_MANY,	posts	}
}

export function requestTags() {
  return dispatch => {
    dispatch({ type: TAGS_WAITING })

    return axios.get('/tags').then(res => {
      dispatch({ type: TAGS_SET, tags: res.data })
    }).catch(error => {
    	dispatch({ type: TAGS_ERROR })
    })
  }
}

export function requestPost(slug) {
  return (dispatch, getState) => {

		// Don't request if already cached.
		if(getState().posts.bySlug[slug] && getState().posts.bySlug[slug].content)
			return

    dispatch({ type: POST_WAITING, slug })

    return axios.get(`/post-by-slug/${slug}`).then(res => {
      dispatch({ type: POST_SET, slug, post: res.data })
    }).catch(error => {
    	dispatch({ type: POST_ERROR, slug })
    })
  }
}

export function requestQuery(query) {
  return (dispatch, getState) => {
		let hash = hasher(query)

		if(getState().queries.byHash[hash])
			return

    dispatch({ type: QUERY_WAITING, hash })

    return axios.get('/posts', { params: query }).then(res => {
			// The query gets messy when url encoded; use original
			res.data.query = query
      dispatch({ type: QUERY_SET, hash, data: res.data })
			dispatch({ type: POST_SET_MANY, posts: res.data.posts })
    }).catch(error => {
    	dispatch({ type: QUERY_ERROR, hash })
    })
  }
}
