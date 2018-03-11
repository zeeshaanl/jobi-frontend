import React from 'react';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

export default class App extends React.Component {
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
