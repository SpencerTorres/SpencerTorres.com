import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestPost } from '../store/actions'
import moment from 'moment'
import Markdown from './Markdown'

class PostRenderer extends Component {
	componentWillMount() {
		this.props.requestPost(this.props.slug)
	}

  render() {
		let { slug, posts, hideTitle, hideDate } = this.props
		let post = posts.bySlug[slug]

		if(!post || post.waiting)
			return <div/>

    return (
      <div id='PostRenderer'>
				<div id='post'>
					{ !hideTitle && <h1 id='title'>{post.title}</h1> }
					{ !hideDate && <h2 id='date'>{moment(post.released_at).format('LL')}</h2> }

					<div id='content'>
						{ post.content && Markdown(post.content).tree }
					</div>
				</div>
			</div>
    )
  }
}

PostRenderer.propTypes = {
	slug: PropTypes.string.isRequired,
  posts: PropTypes.object.isRequired
}

function mapStateToProps(state, props) {
  return {
		slug: props.slug || props.match.params.slug,
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { requestPost })(PostRenderer)
