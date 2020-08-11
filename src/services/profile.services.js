import req from "../utils/request";

class ProfileService {
    getProfiles() {
        const options = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        return req.get("profiles", options);
    }

    createProfile(profile) {
        const options = {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profile),
        };
        return req.post("profile/create", options);
    }

    chooseProfile(profile, password = "") {
        if (password !== "") {
            profile.password = password;
        }
        const options = {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profile),
        };
        return req.post("profile/choose", options);
    }

    logout() {
        const options = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        return req.post("profile/logout", options);
    }
}

export default new ProfileService();
