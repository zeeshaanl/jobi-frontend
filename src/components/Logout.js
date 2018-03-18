import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { auth } from "../firebase";
import * as routes from "../routes";

class LogoutButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                type="button"
                onClick={() => {
                    this.props.setUserInStore(undefined);
                    window.location = routes.LOGIN;
                    auth.doSignOut();
                }}
            >
                Sign Out
            </button>
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
    LogoutButton
);
