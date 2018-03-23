import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import config from "react-global-configuration";
import FontAwesome from "react-fontawesome";
import Calendar from "react-calendar";

import withAuthentication from "./withAuthentication";
import Skill from "./Skill.js";
import SimilarOffers from "./SimilarOffers.js";
import * as routes from "../routes";

import defaultImage from "./img/default.jpg";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var that = this;
        // set the responsive mobile header
        if (window.matchMedia("(max-width: 768px)").matches) {
            const headerStyle = document.getElementById("header").style;
            const bg = `url('${that.props.authUser.picture}') no-repeat`;
            headerStyle.background = bg;
            headerStyle["background-size"] = "cover";
            headerStyle.height = "50vh";
        }
    }


    // TODO: create a proper user profile that serves everything from firebase
    // TODO: modify Calendar component to highlight days on which user is booked
    render() {
        if (!this.props.authUser) {
            return null;
        } else {
            return (
                <div className="content profile">
                    <div className="row">
                        <div className="container">
                            <div className="col-md-3 hidden-xs hidden-sm">
                                <img
                                    className="profile-picture"
                                    src={
                                        this.props.authUser.photoURL
                                            ? this.props.authUser.photoURL
                                            : defaultImage
                                    }
                                    alt={this.props.authUser.username}
                                />
                            </div>
                            <div className="col-md-6">
                                <section className="full-name">
                                    {this.props.authUser.firstName}{" "}
                                    {this.props.authUser.lastName}
                                </section>
                                <section className="job-title">
                                    {this.props.authUser.jobTitle}
                                </section>
                                <hr className="half-width" />
                                <section className="availability">
                                    {this.props.authUser.availability}
                                </section>
                                <hr className="half-width" />
                                <section className="social-links">
                                    <div className="link-container">
                                        <FontAwesome name="twitter" size="2x" />
                                        <FontAwesome name="behance" size="2x" />
                                        <FontAwesome
                                            name="facebook-square"
                                            size="2x"
                                        />
                                        <FontAwesome
                                            name="dribbble"
                                            size="2x"
                                        />
                                    </div>
                                </section>
                                <hr className="half-width" />
                                <section className="location">
                                    <FontAwesome name="map-marker" size="2x" />
                                    <span className="text">
                                        {this.props.authUser.city},
                                        {" " + this.props.authUser.country}
                                    </span>
                                </section>
                            </div>
                            <div className="col-md-3">
                                <Calendar
                                    className="hidden-xs hidden-sm"
                                    date={new Date()}
                                />
                            </div>
                        </div>
                        <div className="container">
                            <hr className="grey" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <Tabs>
                                <TabList>
                                    <Tab>About</Tab>
                                    <Tab>Skills</Tab>
                                    <Tab>Friends</Tab>
                                    <Tab>Favorites</Tab>
                                </TabList>

                                <TabPanel>
                                    <p>{this.props.authUser.about}</p>
                                </TabPanel>

                                <TabPanel>
                                    {this.props.authUser.skills &&
                                        this.props.authUser.skills.map(
                                            skill => (
                                                <Skill
                                                    key={skill}
                                                    content={skill}
                                                />
                                            )
                                        )}
                                </TabPanel>

                                <TabPanel />

                                <TabPanel />
                            </Tabs>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <SimilarOffers heading="Job offers based on your profile" />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    authUser: state.sessionprops.authUser
});

export default compose(
    withAuthentication,
    withRouter,
    connect(mapStateToProps)
)(UserProfile);
