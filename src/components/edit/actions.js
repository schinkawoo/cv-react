import { types } from '../action-types'

function edit (fields, path = []) {
    return {
        type: types.EDIT,
        fields,
        path
    }
}

function closeEdit (values = {}, path) {
    return {
        type: types.EDIT_CLOSE,
        values,
        path
    }
}

export {
    edit,
    closeEdit
}