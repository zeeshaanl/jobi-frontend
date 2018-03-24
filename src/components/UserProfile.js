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
            // TODO: use proper PhotoURL from firebase
            const photoURL =
                this.props.authUser && this.props.authUser.photoURL
                    ? defaultImage // this.props.authUser.photoURL
                    : defaultImage;
            const bg = `url('${photoURL}') no-repeat`;
            headerStyle.background = bg;
            headerStyle["background-size"] = "cover";
            headerStyle.height = "50vh";
        }
    }

    // TODO: create a proper user profile that serves everything from firebase or an API
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
                                    Zeeshan Lakdawala
                                </section>
                                <section className="job-title">
                                    Front-end developer
                                </section>
                                <hr className="half-width" />
                                <section className="availability">
                                    AVAILABLE
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
                                    <span className="text">City, Location</span>
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
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed aliquam at purus in
                                        consequat. Morbi in lectus commodo,
                                        fermentum diam a, feugiat magna. Nullam
                                        ac nisl ut nisi imperdiet elementum sit
                                        amet sit amet orci. Sed ac nisi in risus
                                        ultrices pretium. In maximus vitae metus
                                        quis rutrum. Duis in purus at turpis
                                        ultricies luctus ac quis felis. Aliquam
                                        vitae rutrum est. Cras sit amet posuere
                                        lectus. Ut sit amet blandit nunc. Sed
                                        vehicula ullamcorper ullamcorper.
                                        Vestibulum pellentesque, nisi vitae
                                        suscipit volutpat, mauris tortor tempus
                                        nibh, nec aliquam augue nisl nec ligula.
                                        Nulla vulputate, turpis eget aliquam
                                        lobortis, mi lectus luctus leo, a cursus
                                        justo ante vel mauris. Fusce commodo
                                        commodo turpis ac posuere. Sed et orci
                                        scelerisque, rutrum ex ac, pretium
                                        velit. Cras pretium euismod dui sed
                                        laoreet. Vivamus lacinia, turpis eu
                                        porttitor pharetra, arcu diam dignissim
                                        nunc, sit amet volutpat leo diam eget
                                        orci. Curabitur eros urna, mollis ac
                                        felis eget, facilisis euismod neque.
                                        Aliquam sit amet purus a nisl finibus
                                        ullamcorper. Praesent facilisis a enim
                                        in semper. Sed sit amet cursus ligula,
                                        vel luctus sem. Morbi eu dui suscipit,
                                        hendrerit arcu id, rhoncus ante. Nulla
                                        sed mattis nulla. Vivamus eget
                                        pellentesque dolor. Sed aliquet dolor
                                        vitae magna vulputate, sed mattis neque
                                        sagittis. Vivamus ultricies metus a
                                        posuere aliquet. Cras aliquam ligula ac
                                        auctor iaculis. Nulla fermentum neque at
                                        nunc luctus, non placerat ante
                                        tincidunt. Donec faucibus turpis felis,
                                        eget auctor odio mattis non. Praesent
                                        finibus, orci nec elementum consectetur,
                                        velit lorem posuere nisl, vitae
                                        ultricies diam quam et odio. Aliquam
                                        porta, odio ac fermentum dignissim,
                                        velit lectus blandit arcu, ornare
                                        facilisis nulla velit at enim. Nunc
                                        bibendum quam elementum maximus
                                        fermentum. Orci varius natoque penatibus
                                        et magnis dis parturient montes,
                                        nascetur ridiculus mus. Vivamus
                                        consequat lectus eu rutrum tincidunt.
                                        Proin rutrum libero ligula, ut iaculis
                                        orci convallis vel. Donec sed mi vel
                                        ante auctor sollicitudin. Aenean quis
                                        enim eget mi vulputate rutrum.
                                        Pellentesque sed tortor lacinia nunc
                                        laoreet posuere vel eget turpis. Aenean
                                        vitae facilisis quam. Nulla ullamcorper
                                        tempor blandit. Mauris sit amet
                                        fringilla diam, et ullamcorper velit.
                                        Interdum et malesuada fames ac ante
                                        ipsum primis in faucibus. In hac
                                        habitasse platea dictumst. Praesent eget
                                        massa a velit lobortis blandit. Nullam
                                        volutpat nulla enim, nec ultrices eros
                                        laoreet sed. Ut id risus at metus
                                        tincidunt consectetur. Quisque auctor
                                        diam odio, vitae vulputate risus
                                        pharetra sit amet. Etiam et venenatis
                                        sapien, sed sodales mauris. Vivamus
                                        varius, mi id eleifend cursus, leo neque
                                        lobortis tortor, vel consequat neque
                                        lacus vitae quam. Ut in interdum dui,
                                        sed condimentum mi. Aliquam erat
                                        volutpat. In volutpat vitae urna nec
                                        placerat. Sed maximus, sapien vel
                                        aliquet euismod, dolor urna cursus erat,
                                        in suscipit tellus velit et elit.
                                        Vivamus mattis enim ac ex ornare
                                        condimentum. Proin nec feugiat magna.
                                        Pellentesque habitant morbi tristique
                                        senectus et netus et malesuada fames ac
                                        turpis egestas. Donec at iaculis libero.
                                        Maecenas vestibulum, orci at lobortis
                                        elementum, purus risus posuere sapien,
                                        ac maximus massa dolor vitae orci. In
                                        pulvinar sem nec ultrices luctus.
                                        Maecenas sit amet massa dictum, euismod
                                        felis at, aliquam mauris. Integer
                                        viverra in leo gravida sollicitudin.
                                        Praesent sed purus et est tristique
                                        molestie sed et metus.
                                    </p>
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
    authUser: state.sessionState.authUser
});

export default compose(
    withAuthentication,
    withRouter,
    connect(mapStateToProps)
)(UserProfile);
