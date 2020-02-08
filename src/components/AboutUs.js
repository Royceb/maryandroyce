import '../assets/scss/main.scss'
import React from 'react'
import PropTypes from 'prop-types'

const AboutUs = props => (
  <section id="about-us" style={props.timeout ? { display: 'none' } : {}}>
    <div className="about-us-container">
      <div className="mary">
        <h1>Mary Jovi Aboudi</h1>
        <div>I am Mary</div>
      </div>
      <div className="royce">
        <h1>Royce Richard Brooks</h1>
        <div>I am Royce</div>
      </div>
    </div>
  </section>
)

AboutUs.propTypes = {
  timeout: PropTypes.bool,
}

export default AboutUs
