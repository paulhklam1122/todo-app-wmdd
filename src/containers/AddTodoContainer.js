import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addTodo } from '../redux/actions'

import AddTodo from '../components/AddTodo'

class AddTodoContainer extends Component {
  handleAddTodoClick = (event) => {
    const { dispatch } = this.props
    console.log('handling todo click')
    event.preventDefault()

    const todoName = event.target.elements.todo.value

    dispatch(addTodo(todoName))
  }

  render () {
    return (
      <AddTodo
        onAddTodoClick={this.handleAddTodoClick}
      />
    )
  }
}

AddTodoContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(AddTodoContainer)
