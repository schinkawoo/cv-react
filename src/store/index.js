import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import profileReducer from '../components/profile/reducer'
import initState from './init.json'

const store = createStore(profileReducer, initState, applyMiddleware(logger))

export default store