import React from 'react'
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack
} from 'victory'

import {Navbar} from './components'
import Routes from './routes'
import Test from './components/test'
import Map from './components/map'

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Routes /> */}
      <Test />
    </div>
  )
}

export default App
