import React, { useState } from "react";
import { Navbar } from "@blueprintjs/core/lib/esm/components/navbar/navbar";
import { NavbarGroup } from "@blueprintjs/core/lib/esm/components/navbar/navbarGroup";
import { NavbarHeading } from "@blueprintjs/core/lib/esm/components/navbar/navbarHeading";
import { Alignment } from "@blueprintjs/core/lib/esm/common/alignment";
import { Button } from "@blueprintjs/core/lib/esm/components/button/buttons";
import { Drawer } from "@blueprintjs/core/lib/esm/components/drawer/drawer";
import { Position } from "@blueprintjs/core/lib/esm/common/position";
import { connect } from "react-redux";
import { Popover, PopoverInteractionKind } from "@blueprintjs/core";
import { logout } from "../store/actions";

const NavBar = (props) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <Navbar className="bp3-dark">
            <NavbarGroup align={Alignment.LEFT}>
                <Button className="bp3-minimal" onClick={handleOpenDrawer} icon="menu" />
                <Drawer
                    isOpen={isDrawerOpen}
                    canEscapeKeyClose
                    canOutsideClickClose
                    onClose={handleCloseDrawer}
                    lazy
                    title="Your Concept"
                    position={Position.LEFT}
                    size={Drawer.SIZE_SMALL}
                >
                    Hello
                </Drawer>
                <NavbarHeading>{props.title}</NavbarHeading>
            </NavbarGroup>
            <NavbarGroup align={Alignment.RIGHT}>
                <Button className="bp3-minimal" text="Share" />
                <Button className="bp3-minimal" text="Add notes" />
                <Popover
                    interactionKind={PopoverInteractionKind.CLICK}
                    popoverClassName="bp3-popover-content-sizing"
                    position={Position.BOTTOM_RIGHT}
                >
                    <Button className="bp3-minimal" text={props.profile.name} />
                    <div>
                        <p>Do you want to change profile?</p>
                        <Button
                            onClick={props.logout}
                            className="bp3-intent-danger"
                            style={{ marginRight: 5 }}
                            text="Logout"
                        />
                    </div>
                </Popover>
            </NavbarGroup>
        </Navbar>
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.auth.profile,
    };
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
