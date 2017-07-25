import React, { Component } from 'react'
import connectHits from 'react-instantsearch/src/connectors/connectHits'

import GoogleMapWithMarkers from './GoogleMapWithMarkers'

const { LatLng } = window.google.maps

class Map extends Component {
  render () {
    const { hits } = this.props
    const markers = hits
      .filter(hit => hit._geoloc)
      .map((hit, index) =>
        ({
          id: hit.objectID,
          infoContent: (
            <strong>
              {hit.name}
            </strong>
          ),
          position: new LatLng(hit._geoloc),
          showInfo: false
        })
      )
    return (
      <GoogleMapWithMarkers markers={markers} />
    )
  }
}

export default connectHits(Map)
