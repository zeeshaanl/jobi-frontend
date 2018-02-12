import React from 'react';
import config from 'react-global-configuration';
import SearchForm from '../SearchForm/SearchForm.js';
import JobPost from '../JobPost/JobPost.js';
import NewsletterForm from '../NewsletterForm/NewsletterForm.js';

class Search extends React.Component {
    constructor(props) {
        super();
        this.state = {
            jobs: []
        }
        var that = this;
        fetch(config.get('apiUrl') + '/jobs').then(function(response) {
            return response.json();
        }).then(function(data) {
            that.setState({
                jobs: data.slice(0, 4)
            });
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className='content search-container'>
                    <SearchForm />

                    <div className='search-results'>
                        {this.state.jobs.map(job => <JobPost key={job.id} {...job} />)}
                    </div>
                </div>
                <NewsletterForm />
            </React.Fragment>
        );
    }
}

export default Search;
