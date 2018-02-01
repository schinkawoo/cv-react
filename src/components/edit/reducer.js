import { types } from '../action-types'
import { fromJS } from 'immutable'

function editReducer (state, action) {
    switch (action.type) {
        case types.EDIT:
            return editFields(state, action.path, action.fields, action.targetField)
        case types.UPDATE_PROPERTY:
            return updateProperty(state, action.path, action.value)
        default:
            return state
    }
}

function editFields (state, path, fields, targetField) {
    return !state.get('edit') && path && fields
        ? state.set('edit', fromJS({ path, fields, targetField }))
        : state.delete('edit')
}

function updateProperty (state, path, value) {
    return state.setIn(path, fromJS(value))
}

export default editReducer