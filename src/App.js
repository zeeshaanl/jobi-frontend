import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import { connect } from 'react-redux';
import withAuthentication from './components/withAuthentication';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div id="main">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default compose(
    withAuthentication
)(App);
