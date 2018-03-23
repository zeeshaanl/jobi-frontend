import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import FontAwesome from "react-fontawesome";

import logo from "./img/logo.jpg";
import { HOME, ABOUT, PROFILE } from "../routes";
import LogoutButton from "./Logout";
import Menu from "./Menu";
import withAuthentication from "./withAuthentication";

class Header extends Component {
    render() {
        return (
            <header id="header" className="header container-fluid">
                <div className="row">
                    <div className="col-xs-6 col-sm-3">
                        <div className="yellow-icon">
                            <a id="about" className="menu-item" href={ABOUT}>
                                <FontAwesome name="bars" size="2x" />
                            </a>
                        </div>
                    </div>
                    <div className="logo-container col-sm-6 hidden-xs hidden-sm">
                        <Link to={HOME}>
                            <img className="logo" src={logo} alt="Jobi logo" />
                        </Link>
                    </div>
                    <div className="col-xs-6 col-sm-3 pull-right">
                        <Menu />
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Header);
