import { createStore } from 'redux'
import editReducer from '../components/edit/reducer'
import initState from './init.json'
import { fromJS } from 'immutable'
import Cursor from 'immutable-cursor'

const state = Cursor.from(fromJS(initState), (nextValue, prevValue, keyPath) => {
    if (process.env.REACT_APP_ENV !== 'development') return

    const prev = prevValue.getIn(keyPath)
    const next = nextValue.getIn(keyPath)

    console.log('%cSTATE CHANGED', 'font-weight:bold')
    console.log('%cfrom:\n', 'font-weight:bold;color:red',
        prev && prev.toJS ? prev.toJS() : prev) 
    console.log('%cto:\n', 'font-weight:bold;color:green', 
        next && next.toJS ? next.toJS() : next) 
    console.log('%cat:\n', 'font-weight:bold;color:blue', keyPath,
    )
  });
const store = createStore(editReducer, state)

export default store