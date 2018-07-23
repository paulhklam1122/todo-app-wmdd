import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import VisibleTodoList from '../components/VisibleTodoList'

class VisibleTodoListContainer extends Component {
  render () {
    return (
      <VisibleTodoList />
    )
  }
}

export default withRouter(connect()(VisibleTodoListContainer))
