import { types } from '../action-types'
import deepMerge from 'deepmerge'

function profile (state, action) {
    switch (action.type) {
        case types.EDIT:
            return editFields(state, action.path, action.fields)
        case types.EDIT_CLOSE:
            return updateFields(state, action.path, action.values)
        default:
            return state
    }
}

function editFields (state, path, fields) {
    return !state.edit
        ? {
            ...state,
            edit: {
                path,
                fields
            }
        }
        : {
            ...state,
            edit: undefined
        }
}

function updateFields (state, path, values) {
    const initialState = { ...state, edit: undefined }
    const stateUpdate = path.reduce((acc, key, index, array) => {
        return path.length === index - 1
            ? { key: { ...values } }
            : { ...acc, key: {} }
    }, path.length === 0 ? { ...values } : {})

    return deepMerge(initialState, stateUpdate)
}

export default profile