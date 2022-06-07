import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';

import Loading from './Loading';
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default class Demo extends Component {
    render () {
        return (
            <div>
                <div>
                    <ul className="nav nav-tabs">
                        <li><NavLink to="/home">home</NavLink></li>
                        <li> <NavLink to="/about">about</NavLink></li>
                    </ul>
                </div>
                {/** 组件加载失败的回调 */}
                <Suspense fallback={<Loading />
                }>
                    <Switch >
                        <Route path="/home" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Redirect to="/home" />
                    </Switch>
                </Suspense>

            </div>
        );
    }
}

