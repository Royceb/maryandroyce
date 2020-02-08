import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

const containerStyle = { position: 'relative', width: '400px', height: '500px' }

class MapContainer extends React.Component {
  render() {
    const { info, lat, lng } = this.props
    return (
      <Map
        google={this.props.google}
        containerStyle={containerStyle}
        style={{ width: '500px', height: '500px', position: 'relative' }}
        className={'map'}
        zoom={14}
        initialCenter={{ lat: 37.7704316, lng: -122.3909511 }}
      >
        <Marker
          title={'Hotel Via'}
          name={'Hotel Via'}
          position={{ lat: 37.7793223, lng: -122.3909444 }}
        />
        <Marker
          name={'The Pearl'}
          title={'The Pearl'}
          position={{ lat: 37.7614446, lng: -122.3889506 }}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAMhUY_7M7-dwVS2fi_rpiSBofG3KVOu84',
})(MapContainer)
