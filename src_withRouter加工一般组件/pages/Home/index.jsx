import React, { Component } from 'react';
import News from './News';
import Msg from './Msg';
import MyNavLink from '../../components/MyNavLink';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class Home extends Component {
    render () {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li><MyNavLink to="/home/news">News</MyNavLink></li>
                        <li> <MyNavLink to="/home/msg">Message</MyNavLink></li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/home/news" component={News}></Route>
                    <Route path="/home/msg" component={Msg}></Route>
                    <Redirect to="/home/news" />
                </Switch>

            </div>

        );
    }
}
