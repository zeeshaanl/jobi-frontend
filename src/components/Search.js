import React from "react";
import ReactDOM from "react-dom";
import config from "react-global-configuration";
import FontAwesome from "react-fontawesome";
import buildUrl from "build-url";

import SearchForm from "./SearchForm.js";
import JobPost from "./JobPost.js";
import NewsletterForm from "./NewsletterForm.js";

class Search extends React.Component {
    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            jobs: []
        };
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const formElements = evt.target.elements;
        const endpoint = buildUrl(config.get("JOBS_ENDPOINT"), {
            queryParams: {
                jobTitle: formElements.job_type.value.trim(),
                location: formElements.location.value.trim()
            }
        });
        const that = this;
        fetch(endpoint)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                that.setState({
                    jobs: data
                });
                that.scrollToResults();
            })
            .catch(err => console.error(err));
    }

    scrollToResults() {
        const tesNode = ReactDOM.findDOMNode(this.refs.results);
        window.scrollTo(0, tesNode.offsetTop);
    }

    render() {
        return (
            <React.Fragment>
                <div className="content search-container">
                    <SearchForm submitHandler={this.handleSubmit} />

                    <div ref="results" className="search-results">
                        <section className="alert-bar">
                            <FontAwesome name="bell" />
                            <span className="text">
                                Turn on email alerts for this search
                            </span>
                            <aside className="pull-right">
                                <FontAwesome className="icon" name="facebook" />
                                <FontAwesome className="icon" name="linkedin" />
                                <FontAwesome className="icon" name="xing" />
                            </aside>
                        </section>

                        {this.state.jobs.map(job => (
                            <JobPost key={job.id} {...job} />
                        ))}
                    </div>
                </div>
                <NewsletterForm />
            </React.Fragment>
        );
    }
}

export default Search;
