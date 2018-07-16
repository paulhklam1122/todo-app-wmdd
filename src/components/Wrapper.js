import React from 'react'
import PropTypes from 'prop-types'

const getStyles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '50%',
    border: '1px solid grey',
    backgroundColor: 'lightgrey',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

const Wrapper = ({ children }) => {
  const styles = getStyles()
  return (
    <div style={styles.root}>
      {children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node
}

export default Wrapper
