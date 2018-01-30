import { types } from '../action-types'

function updateProfile (fields) {
    return {
        type: types.UPDATE_PROFILE,
        fields,
        path: []
    }
}

export {
    updateProfile,
    types
}