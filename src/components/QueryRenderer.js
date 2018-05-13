import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { hashQuery, requestQuery } from '../store/actions'
import moment from 'moment'

class QueryRenderer extends Component {
	constructor(props) {
		super(props)
		this.state = { queryHash: '' }
	}

	componentWillMount() {
		this.setState({ queryHash: hashQuery(this.props.query) })
		this.props.requestQuery(this.props.query)
	}

	componentWillReceiveProps(props) {
		let hash = hashQuery(props.query)
		if(hash === this.state.queryHash)
			return

		this.props.requestQuery(props.query)
		this.setState({ queryHash: hash })
	}

  render() {
		let { queryHash } = this.state
		let { queries, posts } = this.props
		let query = queries.byHash[queryHash]

		if(!query || query.waiting)
			return <div/>

    return (
      <div className='QueryRenderer'>
				{ query.results.map(slug => {
					let post = posts.bySlug[slug]

					if(!post)
						return <div key={slug}/>

					return (
						<NavLink key={post.slug} className='post' to={`/blog/${post.slug}`}>
							<h1 id='title'>{post.title}</h1>
							<h2 id='date'>{moment(post.released_at).format('LL')}</h2>
							<p id='summary'>{post.summary}</p>
						</NavLink>
					)
				})}
			</div>
    )
  }
}

QueryRenderer.propTypes = {
	query: PropTypes.object.isRequired,
	queries: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
		queries: state.queries,
    posts: state.posts
  }
}

export default connect(mapStateToProps, { requestQuery })(QueryRenderer)
