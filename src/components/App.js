import React from 'react'

import AddTodo from './AddTodo'
import Footer from './Footer'
import VisibleTodoList from './VisibleTodoList'
import Wrapper from './Wrapper'

const App = () => (
  <Wrapper>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Wrapper>
)

export default App
