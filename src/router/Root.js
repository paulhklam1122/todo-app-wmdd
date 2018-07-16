import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux/store'

import App from '../components/App'

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
