import React from 'react'

import AddTodo from './AddTodo'
import Footer from './Footer'
import TodoList from './TodoList'
import Wrapper from './Wrapper'

const App = () => (
  <Wrapper>
    <AddTodo />
    <TodoList />
    <Footer />
  </Wrapper>
)

export default App
