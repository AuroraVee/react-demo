import React, { Component } from 'react';

export default class Demo extends Component {

    state = {
        count: 0
    };

    add = (event) => {
        // const { count } = this.state;
        // this.setState({ count: count + 1 }, () => {
        //     console.log(this.state.count);
        // });

        this.setState((state, props) => {
            console.log(props);

            return { count: state.count + props.value };
        }, () => {
            console.log(this.state.count);
        });
    };

    render () {
        return (
            <div>
                <h1>当前求和为{this.state.count}</h1>
                <button onClick={this.add}>+1</button>
            </div>
        );
    }
}
