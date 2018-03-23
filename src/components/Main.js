import React from "react";
import { Route, Switch } from "react-router-dom";

import Search from "./Search.js";
import Signup from "./Signup.js";
import Login from "./Login.js";
import JobDetail from "./JobDetail.js";
import About from "./About.js";
import UserProfile from "./UserProfile.js";
import { PasswordForgetForm } from "./PasswordForget";
import PasswordChangeForm from "./PasswordChange";
import NotFound from "./404";

import * as routes from "../routes";

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={routes.HOME} component={Search} />
                <Route exact path={routes.REGISTER} component={Signup} />
                <Route exact path={routes.LOGIN} component={Login} />
                <Route exact path={routes.JOB_DETAIL} component={JobDetail} />
                <Route exact path={routes.ABOUT} component={About} />
                <Route exact path={routes.PROFILE} component={UserProfile} />
                <Route
                    exact
                    path={routes.PASSWORD_FORGET}
                    component={PasswordForgetForm}
                />
                <Route
                    exact
                    path={routes.PASSWORD_CHANGE}
                    component={PasswordChangeForm}
                />
                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}
