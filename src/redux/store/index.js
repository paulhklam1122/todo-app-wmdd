import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import todoApp from '../reducers'

const middleWare = applyMiddleWare(promise, thunk, logger)

const store = createStore(todoApp, composeWithDevTools(middleWare))

export default store
