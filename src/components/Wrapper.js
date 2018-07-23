import React from 'react'

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

export default Wrapper
