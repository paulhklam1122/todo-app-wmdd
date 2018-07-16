import React from 'react'

import AddTodo from './components/AddTodo'
import Footer from './components/Footer'
import TodoList from './components/TodoList'
import Wrapper from './components/Wrapper'

const App = () => {
  return (
    <Wrapper>
      <AddTodo />
      <TodoList />
      <Footer />
    </Wrapper>
  )
}

export default App
