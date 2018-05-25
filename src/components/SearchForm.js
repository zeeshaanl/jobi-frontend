import React from "react";
import MaskedInput from "react-text-mask";
import JobPost from "./JobPost.js";
import SimilarOffers from "./SimilarOffers.js";

class SearchForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="job-search-form">
                    <p>
                        MAKING FREELANCING RELIABLE FOR FREELANCERS AND
                        BUSINESSES.
                    </p>
                    <p>FIND YOUR WORK NOW!</p>
                    <form
                        action=""
                        method="GET"
                        id="job_search_form"
                        onSubmit={this.props.submitHandler}
                    >
                        <div>
                            <h1 className="main-text">I'm a</h1>
                            <MaskedInput
                                mask={false}
                                className="search-field main-text"
                                placeholder="UX Developer"
                                id="job_type"
                                name="job_type"
                            />
                            <datalist id="type-datalist" />
                        </div>
                        <div>
                            <h1 className="main-text">looking for a job in</h1>
                            <MaskedInput
                                mask={false}
                                className="search-field main-text"
                                placeholder="Berlin"
                                id="location"
                                name="location"
                            />
                            <datalist id="location-datalist" />
                        </div>
                        <div><h1 className="main-text">as a Freelancer</h1></div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="container">
                    <SimilarOffers renderHeading={false} />
                </div>
            </React.Fragment>
        );
    }
}

export default SearchForm;
