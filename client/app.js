import React from 'react'
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack
} from 'victory'
import SearchAppBar from './components/searchappbar'

import {Navbar} from './components'
import Routes from './routes'
import Test from './components/test'
import Map from './components/map'

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Routes /> */}
      <SearchAppBar />
      <Test />
    </div>
  )
}

export default App
