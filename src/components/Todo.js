import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const getStyles = ({ completed }) => {
  return {
    listItemText: {
      marginTop: 0,
      textDecoration: completed ? 'line-through' : 'none'
    }
  }
}

const Todo = ({ completed, text }) => {
  const styles = getStyles({ completed })
  return (
    <ListItem>
      <Checkbox
        checked={completed}
      />
      <ListItemText
        primary={text}
        style={styles.listItemText}
      />
    </ListItem>
  )
}

export default Todo
