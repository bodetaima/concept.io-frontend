import { profiles } from "../utils/mockData";

class ProfileService {
    getProfiles() {
        return new Promise((resolve) => {
            setTimeout(resolve, 1200, profiles);
        });
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
