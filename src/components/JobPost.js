import React from "react";
import config from "react-global-configuration";
import FontAwesome from "react-fontawesome";
import moment from "moment";
import apiClient from './api/client';
import { connect } from 'react-redux';
import withAuthentication from './withAuthentication';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

const fontStates = {
    default: 'heart-o',
    loading: 'spinner',
    success: 'heart',
    error: 'times-circle'
};

class JobPost extends React.Component {
    constructor(props) {
        super();
        this.state = {
            bookmarkState: props.bookmarked
        };
        this.bookmarkHandler = this.bookmarkHandler.bind(this);
    }

    async bookmarkHandler(jobId) {
        // TODO: implement this method to call the bookmarking API
        // that shows bookmarked jobs on the user's profile
        this.setState({
            bookmarkState: 'loading'
        });
        try {
            const userIdToken = await this.props.authUser.getIdToken();

            await apiClient.addJobToFavourites(userIdToken, this.props.id);
            this.setState({
                bookmarkState: 'success'
            });
        } catch (e) {
            this.setState({
                bookmarkState: 'error'
            });
        }
    }

    render() {
        // TODO: redirect user to Job Detail page and use applyLink
        const { bookmarkState } = this.state;
        return (
            <div
                className={
                    bookmarkState ? "bookmarked job-post" : "job-post"
                }
            >
                <div className="job-heading">
                    <div>
                        <span className="heading">
                            <h3 className="heading-bold">{this.props.title}</h3>
                        </span>
                        <span className="heading">
                            {this.props.companyName}
                        </span>
                        <span className="heading bold">{this.props.location}</span>
                        <FontAwesome
                            name={Object.keys(fontStates).includes(bookmarkState) ? fontStates[this.state.bookmarkState] : fontStates['default']}
                            className="hover-hand"
                            onClick={() => this.bookmarkHandler(this.props.id)}
                        />
                    </div>
                    {this.state.bookmarkState === 'error' && <div>Error setting favourite</div>}
                </div>
                <div className="job-description">
                    <p>
                        <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
                        <br />
                        <h4 className='c-apply-link'>
                            Apply Link: <a target='_blank' href={this.props.applyLink}>{this.props.applyLink}</a>
                        </h4>
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
});

export default compose(
    connect(mapStateToProps)
)(JobPost);
