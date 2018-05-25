import React from "react";
import config from "react-global-configuration";
import FontAwesome from "react-fontawesome";
import moment from "moment";

class JobPost extends React.Component {
    constructor(props) {
        super();
        this.state = {
            bookmarked: props.bookmarked
        };
        this.bookmarkHandler = this.bookmarkHandler.bind(this);
    }

    bookmarkHandler() {
        // TODO: implement this method to call the bookmarking API
        // that shows bookmarked jobs on the user's profile
    }

    render() {
        // TODO: redirect user to Job Detail page and use applyLink
        return (
            <div
                className={
                    this.state.bookmarked ? "bookmarked job-post" : "job-post"
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
                        {this.state.bookmarked ? (
                            <FontAwesome
                                name="heart"
                                className="hover-hand"
                                onClick={this.bookmarkHandler}
                            />
                        ) : (
                            <FontAwesome
                                name="heart-o"
                                className="hover-hand"
                                onClick={this.bookmarkHandler}
                            />
                        )}
                    </div>
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

export default JobPost;
