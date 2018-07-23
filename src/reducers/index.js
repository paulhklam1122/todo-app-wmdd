import { combineReducers } from 'redux'
import byId from './byId'

const todoApp = combineReducers({
  byId
})

export default todoApp
