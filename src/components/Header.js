import React, { Component } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import { slide as Menu } from "react-burger-menu";
import logo from "./img/logo.jpg";
import { HOME, ABOUT, PROFILE } from "../routes";

export default class Header extends Component {
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
                        <div className="yellow-icon pull-right hidden-xs hidden-sm">
                            <a href={PROFILE}>
                                <FontAwesome name="user" size="2x" />
                            </a>
                        </div>
                        <h3 className="mobile-title hidden-md hidden-lg">
                            JOBI
                        </h3>
                    </div>
                </div>
            </header>
        );
    }
}
