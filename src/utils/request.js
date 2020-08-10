import { API_URL } from "@constants";

function f(path, options) {
    const _e = API_URL;
    return new Promise((resolve, reject) => {
        fetch(`${_e}${path}`, options)
            .then((res) => resolve(res.json()))
            .catch((e) => reject(e));
    });
}

export default {
    get(path, options) {
        options.method = "GET";
        return f(path, options);
    },
    post(path, options) {
        options.method = "POST";
        return f(path, options);
    },
};
