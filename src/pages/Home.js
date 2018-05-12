import React, { Component } from 'react'
import PostRenderer from '../components/PostRenderer'
import QueryRenderer from '../components/QueryRenderer'

class Home extends Component {
  render() {
    return (
      <div id='home'>
				<div id='cover'>
					<PostRenderer slug='frontpage' hideTitle hideDate/>
				</div>
				<div id='showcase'>
					<h1 id='blogHeader'>Blog</h1>
					<QueryRenderer query={{}}/>
				</div>
			</div>
    )
  }
}

export default Home
