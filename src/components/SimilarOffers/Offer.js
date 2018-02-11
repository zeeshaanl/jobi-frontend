import React from 'react';

export default class Offer extends React.Component {
    render() {
        return (
            <div className='offer col-xs-12 col-sm-6 col-md-3'>
                <p className='time'>{this.props.time}</p>
                <p className='title'><a href={this.props.url}>{this.props.title}</a></p>
                <p className='company'>{this.props.company}</p>
                <p className='location'>{this.props.location}</p>
            </div>
        );
    }
}
