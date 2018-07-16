import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import * as actions from '../redux/actions'

import FetchError from '../components/FetchError'
import VisibleTodoList from '../components/VisibleTodoList'

import { getVisibleTodos, getIsFetching, getErrorMessage } from '../redux/reducers'

class VisibleTodoListContainer extends Component {
  componentDidMount () {
    this.fetchData()
  }

  componentDidUpdate (prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
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
  errorMessage: PropTypes.string,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchTodos: PropTypes.func.isRequired
}

VisibleTodoListContainer.defaultProps = {
  errorMessage: ''
}

const mapStateToProps = (state, { match: { params } }) => {
  let filter = params.filter || 'all'

  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter
  }
}

const VisibleTodoListContainerWithRouter = withRouter(connect(mapStateToProps, actions)(VisibleTodoListContainer))

export default VisibleTodoListContainerWithRouter
