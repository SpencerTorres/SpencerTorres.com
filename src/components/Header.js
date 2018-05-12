import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/lib/fa'

export default () => {
	return (
		<div id='header'>
			<NavLink id='name' to='/'>
				<img id='logo' src='/s.png' alt='Spencer Torres'/>
				<h1>Spencer Torres</h1>
			</NavLink>

			<div id='icons'>
				<a className='icon' href='https://github.com/SpencerTorres' target='_blank' rel='noopener noreferrer'>
					<FaGithub/>
				</a>
				<a className='icon' href='https://twitter.com/SpencerTorres' target='_blank' rel='noopener noreferrer'>
					<FaTwitter/>
				</a>
				<a className='icon' href='mailto:contact@SpencerTorres.com'>
					<FaEnvelope/>
				</a>
			</div>
		</div>
	)
}
