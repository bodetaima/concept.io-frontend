import { auth } from "../actions/actionTypes";

const profile = JSON.parse(localStorage.getItem("_p"));

const authInitialState = {
    getProfilesPending: false,
    chooseProfilePending: false,
    loggedIn: profile ? true : false,
    profiles: [],
    profile: profile ? profile : {},
    error: null,
};

function authReducers(state = authInitialState, action) {
    const { type, payload } = action;
    switch (type) {
        case auth.GET_PROFILES:
            return {
                ...state,
                getProfilesPending: true,
            };
        case auth.GET_PROFILES_SUCCESS:
            return {
                ...state,
                getProfilesPending: false,
                profiles: payload,
            };
        case auth.GET_PROFILES_FAILED:
            return {
                ...state,
                getProfilesPending: false,
                error: payload,
            };
        case auth.CHOOSE_PROFILE:
            return {
                ...state,
                chooseProfilePending: true,
            };
        case auth.CHOOSE_PROFILE_SUCCESS:
            return {
                ...state,
                chooseProfilePending: false,
                profile: payload,
                loggedIn: true,
            };
        case auth.CHOOSE_PROFILE_FAILED:
            return {
                ...state,
                chooseProfilePending: false,
                error: payload,
            };
        case auth.LOGOUT:
            return {
                ...state,
                loggedIn: false,
                profiles: [],
                profile: {},
            };
        default:
            return state;
    }
}

export { authReducers };
