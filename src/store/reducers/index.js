import { auth } from "../actions/actionTypes";

const authInitialState = {
    pending: false,
    loggedIn: false,
    profile: {},
    error: null,
};

function authReducers(state = authInitialState, action) {
    const { type, payload } = action;
    switch (type) {
        case auth.CHOOSE_PROFILE:
            return {
                ...state,
                pending: true,
            };
        case auth.CHOOSE_PROFILE_SUCCESS:
            return {
                ...state,
                pending: false,
                profile: payload,
                loggedIn: true,
            };
        case auth.CHOOSE_PROFILE_FAILED:
            return {
                ...state,
                pending: false,
                error: payload,
            };
        case auth.LOGOUT:
            return {
                ...state,
                loggedIn: false,
                profile: {},
            };
        default:
            return state;
    }
}

export { authReducers };
