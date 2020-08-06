import React from "react";
import { connect } from "react-redux";
import ProfileSelector from "./views/ProfileSelector";
import Home from "./views/Home";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        document.title = "Concept";
    }

    render() {
        return <>{this.props.loggedIn ? <Home /> : <ProfileSelector />}</>;
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn,
    };
};

export default connect(mapStateToProps)(App);
