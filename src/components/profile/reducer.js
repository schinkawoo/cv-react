import { types } from './actions'

function profile (state, action) {
    switch (action.type) {
        case types.EDIT_PROFILE:
            return state

        case types.UPDATE_PROFILE:
            return state
        default:
            return state
    }
}

export default profile