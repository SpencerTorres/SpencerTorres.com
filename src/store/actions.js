import {
  POST_SET,
	POST_SET_MANY,
  POST_WAITING,
  POST_ERROR,

	QUERY_SET,
  QUERY_WAITING,
  QUERY_ERROR
} from './types'
import hasher from 'object-hash'
import axios from 'axios'

export function hashQuery(query) {
  return hasher(query)
}

export function setManyPosts(posts) {
	return { type: POST_SET_MANY,	posts	}
}

export function requestPost(slug) {
  return dispatch => {
    dispatch({ type: POST_WAITING, slug })

    return axios.get(`/post-by-slug/${slug}`).then(res => {
      dispatch({ type: POST_SET, slug, post: res.data })
    }).catch(error => {
    	dispatch({ type: POST_ERROR, slug })
    })
  }
}

export function requestQuery(query) {
  return dispatch => {
		let hash = hasher(query)
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
