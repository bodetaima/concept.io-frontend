import React, { useState } from "react";
import { Navbar } from "@blueprintjs/core/lib/esm/components/navbar/navbar";
import { NavbarGroup } from "@blueprintjs/core/lib/esm/components/navbar/navbarGroup";
import { NavbarHeading } from "@blueprintjs/core/lib/esm/components/navbar/navbarHeading";
import { Alignment } from "@blueprintjs/core/lib/esm/common/alignment";
import { Button } from "@blueprintjs/core/lib/esm/components/button/buttons";
import { Drawer } from "@blueprintjs/core/lib/esm/components/drawer/drawer";
import { Position } from "@blueprintjs/core/lib/esm/common/position";

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
            </NavbarGroup>
        </Navbar>
    );
};

export default NavBar;
