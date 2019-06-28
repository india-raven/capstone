import React, {useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'

export default function Test() {
  const [viewport, setViewport] = useState({
    latitude: 40.705093,
    longitude: -74.009214,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiZGFudHJhY3kiLCJhIjoiY2p2MmptbDVxMDNwNjQ0bno2c2xvYTVubyJ9.7qXQ7dYRVXrHA52FL4SSAQ"
        mapStyle="mapbox://styles/dantracy/cjxfabpi11f8r1cnrrum5m27l"
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      >
        markers here
      </ReactMapGL>
    </div>
  )
}

// const dummyData = {
//   2010: {
//     January: {
//       newYork: 0
//     },
//     February: {
//       newYork: 2
//     },
//     March: {
//       newYork: 2
//     },
//     April: {
//       newYork: 5
//     },
//     May: {
//       newYork: 10
//     },
//     June: {
//       newYork: 16
//     },
//     July: {
//       newYork: 22
//     },
//     August: {
//       newYork: 23
//     },
//     September: {
//       newYork: 22
//     },
//     October: {
//       newYork: 18
//     },
//     November: {
//       newYork: 12
//     },
//     December: {
//       newYork: 5
//     }
//   },
//   2011: {
//     January: {
//       newYork: 2
//     },
//     February: {
//       newYork: 4
//     },
//     March: {
//       newYork: 5
//     },
//     April: {
//       newYork: 5
//     },
//     May: {
//       newYork: 11
//     },
//     June: {
//       newYork: 14
//     },
//     July: {
//       newYork: 28
//     },
//     August: {
//       newYork: 30
//     },
//     September: {
//       newYork: 24
//     },
//     October: {
//       newYork: 16
//     },
//     November: {
//       newYork: 6
//     },
//     December: {
//       newYork: 2
//     }
//   }
// }
