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

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo
