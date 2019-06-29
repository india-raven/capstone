import React, {Component, useState} from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import ReactMapGL, {Marker} from 'react-map-gl'

import data from '../../server/api/data.json'

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGFudHJhY3kiLCJhIjoiY2p2MmptbDVxMDNwNjQ0bno2c2xvYTVubyJ9.7qXQ7dYRVXrHA52FL4SSAQ'

const options = [
  {
    name: 'Population',
    description: 'Estimated total population',
    property: 'pop_est',
    stops: [
      [0, '#f8d5cc'],
      [1000000, '#f4bfb6'],
      [5000000, '#f1a8a5'],
      [10000000, '#ee8f9a'],
      [50000000, '#ec739b'],
      [100000000, '#dd5ca8'],
      [250000000, '#c44cc0'],
      [500000000, '#9f43d7'],
      [1000000000, '#6e40e6']
    ]
  },
  {
    name: 'GDP',
    description: 'Estimate total GDP in millions of dollars',
    property: 'gdp_md_est',
    stops: [
      [0, '#f8d5cc'],
      [1000, '#f4bfb6'],
      [5000, '#f1a8a5'],
      [10000, '#ee8f9a'],
      [50000, '#ec739b'],
      [100000, '#dd5ca8'],
      [250000, '#c44cc0'],
      [5000000, '#9f43d7'],
      [10000000, '#6e40e6']
    ]
  }
]

export default class Map extends Component {
  map

  constructor(props) {
    super(props)
    this.state = {
      active: options[0]
    }
  }

  componentDidUpdate() {
    this.setFill()
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/dantracy/cjxfabpi11f8r1cnrrum5m27l',
      zoom: 1.5
    })

    this.map.on('load', () => {
      this.map.addSource('states', {
        type: 'geojson',
        data
      })

      // this.map.addLayer({
      //   id: 'states',
      //   type: 'fill',
      //   source: 'states'
      // }, '')
      // this.setFill()
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
