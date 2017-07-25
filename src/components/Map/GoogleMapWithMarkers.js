import React, { Component } from 'react'
import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap
} from 'react-google-maps'

const { LatLngBounds } = window.google.maps

class MapComponent extends Component {
  componentDidMount () {
    this.fitMarkers(this.props.markers)
  }

  componentWillReceiveProps (nextProps) {
    this.fitMarkers(nextProps.markers)
  }

  fitMarkers (markers) {
    const { map } = this.refs
    const bounds = new LatLngBounds()
    markers.forEach(marker => bounds.extend(marker.position))
    map.fitBounds(bounds)
  }

  render () {
    return (
      <GoogleMap
        defaultCenter={{
          lat: 0,
          lng: 0
        }}
        defaultZoom={1}
        ref='map'
      >
        {this.props.markers.map((marker, index) => (
          <Marker
            key={index}
            onClick={() => this.props.onMarkerClick(marker)}
            position={marker.position}
          >
            {marker.showInfo && (
              <InfoWindow onCloseClick={() => this.props.onMarkerClose(marker)}>
                {marker.infoContent}
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
    )
  }
}

const MapContainer = withGoogleMap(MapComponent)

export default class GoogleMapWithMarkers extends Component {
  constructor (props) {
    super(props)
    this.handleMarkerClick = this.handleMarkerClick.bind(this)
    this.handleMarkerClose = this.handleMarkerClose.bind(this)
    this.state = {
      markers: []
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      markers: nextProps.markers
    })
  }

  handleMarkerClick (targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true
          }
        }
        return marker
      })
    })
  }

  handleMarkerClose (targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false
          }
        }
        return marker
      })
    })
  }

  render () {
    return (
      <MapContainer
        center={this.state.center}
        containerElement={<div />}
        mapElement={
          <div style={{height: 300}} />
        }
        markers={this.state.markers}
        onMarkerClick={this.handleMarkerClick}
        onMarkerClose={this.handleMarkerClose}
      />
    )
  }
}
