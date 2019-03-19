import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import FetchError from '../components/FetchError'
import VisibleTodoList from '../components/TodoList'
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../redux/reducers'

import * as actions from '../redux/actions'

class VisibleTodoListContainer extends Component {
  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter)
  }

  render () {
    const { toggleTodo, todos, isFetching, errorMessage } = this.props

    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }

    if (errorMessage && !todos.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      )
    }

    return (
      <VisibleTodoList
        onTodoClick={toggleTodo}
        todos={todos}
      />
    )
  }
}

VisibleTodoListContainer.propTypes = {
  filter: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchTodos: PropTypes.func.isRequired
}

const mapStateToProps = (state, { match: { params } }) => {
  let filter = params.filter || 'all'

  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter)
  }
}

const VisibleTodoListContainerWithRouter = withRouter(connect(mapStateToProps, actions)(VisibleTodoListContainer))

export default VisibleTodoListContainerWithRouter

