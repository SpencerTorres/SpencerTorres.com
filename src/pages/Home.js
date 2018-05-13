import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PostRenderer from '../components/PostRenderer'
import TagSelector from '../components/TagSelector'
import QueryRenderer from '../components/QueryRenderer'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = { query: {} }

		this.updateQuery = this.updateQuery.bind(this)
	}

	updateQuery(newTag) {
		if(!newTag)
			this.setState({ query: {} })
		else
			this.setState({ query: { tags: newTag } })
	}

  render() {
		const { query } = this.state

    return (
      <div id='home'>
				<Helmet>
					<title>{'Spencer Torres'}</title>
					<meta name='description' content={`Hello! I'm Spencer.`}/>
				</Helmet>
				<div id='cover'>
					<PostRenderer slug='frontpage' hideTitle hideDate/>
				</div>
				<h1 id='blogHeader'>BLOG</h1>
				<div id='blogContainer'>
					<div id='tagList'>
						<TagSelector onTagChange={this.updateQuery}/>
					</div>
					<div id='postList'>
						<QueryRenderer query={query}/>
					</div>
				</div>
			</div>
    )
  }
}

export default Home
