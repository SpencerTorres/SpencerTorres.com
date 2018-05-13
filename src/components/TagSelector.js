import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class TagSelector extends Component {
	constructor(props) {
		super(props)

		this.state = { selectedTag: '' }

		this.onTagSelect = this.onTagSelect.bind(this)
	}

	onTagSelect(tag) {
		if(!tag || tag === this.state.selectedTag)
			tag = ''

		this.setState({ selectedTag: tag })

		if(this.props.onTagChange)
			this.props.onTagChange(tag)
	}

  render() {
		const { selectedTag } = this.state
		const { tagData } = this.props
		const tags = tagData.byName

		if(tagData.waiting || Object.keys(tags).length < 1)
			return <div/>

    return (
      <div className='TagSelector'>
				<div id='list'>
					<div
						className={selectedTag === '' ? 'tag selected' : 'tag'}
						onClick={() => this.onTagSelect()}
					>
						<p id='name'>All</p>
					</div>
					{ Object.keys(tags).map(name => {
						let count = tags[name]

						return (
							<div
								key={name}
								className={name === selectedTag ? 'tag selected' : 'tag'}
								onClick={() => this.onTagSelect(name)}
							>
								<p id='name'>{name} <span id='count'>{count}</span></p>
							</div>
						)
					})}
				</div>
			</div>
    )
  }
}

TagSelector.propTypes = {
  tagData: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
		tagData: state.tags
  }
}

export default connect(mapStateToProps)(TagSelector)
