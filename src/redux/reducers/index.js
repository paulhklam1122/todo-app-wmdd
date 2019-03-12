import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
})

const todoApp = combineReducers({
  byId,
  listByFilter
})

export default todoApp

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getIds(state.listByFilter[filter])
  return ids.map(id => fromById.getTodo(state.byId, id))
}

export const getIsFetching = (state, filter) => fromtList.getIsFetching(state.listByFilter[filter])
export const getErrorMessage = (state, filter) => fromtList.getErrorMessage(state.listByFilter[filter])
