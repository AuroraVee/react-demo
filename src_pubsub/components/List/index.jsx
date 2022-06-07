import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import './index.css';

export default class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: "",
    };

    updateState = (_, data) => {

        this.setState(data);
    };

    render () {
        const { users, isFirst, isLoading, err } = this.state;

        return (
            <div className="row">
                {
                    isFirst ? <h2>输入搜索</h2> :
                        isLoading ? <h2>loading</h2> :
                            err ? <h2>err</h2> :
                                users.map((user) => {
                                    return (
                                        <div className="card" key={user.id}>
                                            <a href={user.html_url} target="_blank" rel="noreferrer">
                                                <img alt="portrait"
                                                    src={user.avatar_url}
                                                    style={{ width: "100px" }}
                                                />
                                            </a>
                                            <p className="card-text">{user.login}</p>
                                        </div>
                                    );
                                })
                }
            </div>
        );
    }

    componentDidMount () {
        this.token = PubSub.subscribe("update state", this.updateState);
    }

    componentWillUnmount () {
        PubSub.unsubscribe(this.token);
    }
}
