
import React, { Component, PureComponent } from 'react';

export default class Demo extends PureComponent {
    state = {
        carName: "奔驰"
    };

    change = () => {
        this.setState({ carName: "宝马" });
    };

    // shouldComponentUpdate (nextProps, nextStates) {
    //     console.log(nextProps, nextStates);//目标即将要变得值
    //     console.log(this.props, this.state);//当前的值
    //     if (JSON.stringify(nextStates) === JSON.stringify(this.state)) {
    //         return false;
    //     } else {
    //         return true;
    //     }

    // }

    render () {
        console.log("parent-----render");
        const { carName } = this.state;
        return (
            <div>
                <h4>我是A</h4>
                <p>车：{carName}</p>
                <button onClick={this.change}>换车</button>
                <B />
            </div>
        );
    }
}

class B extends PureComponent {

    // shouldComponentUpdate (nextProps, nextStates) {
    //     if (JSON.stringify(nextProps) === JSON.stringify(this.props)) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    render () {
        console.log("child-----render");

        return (
            <div>
                <h4>我是B</h4>
                <p>xxx</p>
            </div>
        );
    }
}

