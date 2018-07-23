import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

const AddTodo = ({ classes }) => {
  return (
    <form>
      <TextField
        // className={classes.textField}
        id='add-todo'
        label='Add a todo'
        margin='normal'
        name='todo'
        placeholder='i.e. buy chocolate'
      />
      <Button
        color='primary'
        type='submit'
        variant='raised'
      >
        Add Todo
      </Button>
    </form>
  )
}

export default withStyles(styles)(AddTodo)
