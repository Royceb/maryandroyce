import '../assets/scss/main.scss'
import React from 'react'
import PropTypes from 'prop-types'

const AboutWedding = props => (
  <section id="about-wedding" style={props.timeout ? { display: 'none' } : {}}>
    <div className="about-wedding-container">
      <div className="header">
        <h1>The Wedding</h1>
      </div>
      <div>
        <h2>Ceremony and Reception</h2>
      </div>

      <div>
        <div>
          <a href="https://www.thepearlsf.com/">
            The Pearl, 601 19th St, San Francisco, CA 94107
          </a>
        </div>
        <div>Saturday, July 18th, 2020</div>
        <div>5:30 PM</div>
        <div>Formal Attire</div>
      </div>
    </div>
  </section>
)

AboutWedding.propTypes = {
  timeout: PropTypes.bool,
}

export default AboutWedding
