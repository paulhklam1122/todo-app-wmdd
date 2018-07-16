import React from 'react'
import PropTypes from 'prop-types'
import TodoList from './TodoList'

const VisibleTodoList = (props) => {
  const { todos, onTodoClick } = props
  return (
    <TodoList
      todos={todos}
      onTodoClick={onTodoClick}
    />
  )
}

VisibleTodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default VisibleTodoList
