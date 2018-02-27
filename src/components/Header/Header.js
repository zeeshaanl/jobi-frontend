import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { slide as Menu } from 'react-burger-menu'
import logo from './logo.jpg';

export default class Header extends Component {
    render() {
        return (
            <header className='header container-fluid'>
                <div className='row'>
                    <div className='col-xs-6 col-sm-3'>
                        <div className='yellow-icon hidden-xs hidden-sm'>
                            <a id='about' className='menu-item' href='/about'>
                                <FontAwesome name='bars' size='2x' />
                            </a>
                        </div>
                    </div>
                    <div className='logo-container col-sm-6 hidden-xs hidden-sm'>
                        <img className='logo' src={logo} alt='Jobi logo' />
                    </div>
                    <div className='col-xs-6 col-sm-3 pull-right'>
                        <div className='yellow-icon pull-right hidden-xs hidden-sm'>
                            <FontAwesome name='user' size='2x' />
                        </div>
                        <h3 className='mobile-title hidden-md hidden-lg'>JOBI</h3>
                    </div>
                </div>
            </header>
        );
    }
}

