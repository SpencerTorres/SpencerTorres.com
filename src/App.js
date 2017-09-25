import React, { Component } from 'react'
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/lib/fa'

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <img id='logo' src='/s.png' alt='Spencer Torres'/>
        <div id='name'>
          <h1>Spencer Torres</h1>
        </div>

        <div id='icons'>
          <a href='https://github.com/SpencerTorres' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='faIcon'/>
          </a>
          <a href='https://twitter.com/SpencerTorres' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className='faIcon'/>
          </a>
          <a href='mailto:contact@SpencerTorres.com'>
            <FaEnvelope className='faIcon'/>
          </a>
        </div>
      </div>
    );
  }
}
