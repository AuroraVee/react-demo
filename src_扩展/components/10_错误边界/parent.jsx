import React, { Component } from 'react';
import Child from './Child';

export default class Demo extends Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError (error) {
        console.log(error);
        // 在render之前触发
        // 返回新的state
        return {
            hasError: true,
        };
    }

    render () {
        return (
            <>
                <p>parent</p>
                {this.state.hasError ? <h2>网络错误</h2> : <Child />
                }
            </>
        );
    }
}
