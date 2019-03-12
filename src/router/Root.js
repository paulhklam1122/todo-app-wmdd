import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from '../components/App'
import store from '../redux/store'

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Route path='/:filter?' component={App} />
        </Router>
      </Provider>
    )
  }
}

export default Root
