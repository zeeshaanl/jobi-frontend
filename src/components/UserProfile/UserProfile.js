import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import config from "react-global-configuration";
import FontAwesome from "react-fontawesome";
import Calendar from 'react-calendar';

import Skill from "./Skill.js";
import SimilarOffers from "../SimilarOffers/SimilarOffers.js";

export default class UserProfile extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user: {}
        }
        var that = this;
        fetch(config.get("apiUrl") + "/users").then(function(response) {
            return response.json();
        }).then(function(data){
            that.setState({
                user: data[0]
            })
        })
    }
    render() {
        return (
            <div className="content profile">
                <div className="row">
                    <div className="container">
                        <div className="col-md-3">
                            <img className="profile-picture" src={this.state.user.picture} alt={this.state.user.username} />
                        </div>
                        <div className="col-md-6">
                            <section className="full-name">
                                {this.state.user.firstName} {this.state.user.lastName}
                            </section>
                            <section className="job-title">
                                {this.state.user.jobTitle}
                            </section>
                            <hr className='half-width' />
                            <section className="availability">
                                {this.state.user.availability}
                            </section>
                            <hr className='half-width' />
                            <section className="social-links">
                                <div className="link-container">
                                    <FontAwesome name="twitter" size="2x"/>
                                    <FontAwesome name="behance" size="2x"/>
                                    <FontAwesome name="facebook-square" size="2x"/>
                                    <FontAwesome name="dribbble" size="2x"/>
                                </div>
                            </section>
                            <hr className='half-width' />
                            <section className="location">
                                <FontAwesome name="map-marker" size="2x"/>
                                <span className="text">
                                    {this.state.user.city},
                                    {" " + this.state.user.country}
                                </span>
                            </section>
                        </div>
                        <div className="col-md-3">
                            <Calendar />
                        </div>
                    </div>
                    <div className='container'>
                        <hr className='grey'/>
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
                                <p>{this.state.user.about}</p>
                            </TabPanel>

                            <TabPanel>
                                {this.state.user.skills &&
                                    this.state.user.skills.map(skill => <Skill key={skill} content={skill}/>)}
                            </TabPanel>

                            <TabPanel>

                            </TabPanel>

                            <TabPanel>

                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
                <div className="row">
                    <div className="container">

                        <SimilarOffers heading="Job offers based on your profile"/>
                    </div>
                </div>
            </div>
        );
    }
}
