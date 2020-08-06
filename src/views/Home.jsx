import React from "react";
import NavBar from "../components/NavBar";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = "Concept";
    }

    render() {
        return (
            <>
                <NavBar title="Concept" />
                <div>Hello, Concept!</div>
            </>
        );
    }
}

export default Home;
