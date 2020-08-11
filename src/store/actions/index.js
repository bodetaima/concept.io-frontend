import { auth, app } from "./actionTypes";
import ProfileService from "../../services/profile.services";
import Cookies from "../../utils/cookies";

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
                dispatch(actionCreator(auth.GET_PROFILES_SUCCESS, result.data));
            })
            .catch((error) => dispatch(actionCreator(auth.GET_PROFILES_FAILED, error)));
    };
}

export function createProfile(profile) {
    return async (dispatch) => {
        dispatch(actionCreator(auth.CREATE_PROFILE));
        return await ProfileService.createProfile(profile)
            .then(() => {
                dispatch(actionCreator(auth.CREATE_PROFILE_SUCCESS));
            })
            .catch((error) => dispatch(actionCreator(auth.CREATE_PROFILE_FAILED, error)));
    };
}

export function chooseProfile(profile, password) {
    return async (dispatch) => {
        dispatch(actionCreator(auth.CHOOSE_PROFILE));
        return await ProfileService.chooseProfile(profile, password)
            .then((result) => {
                Cookies.setCookie("_p_logged_in", true, 10);
                localStorage.setItem("_p_traits", JSON.stringify(result));
                dispatch(actionCreator(auth.CHOOSE_PROFILE_SUCCESS, result));
            })
            .catch((error) => {
                dispatch(actionCreator(auth.CHOOSE_PROFILE_FAILED, error));
            });
    };
}

export function logout() {
    return (dispatch) => {
        ProfileService.logout();
        Cookies.deleteCookie("_p_logged_in");
        localStorage.removeItem("_p_traits");
        dispatch(actionCreator(auth.LOGOUT));
    };
}

export function handleOpenDrawer() {
    return (dispatch) => {
        dispatch(actionCreator(app.OPEN_DRAWER));
    };
}

export function handleCloseDrawer() {
    return (dispatch) => {
        dispatch(actionCreator(app.CLOSE_DRAWER));
    };
}
