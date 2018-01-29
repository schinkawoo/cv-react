const types = {
    UPDATE_PROFILE: 'UPDATE_PROFILE',
    EDIT_PROFILE: 'EDIT_PROFILE'
}

function updateProfile (data) {
    return {
        type: types.UPDATE_PROFILE,
        data
    }
}

function editProfile (data) {
    return {
        type: types.EDIT_PROFILE,
        data
    }
}

export {
    editProfile,
    updateProfile,
    types
}