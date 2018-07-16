import React from 'react'
import PropTypes from 'prop-types'

import List from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'

import Todo from './Todo'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

const TodoList = ({ classes, onTodoClick, todos }) => {
  return (
    <List className={classes.root}>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </List>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default withStyles(styles)(TodoList)
