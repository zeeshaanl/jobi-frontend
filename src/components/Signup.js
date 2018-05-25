import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";

import { auth, db } from "../firebase";
import * as routes from "../routes";

import MaskedInput from "react-text-mask";
import Checkbox from "rc-checkbox";
import emailMask from "text-mask-addons/dist/emailMask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import Footer from "./Footer.js";
import apiClient from './api/client';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';

let numberMask = createNumberMask({
    prefix: "",
    suffix: "",
    includeThousandsSeparator: false
});

const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    phoneno: "",
    password: "",
    password2: "",
    tnc: false,
    error: null
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    componentDidMount() {
        if (this.props.authUser) {
            this.props.history.push(routes.PROFILE);
        }
    }

    onSubmit = async event => {
        event.preventDefault();

        const { firstName, lastName, email, phoneno, password } = this.state;
        const { history } = this.props;

        try {
            const authUser = await doCreateUserWithEmailAndPassword(email, password);
            const authIdToken = await authUser.getIdToken();
            const resp = await apiClient.createUser(
                authIdToken,
                firstName,
                lastName,
                email,
                phoneno
            );
            console.log(resp, 'respo');
            // db.doCreateUser(
            //     authUser.uid,
            //     firstName,
            //     lastName,
            //     email,
            //     phoneno
            // );
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
        } catch (error) {
            console.dir(error);
            this.setState(byPropKey("error", error));
        }
    };

    render() {
        const {
            firstName,
            lastName,
            email,
            phoneno,
            password,
            password2,
            tnc,
            error
        } = this.state;

        const isInvalid =
            password !== password2 ||
            password === "" ||
            email === "" ||
            firstName === "" ||
            lastName === "" ||
            phoneno === "" ||
            tnc === false;

        return (
            <React.Fragment>
                <div className="content signup">
                    <h2>Please sign up</h2>
                    <form id="signup-form" onSubmit={this.onSubmit}>
                        <div className="row">
                            <div className="col-sm-3 col-sm-offset-3">
                                <MaskedInput
                                    mask={false}
                                    className="form-control input-field"
                                    placeholder="First Name"
                                    onChange={event =>
                                        this.setState(
                                            byPropKey(
                                                "firstName",
                                                event.target.value
                                            )
                                        )
                                    }
                                    id="first-name"
                                    name="firstName"
                                />
                            </div>
                            <div className="col-sm-3">
                                <MaskedInput
                                    mask={false}
                                    className="form-control input-field"
                                    placeholder="Last Name"
                                    onChange={event =>
                                        this.setState(
                                            byPropKey(
                                                "lastName",
                                                event.target.value
                                            )
                                        )
                                    }
                                    id="last-name"
                                    name="lastName"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 col-sm-offset-3">
                                <MaskedInput
                                    mask={false}
                                    className="form-control input-field"
                                    placeholder="Email"
                                    onChange={event =>
                                        this.setState(
                                            byPropKey(
                                                "email",
                                                event.target.value
                                            )
                                        )
                                    }
                                    id="email"
                                    name="email"
                                />
                            </div>
                            <div className="col-sm-3">
                                <MaskedInput
                                    mask={false}
                                    className="form-control input-field"
                                    placeholder="Phone Number"
                                    onChange={event =>
                                        this.setState(
                                            byPropKey(
                                                "phoneno",
                                                event.target.value
                                            )
                                        )
                                    }
                                    id="phoneno"
                                    name="phoneno"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3 col-sm-offset-3">
                                <MaskedInput
                                    mask={false}
                                    type="password"
                                    className="form-control input-field"
                                    placeholder="Password"
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
                            </div>
                            <div className="col-sm-3">
                                <MaskedInput
                                    mask={false}
                                    className="form-control input-field"
                                    placeholder="Confirm Password"
                                    type="password"
                                    onChange={event =>
                                        this.setState(
                                            byPropKey(
                                                "password2",
                                                event.target.value
                                            )
                                        )
                                    }
                                    id="password2"
                                    name="password2"
                                />
                            </div>
                        </div>
                        <div className="row">
                            {error && (
                                <p className="error center-align">
                                    {error.message}
                                </p>
                            )}
                            <div className="checkbox-container col-sm-5 col-sm-offset-4">
                                <Checkbox
                                    className="checkbox"
                                    onChange={event =>
                                        this.setState(
                                            byPropKey(
                                                "tnc",
                                                event.target.checked
                                            )
                                        )
                                    }
                                    name="tnc"
                                />
                                <label className="checkbox-label">
                                    I agree with the terms &amp; conditions and
                                    privacy policy
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="btn-container">
                                <button
                                    type="submit"
                                    disabled={isInvalid}
                                    className="btn btn-primary"
                                >
                                    Create Account
                                </button>
                            </div>
                            <p className="center-align">
                                Already have an account? Sign in
                            </p>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
});

export default compose(withRouter, connect(mapStateToProps))(Signup);
