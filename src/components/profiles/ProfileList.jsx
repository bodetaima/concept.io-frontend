import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, Elevation, Button, Text, Divider, InputGroup, Intent, FormGroup } from "@blueprintjs/core";
import { chooseProfile } from "../../store/actions";
import Cookies from "../../utils/cookies";

function ProfileList({ pending, profile, chooseProfile, chooseProfileError }) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        if (Cookies.checkCookie("_p_e")) {
            setError(true);
        }
    }, []);

    const handleInput = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        chooseProfile(profile, password);
    };

    return (
        <Card interactive={true} elevation={Elevation.TWO} style={{ margin: 10 }} key={profile.id}>
            <Text ellipsize={true}>
                <strong>{profile.fullname}</strong>
                {profile.private && <span> (private)</span>}
            </Text>
            <Text ellipsize={true}>{profile.email}</Text>
            <Divider />
            {profile.private && (
                <form onSubmit={handleSubmit}>
                    <FormGroup intent={error ? Intent.DANGER : Intent.NONE} helperText={error && "Password not match"}>
                        <InputGroup
                            intent={error ? Intent.DANGER : Intent.NONE}
                            type="password"
                            placeholder="Enter password..."
                            onChange={handleInput}
                        />
                    </FormGroup>
                    <Button type="submit" loading={pending} text="Select" />
                </form>
            )}
            {!profile.private && <Button loading={pending} text="Select" onClick={() => chooseProfile(profile)} />}
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {
        chooseProfileError: state.auth.chooseProfileError,
    };
};

const mapDispatchToProps = (dispatch) => ({
    chooseProfile: (profile, password) => dispatch(chooseProfile(profile, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileList);
