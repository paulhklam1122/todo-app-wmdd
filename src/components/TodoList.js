import React from 'react'
// import v4 from 'uuid'

import List from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'

import Todo from './Todo'
import { PropTypes } from 'prop-types';

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
  // const todos = [
  //   {
  //     id: v4(),
  //     text: 'hey',
  //     completed: true
  //   },
  //   {
  //     id: v4(),
  //     text: 'ho',
  //     completed: true
  //   },
  //   {
  //     id: v4(),
  //     text: "let's go",
  //     completed: false
  //   }
  // ]

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
