import React, { Component } from 'react';
import store from "../../redux/store.js";

export default class Count extends Component {

    // componentDidMount () {
    //     //订阅redux的状态，发现变化后，执行回调，这里传入空对象，引起react重新执行render函数，从而引起页面变化
    //     store.subscribe(() => {
    //         this.setState({});
    //     });
    // }

    increment = () => {
        const { value } = this.selectNumber;
        store.dispatch({ type: "increment", data: value * 1 });
    };

    decrement = () => {
        const { value } = this.selectNumber;

        store.dispatch({ type: "increment", data: value * (-1) });
    };

    incrementOfOdd = () => {
        const { value } = this.selectNumber;

        if (store.getState() % 2 === 1) {
            store.dispatch({ type: "increment", data: value * 1 });
        }

    };

    incrementAsync = () => {
        const { value } = this.selectNumber;

        setTimeout(() => {
            store.dispatch({ type: "increment", data: value * 1 });
        }, 0);

    };

    render () {

        return (
            <div>
                <p>当前求和为 {store.getState()}</p>
                <select ref={(c) => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select> &nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementOfOdd}>当前求和为奇数时，加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}
