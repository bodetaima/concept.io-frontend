import req from "../utils/request";

class ProfileService {
    async getProfiles() {
        const options = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        return req.get("profiles", options);
    }

    async createProfile(profile) {
        const options = {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profile),
        };
        return req.post("profile/create", options);
    }

    chooseProfile(profile) {
        if (profiles.some((prof) => prof.id === profile.id)) {
            return new Promise((resolve) => {
                setTimeout(resolve, 800, profile);
                localStorage.setItem("_p", JSON.stringify(profile));
            });
        } else {
            return new Error("Profile doesn't exist");
        }
    }

    logout() {
        localStorage.removeItem("_p");
    }
}

export default new ProfileService();
