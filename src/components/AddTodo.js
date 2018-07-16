import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
})

const AddTodo = ({ classes, onAddTodoClick }) => {
  return (
    <form onSubmit={onAddTodoClick}>
      <TextField
        className={classes.textField}
        id='add-todo'
        label='Add a todo'
        margin='normal'
        name='todo'
        placeholder='i.e buy chocolate'
      />
      <Button
        className={classes.button}
        color='primary'
        type='submit'
        variant='raised'
      >
        Add Todo
      </Button>
    </form>
  )
}
AddTodo.propTypes = {
  onAddTodoClick: PropTypes.func.isRequired
}

export default withStyles(styles)(AddTodo)
