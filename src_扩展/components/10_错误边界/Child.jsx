import React, { Component } from 'react';

export default class Child extends Component {
    state = {
        users: []
    };
    render () {
        return (
            <div>Child
                {
                    this.state.users.map((obj, index) => {
                        return <p key={index}>{obj.name}</p>;
                    })
                }
            </div>
        );
    }
}
