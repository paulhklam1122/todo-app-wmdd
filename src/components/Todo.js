import React from 'react'
import PropTypes from 'prop-types'

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

const Todo = ({ completed, onClick, text }) => {
  const styles = getStyles({ completed })
  return (
    <ListItem>
      <Checkbox
        onChange={onClick}
        checked={completed}
      />
      <ListItemText
        primary={text}
        style={styles.listItemText}
      />
    </ListItem>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
