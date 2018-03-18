import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
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
                this.props.setUserInStore(user);
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey("error", error));
            });

        event.preventDefault();
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === "" || email === "";

        return (
            <div className="content login">
                <h2>Please log in</h2>

                <form id="login-form" onSubmit={this.onSubmit}>
                    <div className="row">
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

function mapDispatchToProps(dispatch) {
    return {
        setUserInStore: user =>
            dispatch({
                type: "AUTH_USER_SET",
                authUser: user
            })
    };
}

export default connect(null, mapDispatchToProps)(withRouter(Login));
