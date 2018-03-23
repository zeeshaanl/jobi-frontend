import React from "react";
import config from "react-global-configuration";
import SimilarOffers from "./SimilarOffers.js";

export default class JobDetail extends React.Component {
    constructor(props) {
        // TODO integrate this component to get props from API
        super(props);
        this.state = {
            ...props,
            // MOCK PROPS, should use API based props here
            companyName: "Google",
            title: "Google 2",
            location: "Berlin",
            description:
                "klsdjfa klsdfjlaskd fjasdklfj klasdjfalksd fja klsdjfa klsdfjlaskd fjasdklfj klasdjfalksd fja klsdjfa klsdfjlaskd fjasdklfj klasdjfalksd fja klsdjfa klsdfjlaskd fjasdklfj klasdjfalksd fja klsdjfa klsdfjlaskd fjasdklfj klasdjfalksd fja klsdjfa klsdfjlaskd fjasdklfj klasdjfalksd fja klsdjfa klsdfjlaskd fjasdklfj klasdjfalksd fja klsdjfa klsdfjlaskd fjasdklfj klasdjfalksd fja klsdjfa klsdfjlaskd fjasdklfj klasdjfalksd fja ",
            applyLink: "/job"
        };
    }
    render() {
        return (
            <div className="content job-detail container">
                <h1>
                    <span className="border-right">
                        {this.state.companyName}
                    </span>
                    <span className="border-right">{this.state.title}</span>
                    <span>{this.state.location}</span>
                </h1>
                <hr />
                <div className="container">
                    <p className="dual-column">{this.state.description}</p>

                    <div className="btn-container">
                        <a
                            className="btn btn-primary"
                            href={this.state.applyLink}
                        >
                            Apply
                        </a>
                    </div>
                </div>

                <SimilarOffers heading="Similar Offers" />
            </div>
        );
    }
}
