import React from 'react';
import config from 'react-global-configuration';
import SimilarOffers from '../SimilarOffers/SimilarOffers';

export default class JobDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            company: '',
            description: '',
            location: '',
        }
        var that = this;
        fetch(config.get('apiUrl') + '/jobs').then(function(response) {
            return response.json();
        }).then(function(data){
            that.setState({
                title: data[0].title,
                company: data[0].company,
                location: data[0].location,
                description: data[0].description,
            })
        })
    }
    render() {
        return (
            <div className='content job-detail container'>
                <h1>
                    <span className='border-right'>{this.state.company}</span>
                    <span className='border-right'>{this.state.title}</span>
                    <span>{this.state.location}</span>
                </h1>
                <hr />
                <div className='container'>
                    <p className='dual-column'>{this.state.description}</p>

                    <div className='btn-container'>
                        <button type='submit' className='btn btn-primary'>Apply</button>
                    </div>
                </div>

                <SimilarOffers />
            </div>
        );
    }
}
