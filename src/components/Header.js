import PropTypes from 'prop-types'
import React from 'react'
import { Wave } from 'react-animated-text'

const comingSoonStyle = { margin: 0, padding: '20px' }

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-heart"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Mary & Royce</h1>
        <h3>July 18, 2020</h3>
        <h3>San Francisco, CA</h3>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <h1 style={comingSoonStyle}>
            <Wave
              text="COMING SOON"
              effect="verticalFadeIn"
              mode="smooth"
              effectDuration={0.5}
              delay={1.5}
              interval={50}
            />
          </h1>
        </li>
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Our story
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            RSVP
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('accommodations')
            }}
          >
            Accommodations
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button> 
        </li> */}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
