import React, { Component } from "react";
import { Link } from "react-router-dom";

import { auth } from "../firebase";

const PasswordForgetPage = () => (
    <div>
        <h1>PasswordForget</h1>
        <PasswordForgetForm />
    </div>
);

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

const INITIAL_STATE = {
    email: "",
    error: null
};

class PasswordForgetForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email } = this.state;

        auth
            .doPasswordReset(email)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
            })
            .catch(error => {
                this.setState(byPropKey("error", error));
            });

        event.preventDefault();
    };

    render() {
        const { email, error } = this.state;

        const isInvalid = email === "";

        return (
            <div className="content login">
                <div className="row">
                    <div className="col-sm-3 center-block">
                        <form onSubmit={this.onSubmit}>
                            <input
                                value={this.state.email}
                                className="form-control input-field"
                                onChange={event =>
                                    this.setState(
                                        byPropKey("email", event.target.value)
                                    )
                                }
                                type="text"
                                placeholder="Email Address"
                            />
                            <div className="btn-container">
                                <button
                                    disabled={isInvalid}
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Reset My Password
                                </button>
                            </div>

                            {error && (
                                <p className="error center-align">
                                    {error.message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const PasswordForgetLink = () => (
    <p className="center-align">
        <Link to="/pw-forget">Forgot Password?</Link>
    </p>
);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };
