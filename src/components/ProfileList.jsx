import React from "react";
import { Card, Elevation, Button, Text, Divider } from "@blueprintjs/core";

function ProfileList({ pending, profile, clicked }) {
    return (
        <Card interactive={true} elevation={Elevation.TWO} style={{ margin: 10 }} key={profile.id}>
            <Text ellipsize={true}>
                <strong>{profile.name}</strong>
            </Text>
            <Text ellipsize={true}>{profile.email}</Text>
            <Divider />
            <Button loading={pending} text="Select" onClick={() => clicked(profile)} />
        </Card>
    );
}

export default ProfileList;
