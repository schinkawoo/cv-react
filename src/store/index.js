import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import editReducer from '../components/edit/reducer'
import initState from './init.json'

const store = createStore(editReducer, initState, applyMiddleware(logger))

export default store