import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { auth } from "../firebase";
import * as routes from "../routes";

class LogoutLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a
                onClick={evt => {
                    evt.preventDefault();
                    this.props.setUserInStore(undefined);
                    auth.doSignOut();
                    window.location = routes.LOGIN;
                }}
            >
                LOGOUT
            </a>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUserInStore: user =>
            dispatch({
                type: "AUTH_USER_SET",
                authUser: user
            })
    };
}

export default compose(withRouter, connect(null, mapDispatchToProps))(
    LogoutLink
);
