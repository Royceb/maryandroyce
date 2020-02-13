import '../assets/scss/main.scss'
import React from 'react'
import PropTypes from 'prop-types'

const blurbStyles = { width: '400px' }

const AboutUs = props => (
  <section id="about-us" style={props.timeout ? { display: 'none' } : {}}>
    <div className="about-us-container">
      <div className="mary">
        <h1>Mary Jovi Aboudi</h1>
        <div style={blurbStyles}>
          Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
          libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
          Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas
          laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et
          orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris
          aliquet magna magna sed nunc rhoncus amet feugiat tempus.
        </div>
      </div>
      <div className="royce">
        <h1>Royce Richard Brooks</h1>
        <div style={blurbStyles}>
          Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
          libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
          Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas
          laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et
          orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris
          aliquet magna magna sed nunc rhoncus amet feugiat tempus.
        </div>
      </div>
    </div>
  </section>
)

AboutUs.propTypes = {
  timeout: PropTypes.bool,
}

export default AboutUs
