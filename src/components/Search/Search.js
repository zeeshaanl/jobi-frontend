import React from 'react';
import config from 'react-global-configuration';
import FontAwesome from 'react-fontawesome';

import SearchForm from '../SearchForm/SearchForm.js';
import JobPost from '../JobPost/JobPost.js';
import NewsletterForm from '../NewsletterForm/NewsletterForm.js';

class Search extends React.Component {
    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            jobs: [],
            filteredJobs: [],
        }
        var that = this;
        fetch(config.get('apiUrl') + '/jobs').then(function(response) {
            return response.json();
        }).then(function(data) {
            that.setState({
                jobs: data,
                filteredJobs: data.slice(0, 4)
            });
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        let keyword = evt.target.elements.keyword.value.trim();
        let location = evt.target.elements.location.value.trim();
        let jobType = evt.target.elements.job_type.value.trim();

        this.setState({
            filteredJobs: this.state.jobs.filter(job => {
                return job.location.toLowerCase().includes(location)
            })
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className='content search-container'>
                    <SearchForm submitHandler={this.handleSubmit} />

                    <div className='search-results'>
                        <section className='alert-bar'>
                            <FontAwesome name='bell' />
                            <span className='text'>Turn on email alerts for this search</span>
                            <aside className='pull-right'>
                                <FontAwesome className='icon' name='facebook' />
                                <FontAwesome className='icon' name='linkedin' />
                                <FontAwesome className='icon' name='xing' />
                            </aside>
                        </section>

                        {this.state.filteredJobs.map(job => <JobPost key={job.id} {...job} />)}
                    </div>
                </div>
                <NewsletterForm />
            </React.Fragment>
        );
    }
}

export default Search;
