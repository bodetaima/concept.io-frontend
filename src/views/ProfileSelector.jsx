import React from "react";
import { profiles } from "../utils/mockData";
import { chooseProfile } from "../store/actions";
import { connect } from "react-redux";
import { Card, Elevation, Button, Text, Divider } from "@blueprintjs/core";

const styles = {
    card: {
        width: "50%",
        padding: 15,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
    },
};

class ProfileSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const profileList = profiles.map((profile) => {
            return (
                <Card interactive={true} elevation={Elevation.TWO} style={{ margin: 10 }} key={profile.id}>
                    <Text ellipsize={true}>
                        <strong>{profile.name}</strong>
                    </Text>
                    <Text ellipsize={true}>{profile.email}</Text>
                    <Divider />
                    <Button
                        loading={this.props.pending}
                        text="Select"
                        onClick={() => this.props.chooseProfile(profile)}
                    />
                </Card>
            );
        });

        return <Card style={styles.card}>{profileList}</Card>;
    }
}

const mapStateToProps = (state) => {
    return {
        pending: state.auth.pending,
    };
};
const mapDispatchToProps = (dispatch) => ({
    chooseProfile: (profile) => dispatch(chooseProfile(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSelector);
