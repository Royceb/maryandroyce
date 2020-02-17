import React from 'react'
import Gallery from 'react-photo-gallery'

class WeddingGallery extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {}

  render() {
    let randomPhotos = this.props.photos.sort(() => 0.5 - Math.random())
    return (
      <div style={{ background: 'black' }}>
        <Gallery photos={randomPhotos} direction="column"></Gallery>
      </div>
    )
  }
}

export default WeddingGallery
