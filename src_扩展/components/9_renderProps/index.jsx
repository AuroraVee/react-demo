
import React, { Component } from 'react';

export default class Demo extends Component {

    render () {

        return (
            <div>
                <h4>我是A</h4>
                <B render={(name) => <C name={name} />}>
                </B>
            </div>
        );
    }
}

class B extends Component {
    state = {
        name: "B_"
    };
    render () {
        return (
            <div>
                <h4>我是B</h4>
                {this.props.render(this.state.name)}
            </div>
        );
    }
}

class C extends Component {


    render () {
        console.log("C--render");

        return (
            <div>
                <h4>我是C</h4>
                <p>B传给我的{this.props.name}</p>
            </div>
        );
    }
}