import React from 'react'

import { AddTodoContainer, VisibleTodoListContainer } from '../containers'
import Footer from './Footer'
import Wrapper from './Wrapper'

const App = () => (
  <Wrapper>
    <AddTodoContainer />
    <VisibleTodoListContainer />
    <Footer />
  </Wrapper>
)

export default App
