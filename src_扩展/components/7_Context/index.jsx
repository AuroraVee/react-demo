
import React, { Component } from 'react';

const UserNameContext = React.createContext();
const { Provider, Consumer } = UserNameContext;

export default class Demo extends Component {
    state = {
        name: "wjx",
        age: 18
    };

    render () {
        const { name, age } = this.state;
        return (
            <div>
                <h4>我是A</h4>
                <p>{name}</p>
                <Provider value={{ name, age }}>
                    <B />
                </Provider>
            </div>
        );
    }
}

class B extends Component {
    render () {
        return (
            <div>
                <h4>我是B</h4>
                <C /></div>
        );
    }
}

// class C extends Component {

//     //声明接收
//     static contextType = UserNameContext;

//     render () {

//         return (
//             <div>
//                 <h4>我是C</h4>
//                 <p>姓名是{this.context.name},年龄是{this.context.age}</p>
//             </div>
//         );
//     }
// }

function C () {
    return (

        <div>
            <h4>我是C</h4>
            <Consumer>
                {
                    value => `姓名是${value.name},年龄是${value.age}`
                }
            </Consumer>

        </div>
    );
}