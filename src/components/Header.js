import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

const daysRemaining = function() {
  var weddingDate = moment('2020-07-18')
  var today = moment()
  return weddingDate.diff(today, 'days')
}

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-heart"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Mary & Royce</h1>
        <h3>November 22nd, 2020</h3>
        <h3>San Francisco, CA</h3>
        <h3>{daysRemaining()} days to go!</h3>
      </div>
    </div>
    <nav>
      <ul>
        <li>
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
              props.onOpenArticle('gallery')
            }}
          >
            Gallery
          </button>
        </li>
        {/* <li>
          <button
            onClick={() => {
              props.onOpenArticle('gifts')
            }}
          >
            Gifts
          </button>
        </li> */}
        <li>
          <button
            disabled
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            RSVP
          </button>
        </li>
        <li>
          <button
            disabled
            onClick={() => {
              props.onOpenArticle('accommodations')
            }}
          >
            Accommodations
          </button>
        </li>
        <li>
          <button>
            <a href="mailto:aboudibrooks@gmail.com">Contact</a>
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
