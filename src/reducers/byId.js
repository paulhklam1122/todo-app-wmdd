const byId = (state = {}, action) => {
  if (action.response) {
    console.log('action', action)

    return {
      ...state,
      ...action.response.entities.todos
    }
  }

  return state
}

export default byId
