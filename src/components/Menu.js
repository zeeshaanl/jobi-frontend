import React from "react";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";
import Dropdown from "react-simple-dropdown";
import { DropdownTrigger, DropdownContent } from "react-simple-dropdown";

import LogoutLink from "./Logout";
import * as routes from "../routes";
import defaultImage from "./img/default.jpg";

class Menu extends React.Component {
    render() {
        return (
            <Dropdown className="pull-right">
                <DropdownTrigger>
                    <div className="yellow-icon pull-right">
                        {this.props.authUser ? (
                            // TODO: replace with proper profile image handling
                            // <img className="user-icon" src={this.props.authUser.photoURL} />
                            <img className="user-icon" src={defaultImage} />
                        ) : (
                            <FontAwesome
                                className="menu-item"
                                name="user"
                                size="2x"
                            />
                        )}
                    </div>
                </DropdownTrigger>
                <DropdownContent>
                    <div className="arrow-up" />
                    {this.props.authUser ? (
                        <ul>
                            <li>
                                <a href={routes.PROFILE}>PROFILE</a>
                            </li>
                            <li>
                                <LogoutLink />
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li>
                                <a href={routes.LOGIN}>LOGIN</a>
                            </li>
                            <li>
                                <a href={routes.REGISTER}>REGISTER</a>
                            </li>
                        </ul>
                    )}
                </DropdownContent>
            </Dropdown>
        );
    }
}

const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Menu);
