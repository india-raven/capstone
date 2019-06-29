import React from 'react'
import SearchAppBar from './components/searchappbar'
import OptionsBox from './components/options-box'
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
      <div>
        <OptionsBox />
        <Test />
      </div>
    </div>
  )
}

export default App
