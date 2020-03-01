import React from 'react'
import PropTypes from 'prop-types'

const floatStyles = {
  float: 'right',
  margin: '10px 0',
  display: 'flex',
  justifyContent: 'flex-end',
}

const Footer = props => (
  <footer
    id="footer"
    style={
      (props.timeout ? { display: 'none' } : {}, props.float ? floatStyles : {})
    }
  >
    <p className="copyright">
      {props.footerText && (
        <a target="_blank" href="https://github.com/Royceb/maryandroyce">
          Built by Royce and Mary
        </a>
      )}
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
