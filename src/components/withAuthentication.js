import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { firebase } from "../firebase";
import * as routes from "../routes";

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        componentDidMount() {
            const { onSetAuthUser } = this.props;

            firebase.auth.onAuthStateChanged(authUser => {
                if (authUser) {
                    onSetAuthUser(authUser);
                } else {
                    this.props.history.push(routes.LOGIN);
                    onSetAuthUser(null);
                }
            });
        }

        render() {
            return <Component />;
        }
    }

    const mapStateToProps = state => {
        return {
            authUser: state.sessionState.authUser
        };
    };

    const mapDispatchToProps = dispatch => ({
        onSetAuthUser: authUser => dispatch({ type: "AUTH_USER_SET", authUser })
    });

    return connect(mapStateToProps, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
