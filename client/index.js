import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import * as V from 'victory'
import history from './history'
import store from './store'
import App from './app'
// import 'typeface-roboto'

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
