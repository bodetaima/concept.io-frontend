import React from "react";
import Routes from "@views/routes.jsx";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = "Concept";
    }

    render() {
        return <Routes />;
    }
}

export default Home;
