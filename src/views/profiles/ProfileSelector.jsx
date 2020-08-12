import React from "react";
import { chooseProfile, getProfiles, createProfile } from "@store/actions";
import { connect } from "react-redux";
import { Card, Spinner, Button, Dialog, Classes, Intent, Toast, Text } from "@blueprintjs/core";
import ProfileList from "@components/profiles/ProfileList";
import ProfileCreator from "@components/profiles/ProfileCreator";
import styles from "./styles/profile-selector.module.css";

class ProfileSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            fullname: "",
            email: "",
            isPrivate: false,
            password: "",
        };
    }

    componentDidMount() {
        const { getProfiles } = this.props;
        getProfiles();
    }

    isEmpty = (o) => {
        for (let key in o) {
            if (Object.prototype.hasOwnProperty.call(o, key)) {
                return false;
            }
        }
        return true;
    };

    handleNameInput = (fullname) => {
        this.setState({ fullname: fullname });
    };

    handleEmailInput = (email) => {
        this.setState({ email: email });
    };

    handlePrivateInput = (isPrivate) => {
        this.setState({ isPrivate: isPrivate });
    };

    handlePasswordInput = (password) => {
        this.setState({ password: password });
    };

    handleOpen = () => this.setState({ isOpen: true });
    handleClose = () => this.setState({ isOpen: false });

    handleCreateProfile = async () => {
        if (this.state.fullname !== "" && this.state.email !== "") {
            const profile = {
                fullname: this.state.fullname,
                email: this.state.email,
            };

            if (this.state.isPrivate && this.state.password !== "") {
                profile.private = true;
                profile.password = this.state.password;
            } else {
                profile.private = false;
            }

            await this.props.createProfile(profile);
            if (this.props.createProfileSuccess) {
                this.setState({ isOpen: false });
                this.props.getProfiles();
            }
        }
    };

    render() {
        const { profiles, getProfilesError, chooseProfilePending, getProfilesPending } = this.props;

        const profileCards = profiles.map((profile) => (
            <ProfileList key={profile.id} pending={chooseProfilePending} profile={profile} />
        ));

        return (
            <>
                <div className={styles.card}>
                    {getProfilesPending ? (
                        <Spinner />
                    ) : (
                        <Card>
                            {getProfilesError && (
                                <Text>
                                    <span style={{ color: "red" }}>Error fetching data!</span>
                                </Text>
                            )}
                            {!this.isEmpty(profiles) ? <div className={styles.innerCard}>{profileCards}</div> : null}
                            {!getProfilesError && (
                                <>
                                    <Button
                                        loading={this.props.createProfilePending}
                                        icon="add"
                                        text="Create new profile"
                                        large
                                        minimal={true}
                                        onClick={this.handleOpen}
                                    />
                                    <Dialog onClose={this.handleClose} title="Create new profile" {...this.state}>
                                        <ProfileCreator
                                            onNameInput={this.handleNameInput}
                                            onEmailInput={this.handleEmailInput}
                                            onPrivateInput={this.handlePrivateInput}
                                            onPasswordInput={this.handlePasswordInput}
                                        />
                                        <div className={Classes.DIALOG_FOOTER}>
                                            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                                                <Button intent={Intent.PRIMARY} onClick={this.handleCreateProfile}>
                                                    Create
                                                </Button>
                                            </div>
                                        </div>
                                    </Dialog>
                                </>
                            )}
                        </Card>
                    )}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getProfilesPending: state.auth.getProfilesPending,
        chooseProfilePending: state.auth.chooseProfilePending,
        createProfilePending: state.auth.createProfilePending,
        createProfileSuccess: state.auth.createProfileSuccess,
        getProfilesError: state.auth.getProfilesError,
        profiles: state.auth.profiles,
    };
};
const mapDispatchToProps = (dispatch) => ({
    getProfiles: () => dispatch(getProfiles()),
    createProfile: (profile) => dispatch(createProfile(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSelector);
