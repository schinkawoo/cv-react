import { types } from '../action-types'

function edit (path, fields, targetField) {
    return {
        type: types.EDIT,
        fields,
        path,
        targetField
    }
}

function updateProperty (path, value) {
    return {
        type: types.UPDATE_PROPERTY,
        value,
        path
    }
}

export {
    edit,
    updateProperty
}