import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Elevation, Button, Text, Divider, InputGroup, Intent, FormGroup } from "@blueprintjs/core";

function ProfileList({ pending, profile, clicked, error }) {
    const [password, setPassword] = useState("");

    const handleInput = (e) => {
        setPassword(e.target.value);
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
                <>
                    <FormGroup intent={error ? Intent.DANGER : Intent.NONE} helperText={error && "Password not match"}>
                        <InputGroup
                            intent={error ? Intent.DANGER : Intent.NONE}
                            type="password"
                            placeholder="Enter password..."
                            onChange={handleInput}
                        />
                    </FormGroup>
                    <Button loading={pending} text="Select" onClick={() => clicked(profile, password)} />
                </>
            )}
            {!profile.private && <Button loading={pending} text="Select" onClick={() => clicked(profile)} />}
        </Card>
    );
}

const mapStateToProps = (state) => {
    return {
        error: state.auth.error,
    };
};

export default connect(mapStateToProps)(ProfileList);
