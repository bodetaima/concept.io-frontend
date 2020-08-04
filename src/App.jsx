import React from "react";
import { Navbar } from "@blueprintjs/core/lib/esm/components/navbar/navbar";
import { NavbarGroup } from "@blueprintjs/core/lib/esm/components/navbar/navbarGroup";
import { NavbarHeading } from "@blueprintjs/core/lib/esm/components/navbar/navbarHeading";
import { Alignment } from "@blueprintjs/core/lib/esm/common/alignment";
import { Button } from "@blueprintjs/core/lib/esm/components/button/buttons";
import { Drawer } from "@blueprintjs/core/lib/esm/components/drawer/drawer";
import { Position } from "@blueprintjs/core/lib/esm/common/position";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false,
        };
    }

    componentDidMount() {
        document.title = "Concept";
    }

    handleOpenDrawer = () => {
        this.setState({ isDrawerOpen: true });
    };

    handleCloseDrawer = () => {
        this.setState({ isDrawerOpen: false });
    };

    render() {
        return (
            <>
                <Navbar className="bp3-dark">
                    <NavbarGroup align={Alignment.LEFT}>
                        <Button className="bp3-minimal" onClick={this.handleOpenDrawer} icon="menu" />
                        <Drawer
                            isOpen={this.state.isDrawerOpen}
                            canEscapeKeyClose
                            canOutsideClickClose
                            onClose={this.handleCloseDrawer}
                            lazy
                            title="Your Concept"
                            position={Position.LEFT}
                            size={Drawer.SIZE_SMALL}
                        >
                            Hello
                        </Drawer>
                        <NavbarHeading>Concept</NavbarHeading>
                    </NavbarGroup>
                    <NavbarGroup align={Alignment.RIGHT}>
                        <Button className="bp3-minimal" text="Share" />
                        <Button className="bp3-minimal" text="Add notes" />
                    </NavbarGroup>
                </Navbar>
                <div>Hello, Concept!</div>
            </>
        );
    }
}

export default App;
