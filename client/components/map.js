import React, {Component, useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'

export default class Map extends Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/dantracy/cjxfabpi11f8r1cnrrum5m27l'
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    }
    return <div style={style} ref={el => (this.mapContainer = el)} />
  }
}
