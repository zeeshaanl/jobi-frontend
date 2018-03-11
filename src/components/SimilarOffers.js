import React from 'react';
import config from 'react-global-configuration';
import Offer from './Offer.js';

const scrollStyles = {
    height: '200px'
}

export default class SimilarOffers extends React.Component {
    constructor(props) {
        super();
        var that = this;
        this.state =  {
            jobs: []
        }
        fetch(config.get('apiUrl') + '/jobs').then(function(response) {
            return response.json();
        }).then(function(data){
            that.setState({
                jobs: data.slice(0, 4)
            })
        })
    }
    render() {
        return (
            <div className='similar-offers'>

                {this.props.heading &&
                        <div className='row'>
                            <div className='col-xs-12 col-sm-6'>
                                <h2>{this.props.heading}</h2>
                            </div>
                        </div>
                }

                <div className='row'>
                    <div className='scroll'>
                        {this.state.jobs.map(job => <Offer key={job.id} {...job} />)}
                    </div>
                </div>
            </div>
        );
    }
}
