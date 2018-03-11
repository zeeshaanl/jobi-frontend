import React from 'react';


export default class Skill extends React.Component {
    render() {
        return (
            <span className='skill'>
                {this.props.content}
            </span>
        );
    }
}
