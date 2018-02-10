import React from 'react';
import ContactForm from './ContactForm.js';
import bigLogo from './big_logo.png';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: null
        }
    }

    componentWillMount(){
        document.getElementById('body').className='blue-bg'
    }

    componentWillUnmount(){
        document.getElementById('body').className=''
    }

    tabClickHandler(index) {
        if (index !== this.state.activeIndex) {
            this.setState({
                activeIndex: index
            })
        } else {
            this.setState({
                activeIndex: null
            })
        }
    }

    clearTabContent() {
        document.querySelectorAll('.tab-content').forEach(function(current) {
            current.innerHTML = '';
        })
    }

    render() {
        this.clearTabContent();
        if (this.state.activeIndex) {
            let tabClass = 'tab' + this.state.activeIndex;
            let content = document.getElementById(tabClass + '-content').innerHTML;
            document.getElementById('selected').innerHTML = content;
            document.querySelector('#' + tabClass + ' + ' + '.tab-content').innerHTML = content;
        }
        return (
            <React.Fragment>
                <div className='content about'>
                    <div className='container'>
                        <div className='col-md-7'>
                            <ul className='tab-list'>
                                <div className='tab-group'>
                                    <li id='tab1' className='tab' onClick={() => this.tabClickHandler(1)}>
                                        <span>About</span>
                                    </li>
                                    <div className='tab-content'>

                                    </div>
                                </div>
                                <div className='tab-group'>
                                    <li id='tab2' className='tab' onClick={() => this.tabClickHandler(2)}>
                                        <span>Freelancer Kit</span>
                                    </li>
                                    <div className='tab-content'>

                                    </div>
                                </div>
                                <div className='tab-group'>
                                    <li id='tab3' className='tab' onClick={() => this.tabClickHandler(3)}>
                                        <span>Contact</span>
                                    </li>
                                    <div className='tab-content'>

                                    </div>
                                </div>
                            </ul>
                            <hr />
                            <a href='#' className='bottom-link'>Privacy policy</a>
                            <a href='#' className='bottom-link'>Copyright notification</a>
                            <a href='#' className='bottom-link'>Terms of use</a>
                            <a href='#' className='bottom-link'>I want to join the team</a>
                        </div>
                        <div className='col-md-5 selected-container'>
                            <div id='selected'>
                                <img src={bigLogo} className='about-logo' />
                            </div>
                        </div>
                    </div>
                </div>
                <div id='tab1-content' className='hidden'>
                    <p>
                        When you work for yourself, you always know who you're doing the work for. All the time you spend is an investment in yourself, your own experience, your own success, your own failure and joy.
                    </p>
                    <p>Lea</p>
                </div>
                <div id='tab2-content' className='hidden'>
                    <p>Whichever your starting point, Welcome to Your Independence, aims to clerly and consisely guide you through the process of going freelance and how to make it as a sustainable, successful independent worker</p>
                    <div className='row'>
                        <div className='col-md-6'>
                            <ul>
                                <li>Quarterly Tax Calculator</li>
                                <li>Free invoice template</li>
                                <li>How to freelance</li>
                                <li>Freelance benefits</li>
                                <li>Self employement tax calculator</li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <ul>
                                <li>Quarterly Tax Calculator</li>
                                <li>Free invoice template</li>
                                <li>How to freelance</li>
                                <li>Freelance benefits</li>
                                <li>Self employement tax calculator</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div id='tab3-content' className='hidden'>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <ContactForm />
                </div>
            </React.Fragment>
        );
    }
}
