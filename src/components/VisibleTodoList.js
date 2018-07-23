import React from 'react'
import v4 from 'uuid'

import { withStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

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

const VisibleTodoList = ({ classes }) => {
  const todos = [
    {
      id: v4(),
      text: 'hey',
      completed: true
    },
    {
      id: v4(),
      text: 'ho',
      completed: true
    },
    {
      id: v4(),
      text: 'lets go',
      completed: false
    }
  ]

  return (
    <List className={classes.root}>
      {
        todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
          />
        )
      }
    </List>

  )
}

export default withStyles(styles)(VisibleTodoList)
