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
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Test style={{zIndex: 1, position: 'fixed'}} />
        <OptionsBox style={{zIndex: 2, position: 'fixed'}} />
      </div>
    </div>
  )
}

export default App
