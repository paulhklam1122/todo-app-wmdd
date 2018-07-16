import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from '../components/App'

class Root extends Component {
  render () {
    return (
      <Router>
        <Route path='/:filter?' component={App} />
      </Router>
    )
  }
}

export default Root
