import React from "react";
import ReactDOM from "react-dom";
import FontAwesome from "react-fontawesome";
import buildUrl from "build-url";

import SearchForm from "./SearchForm.js";
import JobPost from "./JobPost.js";
import NewsletterForm from "./NewsletterForm.js";
import apiClient from './api/client';

class Search extends React.Component {
    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            jobs: [],
            error: false
        };
    }

    async handleSubmit(evt) {
        evt.preventDefault();
        const formElements = evt.target.elements;
        const queryParams = {
            jobTitle: formElements.job_type.value.trim(),
            location: formElements.location.value.trim()
        };

        const that = this;

        try {
            const response = await apiClient.fetchJobs(queryParams);
            console.log(response, 'response');
            const { data } = response;
            console.log(response);
            that.setState({
                jobs: data,
                error: false
            });
            that.scrollToResults();
        } catch (error) {
            console.log(error);
            that.setState({
                error: 'Error receiving jobs'
            });
        }
    }

    scrollToResults() {
        const tesNode = ReactDOM.findDOMNode(this.refs.results);
        window.scrollTo(0, tesNode.offsetTop);
    }

    render() {
        const { error } = this.state;
        return (
            <React.Fragment>
                <div className="content search-container">
                    <SearchForm submitHandler={this.handleSubmit} />

                    {!error ? <div ref="results" className="search-results">
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
                    </div> : <div><h4>{error}</h4></div>}
                </div>
                <NewsletterForm />
            </React.Fragment>
        );
    }
}

export default Search;
