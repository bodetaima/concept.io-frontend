import React, { useState } from "react";
import { FormGroup, InputGroup, Checkbox, Classes, Button, Intent } from "@blueprintjs/core";
import styles from "./styles/creator.module.css";

function ProfileCreator({ onNameInput, onEmailInput, onPrivateInput, onPasswordInput }) {
    const [isPrivate, setIsPrivate] = useState(false);

    const handlePrivate = () => {
        setIsPrivate(!isPrivate);
        onPrivateInput(!isPrivate);
    };

    const handleNameInput = (e) => {
        onNameInput(e.target.value);
    };

    const handleEmailInput = (e) => {
        onEmailInput(e.target.value);
    };

    const handlePasswordInput = (e) => {
        onPasswordInput(e.target.value);
    };

    return (
        <div className={(styles.creator, Classes.DIALOG_BODY)}>
            <FormGroup label="Full Name" labelFor="fullname" labelInfo="(required)">
                <InputGroup id="fullname" placeholder="Enter your name..." onChange={handleNameInput} />
            </FormGroup>
            <FormGroup label="Email" labelFor="email" labelInfo="(required)">
                <InputGroup id="email" placeholder="Enter your email..." onChange={handleEmailInput} />
            </FormGroup>
            <Checkbox checked={isPrivate} label="Private" onChange={handlePrivate} />
            {isPrivate && (
                <FormGroup label="Password" labelFor="passwd" labelInfo="(required)">
                    <InputGroup
                        id="passwd"
                        type="password"
                        placeholder="Enter your password..."
                        onChange={handlePasswordInput}
                    />
                </FormGroup>
            )}
        </div>
    );
}

export default ProfileCreator;
