import React from 'react';
import moment from 'moment';

export default class Offer extends React.Component {
    render() {
        return (
            <div className='offer col-xs-12 col-sm-6 col-md-3'>
                <p className='time'>Posted at {moment(this.props.timePosted).format('hh:mm')}</p>
                <p className='title'><a href={this.props.url}>{this.props.title}</a></p>
                <p className='company'>{this.props.company}</p>
                <p className='location'>{this.props.location}</p>
            </div>
        );
    }
}
