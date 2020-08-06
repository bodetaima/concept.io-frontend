import { profiles } from "../utils/mockData";

class ProfileService {
    chooseProfile(profile) {
        if (profiles.some((prof) => prof.id === profile.id)) {
            return new Promise((resolve) => {
                setTimeout(resolve, 800, profile);
            });
        } else {
            return new Error("Profile doesn't exist");
        }
    }
}

export default new ProfileService();
