import { auth } from "./actionTypes";
import ProfileService from "../../services/profile.services";

function actionCreator(type, payload) {
    return {
        type,
        payload,
    };
}

export function getProfiles() {
    return async (dispatch) => {
        dispatch(actionCreator(auth.GET_PROFILES));
        return await ProfileService.getProfiles()
            .then((result) => {
                dispatch(actionCreator(auth.GET_PROFILES_SUCCESS, result));
            })
            .catch((error) => dispatch(actionCreator(auth.GET_PROFILES_FAILED, error)));
    };
}

export function chooseProfile(profile) {
    return async (dispatch) => {
        dispatch(actionCreator(auth.CHOOSE_PROFILE));
        return await ProfileService.chooseProfile(profile)
            .then((result) => {
                dispatch(actionCreator(auth.CHOOSE_PROFILE_SUCCESS, result));
            })
            .catch((error) => dispatch(actionCreator(auth.CHOOSE_PROFILE_FAILED, error)));
    };
}

export function logout() {
    return (dispatch) => {
        ProfileService.logout();
        dispatch(actionCreator(auth.LOGOUT));
    };
}
