import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import MaskedInput from "react-text-mask";

import { PasswordForgetLink } from "./PasswordForget";
import { auth } from "../firebase";
import * as routes from "../routes";

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

const INITIAL_STATE = {
    email: "",
    password: "",
    error: null
};

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        const { history } = this.props;

        auth
            .doSignInWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user, 'doSignInWithEmailAndPassword callback - user');
                user.getIdToken().then(data => console.log(data, 'user.getIdToken'));
                this.props.setUserInStore(user);
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey("error", error));
            });

        event.preventDefault();
    };

    componentDidMount() {
        if (this.props.authUser) {
            this.props.history.push(routes.PROFILE);
        }
    }

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === "" || email === "";

        return (
            <div className="content login">
                <h2>Please log in</h2>

                <form id="login-form" onSubmit={this.onSubmit}>
                    <div className="container-fluid">
                        <div className="col-sm-3 center-block">
                            <MaskedInput
                                mask={false}
                                className="form-control input-field"
                                placeholder="Email"
                                onChange={event =>
                                    this.setState(
                                        byPropKey("email", event.target.value)
                                    )
                                }
                                id="email"
                                name="email"
                            />
                            <MaskedInput
                                mask={false}
                                className="form-control input-field"
                                placeholder="Password"
                                type="password"
                                onChange={event =>
                                    this.setState(
                                        byPropKey(
                                            "password",
                                            event.target.value
                                        )
                                    )
                                }
                                id="password"
                                name="password"
                            />
                            <div className="btn-container">
                                {error && (
                                    <p className="error center-align">
                                        {error.message}
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    disabled={isInvalid}
                                    className="btn btn-primary"
                                >
                                    Login
                                </button>
                            </div>
                            <p className="center-align">
                                Don't have an account?
                                <Link to={routes.REGISTER}> Sign Up!</Link>
                            </p>
                            <PasswordForgetLink />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
});

const mapDispatchToProps = dispatch => {
    return {
        setUserInStore: user =>
            dispatch({
                type: "AUTH_USER_SET",
                authUser: user
            })
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Login);
