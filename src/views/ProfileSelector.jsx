import React from "react";
import { chooseProfile, getProfiles } from "../store/actions";
import { connect } from "react-redux";
import { Card, Spinner } from "@blueprintjs/core";
import ProfileList from "../components/ProfileList";
import "./styles/profile-selector.css";

class ProfileSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { getProfiles } = this.props;
        getProfiles();
    }

    render() {
        const { profiles, chooseProfilePending, chooseProfile, getProfilesPending } = this.props;

        const profileList = profiles.map((profile) => (
            <ProfileList key={profile.id} pending={chooseProfilePending} profile={profile} clicked={chooseProfile} />
        ));

        return <div className="card">{getProfilesPending ? <Spinner /> : <Card>{profileList}</Card>}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        getProfilesPending: state.auth.getProfilesPending,
        chooseProfilePending: state.auth.chooseProfilePending,
        profiles: state.auth.profiles,
    };
};
const mapDispatchToProps = (dispatch) => ({
    getProfiles: () => dispatch(getProfiles()),
    chooseProfile: (profile) => dispatch(chooseProfile(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSelector);
