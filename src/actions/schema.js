import { schema } from 'normalizr'

export default todo = new schema.Entity('todos')
export const arrayOfTodos = new schema.Array(todo)
