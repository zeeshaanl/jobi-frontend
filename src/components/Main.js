import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './Search.js';
import Signup from './Signup.js';
import Login from './Login.js';
import JobDetail from './JobDetail.js';
import About from './About.js';
import UserProfile from './UserProfile.js';

export default class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Search} />
                <Route exact path='/register' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/job' component={JobDetail} />
                <Route exact path='/about' component={About} />
                <Route exact path='/profile' component={UserProfile} />
            </Switch>
        );
    }
}
