import React, { Component } from "react";

import { auth } from "../firebase";

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

const INITIAL_STATE = {
    password: "",
    password2: "",
    error: null
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { password } = this.state;

        auth
            .doPasswordUpdate(password)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
            })
            .catch(error => {
                this.setState(byPropKey("error", error));
            });

        event.preventDefault();
    };

    render() {
        const { password, password2, error } = this.state;

        const isInvalid = password !== password2 || password === "";

        return (
            <div className="content login">
                <div className="row">
                    <div className="col-sm-3 center-block">
                        <form onSubmit={this.onSubmit}>
                            <input
                                value={password}
                                className="form-control input-field"
                                onChange={event =>
                                    this.setState(
                                        byPropKey(
                                            "password",
                                            event.target.value
                                        )
                                    )
                                }
                                type="password"
                                placeholder="New Password"
                            />
                            <input
                                value={password2}
                                className="form-control input-field"
                                onChange={event =>
                                    this.setState(
                                        byPropKey(
                                            "password2",
                                            event.target.value
                                        )
                                    )
                                }
                                type="password"
                                placeholder="Confirm New Password"
                            />
                            <div className="btn-container">
                                <button
                                    disabled={isInvalid}
                                    className="btn btn-primary"
                                    type="submit"
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

export default PasswordChangeForm;
