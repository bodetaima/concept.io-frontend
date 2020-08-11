import { API_URL } from "@constants";
import Cookies from "../utils/cookies";

const _csrf = Cookies.getCookie("XSRF-TOKEN");

function f(path, options) {
    const _e = API_URL;
    return new Promise((resolve, reject) => {
        fetch(`${_e}${path}`, options)
            .then((res) => {
                if (!res.ok) {
                    reject(res.statusText);
                }
                return resolve(res.json());
            })
            .catch((e) => reject(e));
    });
}

export default {
    get(path, options) {
        options.method = "GET";
        options.credentials = "include";
        return f(path, options);
    },
    post(path, options) {
        options.headers["CSRF-Token"] = _csrf;
        options.method = "POST";
        options.credentials = "include";
        return f(path, options);
    },
};
