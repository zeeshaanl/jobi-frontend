import React from 'react';
import config from 'react-global-configuration';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

class JobPost extends React.Component {
    constructor(props) {
        super();
        this.state = {
            bookmarked: props.bookmarked
        }
        this.bookmarkHandler = this.bookmarkHandler.bind(this);
    }
    bookmarkHandler() {
        const url = config.get('JOBS_ENDPOINT') + this.props.id;
        const data = { bookmarked: !this.state.bookmarked }
        var that = this
        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        }).then(res => res.json())
            .catch(error => console.log('Error: ', error))
            .then(response => {
                that.setState({
                    bookmarked: !this.state.bookmarked
                });
            });
    }
    render() {
        return (
            <div className={this.state.bookmarked ? 'bookmarked job-post' : 'job-post'}>
                <div className='job-heading'>
                    <div>
                        <span className='heading'>{this.props.company}</span>
                        <span className='heading bold'>{this.props.location}</span>
                        {
                            this.state.bookmarked ?
                                <FontAwesome name='heart' className='hover-hand' onClick={this.bookmarkHandler} /> :
                                <FontAwesome name='heart-o' className='hover-hand' onClick={this.bookmarkHandler} />
                        }
                    </div>
                    <div className='time-posted hidden-xs hidden-sm'>
                        <span>Posted at {moment(this.props.timePosted).format('hh:mm A')}</span>
                    </div>
                </div>

                <div className='job-description'>
                    <p>{this.props.description}</p>
                    <p className='hidden-md hidden-lg small'>Posted at {moment(this.props.timePosted).format('hh:mm A')}</p>
                </div>
            </div>
        );
    }
}

export default JobPost;
