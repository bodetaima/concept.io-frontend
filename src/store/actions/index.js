import { auth } from "./actionTypes";
import ProfileService from "../../services/profile.services";

function actionCreator(type, payload) {
    return {
        type,
        payload,
    };
}

export function chooseProfile(profile) {
    return (dispatch) => {
        dispatch(actionCreator(auth.CHOOSE_PROFILE));
        return ProfileService.chooseProfile(profile)
            .then((result) => {
                dispatch(actionCreator(auth.CHOOSE_PROFILE_SUCCESS, result));
            })
            .catch((error) => dispatch(actionCreator(auth.CHOOSE_PROFILE_FAILED, error)));
    };
}

export function logout() {
    return (dispatch) => {
        dispatch(actionCreator(auth.LOGOUT));
    };
}
